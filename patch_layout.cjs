const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. KingKong icon and text spacing: mb-[5px] -> mb-[7px]
code = code.replace(/mb-\[5px\] shadow-sm/g, 'mb-[7px] shadow-sm');

// 2. Space between KingKong and Featured Cards is 20px
code = code.replace(/<div className="mt-1 mb-0 relative z-10 flex flex-col items-center">/g, '<div className="mt-[20px] mb-0 relative z-10 flex flex-col items-center">');

// 3. Middle Featured Cards and "吃喝玩乐神券" gap is 20px, and "吃喝玩乐神券" and nearby stores gap is 20px.
code = code.replace(/<div className="relative z-30 flex justify-center mt-4 mb-4">/g, '<div className="relative z-30 flex justify-center mt-[20px] mb-[20px]">');

// 4. Search box size is 710*66px => w-[355px] h-[33px]
// Container padding px-3 -> px-[10px] gives exactly 355px width on 375px container.
code = code.replace(/px-3 bg-\[\#160f24\] overflow-hidden rounded-b-\[12px\]/g, 'px-[10px] bg-[#160f24] overflow-hidden rounded-b-[12px]');
code = code.replace(/className="bg-white\/95 backdrop-blur-xl h-\[38px\] rounded-full/g, 'className="bg-white/95 backdrop-blur-xl h-[33px] rounded-full');

// Fix KingKong spacing alignment as well (use px-[10px] to match)
code = code.replace(/<div className="pl-4 pt-2 pb-1 overflow-hidden">/g, '<div className="pl-[10px] pt-2 pb-1 overflow-hidden">');
code = code.replace(/<div className="flex gap-\[18px\] overflow-x-auto hide-scrollbar pr-4">/g, '<div className="flex gap-[18px] overflow-x-auto hide-scrollbar pr-[10px]">');

// City changes
code = code.replace(/望京恒电大厦BC座/g, '五一广场');
code = code.replace(/北京欢迎您/g, '长沙欢迎您');
code = code.replace(/寻味地道北京/g, '寻味地道长沙');
code = code.replace(/寻找深夜治愈胃的麻辣香锅/g, '寻找深夜治愈胃的口味虾');

fs.writeFileSync('src/App.tsx', code);
console.log('patched');
