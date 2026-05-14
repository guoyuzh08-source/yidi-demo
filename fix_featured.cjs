const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Line clamp 3 -> 2
code = code.replace(/line-clamp-3/g, 'line-clamp-2');

// 2. Reason badge inline
code = code.replace(
  /<div className="flex items-center gap-2 mb-2 relative z-10 shrink-0">\s*<span className="text-\[14px\].*?>\s*推荐理由\s*<\/span>\s*<div className="flex gap-1\.5">\s*<span.*?>\s*<Star[\s\S]*?\/>\{" "\}\s*8年老店\s*<\/span>\s*<\/div>\s*<\/div>/g,
  `<div className="flex items-center gap-2 mb-1 relative z-10 shrink-0">
                 <span className="text-[14px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8C5A2A] to-[#D08C4A] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                   推荐理由<span className="text-[#8C5A2A] text-[12px] ml-1.5 opacity-90 font-bold border-l border-[#8C5A2A]/20 pl-1.5">8年老店</span>
                 </span>
               </div>`
);

// 3. Distance color alignment with time
// Look for {store.distance} inside text-mt-text-3 span.
// `<span className="font-mt-num">{store.time}</span> <span className="font-mt-num">{store.distance}</span>`
code = code.replace(/<span className="text-mt-text-3">\s*<span className="font-mt-num">\s*\{store\.distance\}\s*<\/span>\s*<\/span>/g, '<span className="font-mt-num">{store.distance}</span>');

// 4. 茶颜悦色 badge only
// <div className="absolute top-2 left-2 bg-black\/60 backdrop-blur-md text-\[\#FFF0D4\] text-\[10px\] font-medium px-2 py-1 rounded-full flex items-center border border-\[\#FFF0D4\]\/30 shadow-lg">\s*<ThumbsUp size=\{10\} className="mr-1" \/> 必点榜 \{" "\}\s*<span className="opacity-50 mx-1">\|<\/span>( | \{" "\}\n\s*)连续8年上榜\s*<\/div>
// We need to wrap it with {store.name === "茶颜悦色" && (...)}
// Actually, it's already there in the code? Let's check `grep` output:
// 200:          <div className="absolute top-2 left-2 ...">
// Let's replace the whole div block.
code = code.replace(
  /<div className="absolute top-2 left-2 bg-black\/60 backdrop-blur-md text-\[\#FFF0D4\] text-\[10px\] font-medium px-2 py-1 rounded-full flex items-center border border-\[\#FFF0D4\]\/30 shadow-lg\">\s*<ThumbsUp size=\{10\} className="mr-1" \/> 必点榜 \{" "\}\s*<span className="opacity-50 mx-1">\|<\/span>(?: | \{" "\}\n\s*)连续8年上榜\s*<\/div>/g,
  `{store.name === "茶颜悦色" && (
    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[#FFF0D4] text-[10px] font-medium px-2 py-1 rounded-full flex items-center border border-[#FFF0D4]/30 shadow-lg">
      <ThumbsUp size={10} className="mr-1" /> 必点榜 <span className="opacity-50 mx-1">|</span> 连续8年上榜
    </div>
  )}`
);

// 5. Fixed height for Coverflow container and inactive cards
//    "主卡和未滑动到的卡片，卡片高度应该是一致的"
//    "不要出现，滑到哪张卡片，那张卡片突然加高了高度"
//    "推荐卡片的大小应该是718*398px" => 359x199px
//    animate height of motion.div containing Coverflow:
//    change to: height: 199
code = code.replace(
  /animate=\{\{\s*height:\s*(?:isActive && \(store as any\)\.isAiCard && isAiExpanded\s*\?\s*\d+\s*:\s*\d+|\(\s*featuredStoresToUse\[[\s\S]*?\] as any\s*\)\?\.isAiCard && isAiExpanded\s*\?\s*\d+\s*:\s*\d+),/g,
  `animate={{
      height: 199,`
);

// We also need to fix Coverflow Card width/height and layout:
// ` className={\`absolute w-[280px] overflow-hidden rounded-[12px]` 
// -> ` className={\`absolute w-[359px] h-[199px] overflow-hidden rounded-[12px]`
code = code.replace(/className=\{\`absolute w-\[280px\] overflow-hidden rounded-\[12px\]/g, 'className={`absolute w-[359px] h-[199px] overflow-hidden rounded-[12px]');

// 6. Plan3 recommendation card width
// `<div className="relative w-[340px] rounded-[12px]`
// -> `<div className="relative w-[359px] h-[199px] rounded-[12px]`
code = code.replace(/<div className="relative w-\[340px\] rounded-\[12px\]/g, '<div className="relative w-[359px] h-[199px] rounded-[12px]');

// 7. Reduce sizes inside the card to fit inside 199px height!
// Top Image height 120px -> maybe 80px? Or 90px? Let's check how much space we have.
// 199 - 90 (img) = 109px for content.
// Content: py-2 instead of py-3.
// Reason box: p-2 instead of p-3.
code = code.replace(/h-\[120px\]/g, 'h-[90px]');
code = code.replace(/px-4 py-3/g, 'px-4 py-2');

fs.writeFileSync('src/App.tsx', code);
console.log('Done script');
