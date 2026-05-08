import { MapPin, Bell, Search, ChevronRight, Home, Crown, FileText, User, Star, MoreVertical, ThumbsUp, Quote, Moon, ChevronDown, Sparkles } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

// Mock Data
const KingKongCategories = [
  { name: "美食", icon: "🍔", color: "bg-orange-100 text-orange-500" },
  { name: "甜点饮品", icon: "🧋", color: "bg-pink-100 text-pink-500" },
  { name: "超市便利", icon: "🛒", color: "bg-blue-100 text-blue-500" },
  { name: "蔬菜水果", icon: "🍎", color: "bg-green-100 text-green-500" },
  { name: "美团买药", icon: "💊", color: "bg-red-100 text-red-500" },
  { name: "拼好饭", icon: "🍱", color: "bg-yellow-100 text-yellow-600" },
  { name: "骑车", icon: "🚲", color: "bg-teal-100 text-teal-500" },
  { name: "跑腿", icon: "🏃", color: "bg-indigo-100 text-indigo-500" },
  { name: "买菜", icon: "🥦", color: "bg-emerald-100 text-emerald-500" },
  { name: "全部分类", icon: "⬇️", color: "bg-gray-100 text-gray-500" },
];

const FeaturedStores = [
  {
    id: 1,
    name: "茶颜悦色",
    score: 4.8,
    sales: 8901,
    perCapita: 18,
    time: "30分钟",
    distance: "1.2km",
    tags: ["极速退"],
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "经典茶饮品牌，茶底醇厚，奶香浓郁，招牌幽兰拿铁不可错过。"
  },
  {
    id: 2,
    name: "南宋胡记",
    score: 4.9,
    sales: 6328,
    perCapita: 26,
    time: "48分钟",
    distance: "2.5km",
    tags: ["免配送费"],
    img: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "店内酥点结合了历史传承、非遗技艺和宋式美学。制作工艺精湛，外观简约典雅，口感细腻丰富"
  },
  {
    id: 3,
    name: "四季民福烤鸭店",
    score: 4.9,
    sales: 4500,
    perCapita: 156,
    time: "55分钟",
    distance: "4.8km",
    tags: ["品牌", "支持自取"],
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "北京必吃榜推荐，烤鸭皮酥肉嫩，入口即化，感受极致京味体验。"
  },
  {
    id: "ai-recommend" as any,
    isAiCard: true as any,
    name: "AI 懂你所想",
    score: 0,
    sales: 0,
    perCapita: 0,
    time: "",
    distance: "",
    tags: [],
    img: "",
    reason: ""
  }
];

const StoreList = [
  {
    id: 1,
    name: "西北莜面村（望京华彩店）",
    brand: true,
    score: 4.5,
    sales: 6328,
    perCapita: 26,
    deliveryStart: 20,
    deliveryFee: 11.12,
    time: "29分钟",
    distance: "2.5km",
    rank: "望京咖啡口碑榜第1名",
    tags: ["已测体温"],
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "CUP ONE(望京麒麟社店...",
    brand: false,
    score: 4.9,
    sales: 6202,
    perCapita: 26,
    deliveryStart: 15,
    deliveryFee: 3.5,
    time: "29分钟",
    distance: "2.5km",
    rank: "",
    tags: ["支持自取", "优选"],
    redPacketUsable: false,
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "很久以前羊肉串(望京店)",
    brand: true,
    score: 4.8,
    sales: 4102,
    perCapita: 112,
    deliveryStart: 0,
    deliveryFee: 3.0,
    time: "45分钟",
    distance: "3.2km",
    rank: "望京烧烤热销榜第2名",
    tags: ["极速退"],
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const Plan3FeaturedCard = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [ticks, setTicks] = React.useState(0);
  const store = FeaturedStores[0]; // 茶颜悦色

  React.useEffect(() => {
    if (isExpanded) {
      setTicks(0);
      const timer = setInterval(() => {
        setTicks(t => {
          if (t > 250) {
            clearInterval(timer);
            return 250;
          }
          return t + 4;
        });
      }, 15);
      return () => clearInterval(timer);
    }
  }, [isExpanded]);

  const aiRestaurants = [
    { name: "胡大饭馆(簋街)", score: "4.9分", reason: "深夜食堂，麻小YYDS", img: "https://images.unsplash.com/photo-1555126634-de26c2e22c95?auto=format&fit=crop&q=80&w=100&h=100" },
    { name: "老张串串香", score: "4.8分", reason: "热辣红锅超级解馋", img: "https://images.unsplash.com/photo-1582875151240-da232fcc6f3d?auto=format&fit=crop&q=80&w=100&h=100" },
    { name: "聚宝源老北京", score: "4.9分", reason: "地道铜锅，鲜切黑山羊", img: "https://images.unsplash.com/photo-1560159846-5db2e6db5cbb?auto=format&fit=crop&q=80&w=100&h=100" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Main Card */}
      <div className="relative w-[340px] rounded-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex flex-col border border-gray-100/50 bg-white z-20 shrink-0">
        {/* Top Image */}
        <div className="relative shrink-0">
          <img src={store.img} className="w-full h-[120px] object-cover rounded-t-[24px]" alt={store.name} />
          {/* Badge */}
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[#FFF0D4] text-[9px] font-medium px-2 py-1 rounded-full flex items-center border border-[#FFF0D4]/30 shadow-lg">
            <ThumbsUp size={10} className="mr-1" /> 必点榜 <span className="opacity-50 mx-1">|</span> 连续8年上榜
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-3 relative bg-white rounded-b-[24px] flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-1">
             <h2 className="text-[17px] font-bold text-gray-900 leading-tight truncate pr-2">{store.name}</h2>
             <div className="bg-[#FFD161] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full cursor-pointer shadow-sm active:scale-95 transition-transform flex items-center justify-center shrink-0">
               去下单
             </div>
          </div>

          <div className="flex items-center text-[11px] text-gray-500 mb-2.5 space-x-2 shrink-0">
             <span className="text-orange-600 font-extrabold bg-orange-100/90 px-1 py-0.5 rounded flex items-center shadow-sm">
               <Star size={10} fill="currentColor" className="mr-0.5"/> {store.score}
             </span>
             <span className="bg-gray-100 px-1 py-0.5 rounded font-medium">月售{store.sales}</span>
             <span>¥{store.perCapita}/人</span>
             <span>{store.time} {store.distance}</span>
          </div>

          <div className="bg-[#F9F9F9] rounded-lg p-2 flex gap-2 relative border border-gray-100 shadow-inner mb-3 shrink-0">
             <div className="absolute top-1 right-2 text-[#EFEFEF] opacity-50">
               <Quote size={24} fill="currentColor" stroke="none" />
             </div>
             <div className="w-0.5 bg-[#FFD161] rounded-full shrink-0 relative z-10"></div>
             <div className="flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-2 mb-1.5 relative z-10 shrink-0">
                   <span className="text-[14px] font-bold text-gray-900 tracking-tight">推荐理由</span>
                   <div className="flex gap-1.5">
                      <span className="bg-[#F3E2CF] text-[#8C5A2A] text-[9px] px-1.5 py-0.5 rounded-sm flex items-center shadow-sm whitespace-nowrap">
                        <Star size={8} className="mr-1" fill="currentColor" stroke="none"/> 8年老店
                      </span>
                   </div>
                </div>
                <p className="text-[12px] text-[#A67B5B] leading-snug relative z-10 font-medium">
                   {store.reason}
                </p>
             </div>
          </div>

          {/* Expanded List moved inside the card */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, marginTop: isExpanded ? 12 : 0, marginBottom: isExpanded ? 12 : 0 }}
            className="w-full overflow-hidden flex flex-col z-20"
          >
            <div className="pb-2 px-1 flex items-center gap-1.5 shrink-0 border-t border-gray-100 pt-3 mt-1">
               <Sparkles size={16} className="text-orange-500" />
               <span className="text-[14px] font-bold text-gray-800 tracking-wide">为您精选相似好店</span>
            </div>
            
            {aiRestaurants.map((r, i) => {
              const START_TICK = i * 40;
              const myTicks = Math.max(0, ticks - START_TICK);
              if (myTicks === 0) return null;

              const showImage = myTicks > 2;
              const showScore = myTicks > r.name.length + 5;

              return (
                <React.Fragment key={i}>
                  <div className="flex gap-3 bg-gradient-to-r from-[#FFFBF5] to-[#FFF5F0] rounded-xl p-3 mb-2.5 border border-[#FBE6D4] shrink-0 relative overflow-hidden group shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full pointer-events-none"></div>
                     {showImage ? (
                       <motion.img 
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         src={r.img} 
                         className="w-14 h-14 rounded-xl object-cover shadow-[0_2px_8px_rgba(255,140,0,0.1)] shrink-0 z-10" 
                       />
                     ) : <div className="w-14 h-14 rounded-xl bg-orange-100/50 animate-pulse shrink-0 z-10"></div>}
                     <div className="flex flex-col justify-center flex-1 min-w-0 z-10">
                        <div className="text-[15px] font-bold text-gray-900 truncate">
                          {r.name.substring(0, Math.min(r.name.length, myTicks))}
                          {myTicks < r.name.length && <span className="inline-block w-1 h-3.5 bg-orange-400 ml-0.5 animate-pulse"></span>}
                        </div>
                        <div className="text-[12px] text-[#A67B5B] truncate mt-1.5 flex items-center">
                           <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 shrink-0 opacity-60"></span>
                           {r.reason.substring(0, Math.max(0, myTicks - r.name.length))}
                           {myTicks >= r.name.length && myTicks < r.name.length + r.reason.length && <span className="inline-block w-1.5 h-3 bg-orange-300 ml-0.5 animate-pulse mt-0.5"></span>}
                        </div>
                     </div>
                     {showScore && (
                       <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="text-[13px] font-black text-orange-600 flex items-center justify-center shrink-0 z-10">
                         {r.score}
                       </motion.div>
                     )}
                  </div>
                  {i === 0 && myTicks > 20 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full bg-gradient-to-r from-[#FF5C5C] to-[#E32323] rounded-xl p-3 mb-2.5 flex items-center justify-between text-[#FFEBD2] shadow-[0_4px_12px_rgba(227,35,35,0.2)] shrink-0 border border-[#FF8F8F]"
                    >
                      <div className="flex items-center gap-2.5">
                         <div className="w-9 h-9 bg-gradient-to-br from-[#FFDE73] to-[#FFC300] rounded-full flex items-center justify-center shadow-inner relative">
                           <span className="text-[20px] drop-shadow-sm rotate-12">🧧</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[14px] font-black text-[#FFDE73] drop-shadow-sm tracking-wide">天降神券 最高减15元</span>
                            <span className="text-[11px] font-medium opacity-90 mt-0.5">本单可用，下单更优惠</span>
                         </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#FFDE73] to-[#FFC300] text-[#D0021B] text-[12px] font-black px-3.5 py-1.5 rounded-full shadow-md active:scale-95 transition-transform cursor-pointer">
                        去领取
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>

          {/* Expand Button */}
          <div 
             className="w-full py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full text-blue-600 text-[13px] font-bold flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors shadow-sm shrink-0 overflow-visible z-30"
             onClick={() => setIsExpanded(!isExpanded)}
          >
             {isExpanded ? "收起相似好店推荐" : (
               <div className="relative flex items-center">
                 <Sparkles size={14} className="mr-1" /> 
                 <span>点击查看更多推荐</span>
                 <motion.div 
                   animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }} 
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="absolute -top-[14px] -right-[68px] bg-gradient-to-r from-red-500 to-[#FF4D4F] text-white text-[9px] px-1.5 py-[1px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[1px] shadow-sm flex items-center font-medium z-10 whitespace-nowrap border border-white/50"
                 >
                   红包惊喜 <span className="ml-[1px] text-[10px] leading-none">🧧</span>
                 </motion.div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AIRestaurantCard = ({ isActive, isExpanded, setIsExpanded }: { isActive: boolean, isExpanded: boolean, setIsExpanded: (v: boolean) => void }) => {
  const [ticks, setTicks] = React.useState(0);

  React.useEffect(() => {
    if (isActive) {
      setTicks(0);
      const timer = setInterval(() => {
        setTicks(t => {
          if (t > 250) {
            clearInterval(timer);
            return 250;
          }
          return t + 4;
        });
      }, 15);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  const aiRestaurants = [
    {
      name: "胡大饭馆(簋街)",
      score: "4.9分",
      reason: "深夜食堂，麻小YYDS",
      img: "https://images.unsplash.com/photo-1555126634-de26c2e22c95?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "老张串串香",
      score: "4.8分",
      reason: "热辣红锅超级解馋",
      img: "https://images.unsplash.com/photo-1582875151240-da232fcc6f3d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "聚宝源老北京",
      score: "4.9分",
      reason: "地道铜锅，鲜切黑山羊",
      img: "https://images.unsplash.com/photo-1560159846-5db2e6db5cbb?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "金鼎轩(地坛的店)",
      score: "4.8分",
      reason: "24h不打烊的广式早茶",
      img: "https://images.unsplash.com/photo-1563245372-f2172452c92e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "望京小腰",
      score: "4.7分",
      reason: "深夜烧烤撸串必点",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <div className="w-full h-full bg-[#160f24] rounded-[24px] flex flex-col p-3 shadow-inner relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF2E93]/20 blur-[50px] pointer-events-none z-0" />
      
      <div className="flex items-center gap-2 mb-2 relative z-10 shrink-0">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF2E93] to-[#FFD161] flex items-center justify-center font-bold text-white text-[11px] shadow-[0_0_8px_rgba(255,46,147,0.5)]">AI</div>
        <span className="text-[14px] font-bold text-[#FFD161] drop-shadow-md tracking-wider">深夜充电好去处</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative z-10 transition-all duration-300 w-full mb-2">
        <div className="flex flex-col gap-2 overflow-y-auto hide-scrollbar w-full h-full pb-2">        
          {aiRestaurants.map((r, i) => {
            const START_TICK = i * 40;
            const myTicks = Math.max(0, ticks - START_TICK);
            if (myTicks === 0) return null;

            const showImage = myTicks > 2;
            const showScore = myTicks > r.name.length + 5;
            
            const nameLen = Math.min(r.name.length, myTicks);
            const reasonWait = r.name.length + 10;
            const reasonLen = myTicks > reasonWait ? Math.min(r.reason.length, myTicks - reasonWait) : 0;

            return (
              <div key={i} className="flex gap-2 items-center bg-white/10 rounded-xl p-1.5 border border-white/10 relative z-10 w-full shrink-0">
                 {showImage ? (
                   <img src={r.img} className="w-10 h-10 rounded-[10px] object-cover shrink-0" alt="" />
                 ) : (
                   <div className="w-10 h-10 rounded-[10px] bg-white/10 shrink-0 animate-pulse" />
                 )}
                 <div className="flex flex-col flex-1 pr-1 overflow-hidden h-full justify-center">
                   <div className="flex justify-between items-center whitespace-nowrap">
                     <span className="text-[13px] font-bold text-white tracking-tight">{r.name.substring(0, nameLen)}</span>
                     {showScore && <span className="text-[10px] font-black text-[#FFD161] bg-[#FFD161]/20 px-1 rounded">{r.score}</span>}
                   </div>
                   <span className="text-[11px] text-gray-300/80 leading-tight mt-0.5 truncate h-[16px]">
                     {r.reason.substring(0, reasonLen)}
                   </span>
                 </div>
              </div>
            );
          })}
        </div>
        
        {/* Fade Out Effect */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#160f24] to-transparent pointer-events-none" />
        )}
      </div>

      {/* Button at bottom */}
      <div className="w-full flex justify-center z-20 pointer-events-auto shrink-0 mt-auto">
        <div 
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          className="text-white/90 font-medium active:text-white text-[11px] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full cursor-pointer hover:bg-white/20 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/10 flex items-center justify-center"
        >
          {isExpanded ? '收起推荐' : '展开全部 5 家精选推荐'}
        </div>
      </div>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 3600); // 24 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <span className="flex items-center gap-0.5 font-mono text-[11px] bg-black/10 px-1 rounded-sm">
      <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
    </span>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'special' | 'red_packet'>('all');
  const [activeStoreIndex, setActiveStoreIndex] = useState(1);
  const [isAiExpanded, setIsAiExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'plan1' | 'plan2' | 'plan3'>('plan1');
  const [isPlan2Expanded, setIsPlan2Expanded] = useState(false);
  const [isPlan3Expanded, setIsPlan3Expanded] = useState(false);
  const [redPacketAnim, setRedPacketAnim] = useState(false);

  useEffect(() => {
    if (activeTab === 'plan2') {
      // Trigger animation after a slight delay
      const timer1 = setTimeout(() => setRedPacketAnim(true), 500);
      const timer2 = setTimeout(() => setRedPacketAnim(false), 3000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [activeTab]);

  const listRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setActiveStoreIndex(activeStoreIndex + 1);
    } else if (info.offset.x > swipeThreshold) {
      setActiveStoreIndex(activeStoreIndex - 1);
    }
  };

  const scrollToFilter = () => {
    setActiveFilter('red_packet');
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const featuredStoresToUse = activeTab === 'plan1' || activeTab === 'plan3' ? FeaturedStores : FeaturedStores.filter(s => !(s as any).isAiCard);

  const filteredStores = StoreList.filter(store => {
     if (activeFilter === 'red_packet') return store.redPacketUsable;
     return true;
  });

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center font-sans">
      {/* Mobile container */}
      <div className="bg-[#f0f0f5] w-[375px] h-[812px] relative overflow-hidden flex flex-col shadow-2xl overflow-y-auto hide-scrollbar">
        
        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-[80px]">
          
          {/* Header & Banner Area (Night Vibe) */}
          <div className="relative pt-4 pb-2 px-3 bg-[#160f24] overflow-hidden rounded-b-[24px] shadow-[0_4px_15px_rgba(22,15,36,0.1)] mb-1">
            {/* Background Image: Starry Sky */}
            <div className="absolute inset-0 opacity-85 mix-blend-luminosity">
              <img 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover"
                alt="Starry Sky"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#160f24]/95 via-[#4a235a]/50 to-[#160f24]/10"></div>
            </div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
               {/* Neon pink glow */}
               <div className="absolute top-[-10%] right-[-10%] w-[180px] h-[180px] bg-[#FF2E93] rounded-full blur-[70px] opacity-30"></div>
               {/* Neon orange glow */}
               <div className="absolute bottom-[-5%] left-[-10%] w-[150px] h-[150px] bg-[#FFD161] rounded-full blur-[60px] opacity-30"></div>
               
               <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full opacity-80 shadow-[0_0_5px_white]"></div>
               <div className="absolute top-12 left-32 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-90 blink shadow-[0_0_8px_yellow]"></div>
               <div className="absolute top-8 right-20 w-1 h-1 bg-pink-300 rounded-full opacity-70 shadow-[0_0_5px_pink]"></div>
               <div className="meteor" style={{ top: '10%', right: '10%', animationDelay: '0s' }}></div>
            </div>
            
            {/* Top Bar */}
            <div className="flex justify-between items-center relative z-10 mb-2 mt-1">
              <div className="flex items-center text-[14px] font-bold text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                <MapPin size={15} className="mr-1 text-[#FFD161]" />
                <span className="drop-shadow-sm">望京恒电大厦BC座</span>
                <ChevronRight size={14} className="ml-1 text-white/70" />
              </div>
              <div className="relative cursor-pointer bg-black/40 p-2 rounded-full backdrop-blur-md border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                <Bell size={18} className="text-white drop-shadow-sm"/>
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF2E93] rounded-full border-2 border-[#160f24] shadow-[0_0_6px_#FF2E93]"></span>
              </div>
            </div>

            {/* Title */}
            <div className="relative z-10 mb-2 pl-1">
               <h1 className="text-[34px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FFE599] to-[#FF9E00] tracking-tight leading-none drop-shadow-[0_2px_15px_rgba(255,209,97,0.35)]">
                 北京欢迎您
               </h1>
               <p className="text-[#FFD161] text-[13px] font-semibold mt-2.5 flex items-center gap-1.5 opacity-95 drop-shadow-md tracking-wide">
                 <Moon size={13} fill="currentColor" className="text-[#FFD161]" /> 深夜恰夜宵，寻味地道北京
               </p>
            </div>

            {/* Search Bar */}
            <div className="relative z-20 w-full mt-2">
              <div className="bg-white/95 backdrop-blur-xl h-[38px] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.2)] flex items-center border border-white/30 overflow-hidden group hover:bg-white transition-colors">
                <Search className="text-gray-400 ml-3.5 shrink-0 group-hover:text-[#FF9E00] transition-colors" size={16} />
                <input 
                  type="text" 
                  className="flex-1 bg-transparent px-2.5 text-[13px] text-gray-800 outline-none w-full font-medium placeholder:text-gray-400/80" 
                  placeholder="寻找深夜治愈胃的麻辣香锅"
                />
                <button className="bg-gradient-to-r from-[#FFD161] to-[#FFB000] text-gray-900 px-5 h-full text-[13px] font-extrabold shadow-md whitespace-nowrap hover:brightness-105 transition-all">
                  搜 索
                </button>
              </div>
            </div>
          </div>

          {/* Categories: 1 Row, 5.5 Items */}
          <div className="pl-3 pt-2 pb-1 overflow-hidden">
             <div className="flex gap-[17px] overflow-x-auto hide-scrollbar pr-3">
              {KingKongCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col items-center cursor-pointer group w-[44px] shrink-0">
                  <div className={`w-[44px] h-[44px] rounded-[16px] ${cat.color} flex items-center justify-center text-[22px] mb-1 shadow-sm group-hover:scale-105 transition-transform`}>
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-medium text-gray-700 whitespace-nowrap">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Card Module */}
          <div className="mt-1 mb-0 relative z-10 flex flex-col items-center">
            {/* 2D Coverflow Featured Cards */}
            {activeTab === 'plan3' ? (
              <div className="relative w-full flex items-center justify-center overflow-visible z-20">
                <Plan3FeaturedCard />
              </div>
            ) : (
            <motion.div 
              animate={{ height: (featuredStoresToUse[((activeStoreIndex % featuredStoresToUse.length) + featuredStoresToUse.length) % featuredStoresToUse.length] as any)?.isAiCard && isAiExpanded ? 380 : 310 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full flex items-center justify-center overflow-visible z-20"
            >
              {[-2, -1, 0, 1, 2].map((offset) => {
                const virtualIndex = activeStoreIndex + offset;
                const dataIndex = ((virtualIndex % featuredStoresToUse.length) + featuredStoresToUse.length) % featuredStoresToUse.length;
                const store = featuredStoresToUse[dataIndex];
                const isActive = offset === 0;
                const isLeft = offset < 0;
                const distance = Math.abs(offset);
                
                return (
                  <motion.div 
                    key={virtualIndex} 
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.05}
                    onDragEnd={handleDragEnd}
                    onClick={() => setActiveStoreIndex(virtualIndex)}
                    initial={false}
                    animate={{
                      height: isActive && (store as any).isAiCard && isAiExpanded ? 380 : 310,
                      x: isActive ? 0 : (isLeft ? -50 - 14 * (distance - 1) : 50 + 14 * (distance - 1)),
                      scale: isActive ? 1 : 1 - 0.1 * distance,
                      rotate: 0,
                      zIndex: 20 - distance,
                      opacity: isActive ? 1 : 1 - 0.2 * distance
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`absolute w-[280px] overflow-hidden rounded-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex flex-col border border-gray-100/50 ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'} ${(store as any).isAiCard ? 'bg-transparent' : 'bg-white'}`}
                  >
                    {/* Mask for inactive cards */}
                    {!isActive && <div className="absolute inset-0 bg-white/40 z-50 pointer-events-none" />}

                    {(store as any).isAiCard ? (
                      <AIRestaurantCard isActive={isActive} isExpanded={isAiExpanded} setIsExpanded={setIsAiExpanded} />
                    ) : (
                      <>
                        {/* Top Image */}
                        <div className="relative shrink-0">
                          <img src={store.img} className="w-full h-[120px] object-cover" alt={store.name} />
                          {/* Badge */}
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[#FFF0D4] text-[9px] font-medium px-2 py-1 rounded-full flex items-center border border-[#FFF0D4]/30 shadow-lg">
                            <ThumbsUp size={10} className="mr-1" /> 必点榜 <span className="opacity-50 mx-1">|</span> 连续8年上榜
                          </div>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-3 relative bg-white flex-1 flex flex-col">
                          <div className="flex justify-between items-center mb-1">
                             <h2 className="text-[17px] font-bold text-gray-900 leading-tight truncate pr-2">{store.name}</h2>
                             <div className="bg-[#FFD161] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full cursor-pointer shadow-sm active:scale-95 transition-transform flex items-center justify-center shrink-0">
                               去下单
                             </div>
                          </div>

                          <div className="flex justify-between items-center text-[10px] text-gray-500 mb-2">
                             <div className="flex items-center gap-1.5">
                                <span className="text-gray-900 font-bold text-[12px]">{store.score}</span>
                                <span>月售{store.sales}</span>
                                <span>人均¥{store.perCapita}</span>
                             </div>
                             <div className="flex gap-2 text-[10px]">
                                <span>{store.time}</span>
                                <span className="text-gray-400">{store.distance}</span>
                             </div>
                          </div>

                          {/* Reason Box */}
                          <div className="bg-[#FFF9F3] rounded-xl p-2.5 relative overflow-hidden border border-[#FBE6D4] mt-auto">
                             <Quote size={40} className="absolute -top-1 -right-1 text-[#F4DCC4] opacity-40 rotate-180" fill="currentColor" stroke="none" />
                             <div className="flex items-center gap-2 mb-1.5 relative z-10 shrink-0">
                                <span className="text-[14px] font-bold text-gray-900 tracking-tight">推荐理由</span>
                                <div className="flex gap-1.5">
                                   <span className="bg-[#F3E2CF] text-[#8C5A2A] text-[9px] px-1.5 py-0.5 rounded-sm flex items-center shadow-sm whitespace-nowrap">
                                     <Star size={8} className="mr-1" fill="currentColor" stroke="none"/> 8年老店
                                   </span>
                                </div>
                             </div>
                             <p className="text-[12px] text-[#A67B5B] leading-snug relative z-10 font-medium">
                                {store.reason}
                             </p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
            )}

            {/* Plan 2: Expand button and expanded list */}
            {activeTab === 'plan2' && (
              <div className="w-full px-2 -mt-4 mb-4 relative z-10 flex flex-col items-center">
                {/* Expanded Content with Vibe and Reason */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isPlan2Expanded ? 'auto' : 0, 
                    opacity: isPlan2Expanded ? 1 : 0,
                    marginBottom: isPlan2Expanded ? 24 : 0
                  }}
                  className="w-full overflow-hidden flex flex-col gap-3.5 mt-4"
                >
                  {StoreList.slice(0, 5).map((s, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isPlan2Expanded ? 1 : 0, y: isPlan2Expanded ? 0 : 10 }}
                      transition={{ delay: isPlan2Expanded ? i * 0.05 : 0 }}
                      className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-[20px] p-3 flex gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-white/80 relative overflow-hidden"
                    >
                      {/* Ambient Glow */}
                      <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FFD161]/20 rounded-full blur-[20px] pointer-events-none"></div>
                      
                      <div className="relative shrink-0">
                         <img src={s.img} className="w-[100px] h-[100px] rounded-xl object-cover shadow-[0_2px_8px_rgba(0,0,0,0.1)]" alt="" />
                         <div className="absolute -top-1.5 -left-1.5 bg-gradient-to-r from-[#FF4D4F] to-[#FF7A45] text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm shadow-md rotate-[-6deg] border border-[#FF4D4F]/50">
                           TOP {i + 1}
                         </div>
                      </div>
                      
                      <div className="flex flex-col flex-1 min-w-0 py-0.5 relative z-10">
                        <div className="text-[16px] font-extrabold text-gray-900 truncate mb-1.5 pr-2">{s.name}</div>
                        <div className="flex items-center text-[11px] text-gray-500 mb-2 gap-2">
                          <span className="text-orange-600 font-extrabold bg-orange-100/90 px-1 py-0.5 rounded flex items-center gap-0.5 shadow-sm border border-orange-200/50">
                             <Star size={10} fill="currentColor"/> {s.score}
                          </span>
                          <span className="bg-gray-100/80 px-1.5 py-0.5 rounded text-gray-500 font-medium border border-gray-200/50">月售{s.sales}</span>
                        </div>
                        
                        {/* Zhongcao Reason Box */}
                        <div className="bg-white/70 rounded-lg p-2 mt-auto border border-[#FBE6D4]/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.8)] relative">
                           <p className="text-[11px] text-[#A67B5B] leading-[1.3] font-bold line-clamp-2">
                             <Quote size={12} className="inline mr-1 text-[#FFD161] drop-shadow-sm" fill="currentColor" stroke="none" />
                             {s.name.includes('麻小') || s.name.includes('西北') ? '夜宵顶流！味道绝绝子，鲜香麻辣吮指回味，闭眼点不踩雷～' 
                              : s.name.includes('烧烤') || s.name.includes('串') ? '深夜灵魂烧烤，肉质鲜嫩多汁，香气扑鼻，简直是长夜必备！'
                              : '种草神仙店铺！口味超赞，氛围感拉满，吃过一次就念念不忘。'}
                           </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Liquid Glass Pedestal Button */}
                <div
                  onClick={() => setIsPlan2Expanded(!isPlan2Expanded)}
                  className="relative w-[345px] py-2.5 px-6 bg-gradient-to-b from-white/40 via-white/60 to-white/40 backdrop-blur-[32px] border border-white/60 shadow-[0_16px_40px_rgba(0,0,0,0.1),inset_0_4px_12px_rgba(255,255,255,1),inset_0_-2px_10px_rgba(255,255,255,0.6)] rounded-[20px] cursor-pointer flex flex-col items-center justify-center group overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-1.5 text-gray-900 font-extrabold text-[15px] z-20">
                    <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,1)] tracking-widest">{isPlan2Expanded ? '收起神秘夜宵榜单' : '点击展开 10 家精选夜宵'}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 drop-shadow-sm ${isPlan2Expanded ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                  </div>

                  {/* Liquid reflections */}
                  <div className="absolute top-0 left-[5%] w-[90%] h-[3px] bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[1px]"></div>
                  <div className="absolute top-[20px] left-[20%] w-[60%] h-[15px] bg-white/50 blur-[10px] rounded-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[0.5px]"></div>
                  
                  {/* Dynamic swipe highlight */}
                  <div className="absolute -inset-x-[150%] top-0 bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out transform skew-x-[-20deg] z-10 pointer-events-none"></div>
                </div>
              </div>
            )}

            {/* Red Packet Static Banner */}
            {activeTab === 'plan1' && (
              <div className="relative z-30 flex justify-center mt-4 mb-4">
              <div 
                onClick={scrollToFilter}
                className="w-[340px] bg-gradient-to-r from-[#FF4D4F] to-[#FF7A45] rounded-[16px] py-2 px-4 flex justify-between items-center text-white cursor-pointer shadow-[0_4px_16px_rgba(255,77,79,0.25)] relative overflow-hidden hover:brightness-105 transition-all"
              >
                <div className="flex items-center z-10">
                  <div className="bg-white/20 text-white font-black text-[22px] px-2.5 py-0.5 rounded-lg mr-3 flex items-center shadow-inner tracking-tight border border-white/20 backdrop-blur-sm">
                    <span className="text-[14px] font-bold mr-0.5">¥</span>18
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-extrabold leading-tight drop-shadow-sm tracking-wide">吃喝玩乐神券</span>
                    <span className="text-[11px] text-white/90 mt-0.5 font-medium flex items-center gap-1">距失效 <Countdown /></span>
                  </div>
                </div>
                <div className="z-10 bg-white text-[#FF4D4F] text-[12px] font-black px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap active:scale-95 transition-transform">
                  立即下单
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute left-1/4 bottom-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              </div>
            </div>
            )}
          </div>

          {/* Store List Header with Filters */}
          <div ref={listRef} className="sticky top-0 bg-[#f5f5f5] z-30 pt-0 pb-2 px-3 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.05)]">
             <div className="flex items-center gap-5 mb-3 px-1">
                <div className="relative cursor-pointer">
                  <span className="text-[18px] font-extrabold text-gray-900">附近商家</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#FFD161] rounded-full"></div>
                </div>
             </div>
             
             {/* Dynamic Filter Row */}
             <div className="flex gap-2 overflow-x-auto hide-scrollbar text-[12px] pb-1 px-1">
                <div 
                  onClick={() => setActiveFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer font-medium ${activeFilter === 'all' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 border border-transparent shadow-sm'}`}
                >
                  综合排序
                </div>
                {/* Red Packet Filter Toggle */}
                <div 
                  onClick={() => setActiveFilter(activeFilter === 'red_packet' ? 'all' : 'red_packet')}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors flex items-center cursor-pointer font-medium border ${activeFilter === 'red_packet' ? 'bg-red-50 text-red-600 border-red-200 shadow-[0_2px_8px_rgba(239,68,68,0.15)]' : 'bg-white text-gray-600 border-transparent shadow-sm'}`}
                >
                  <div className={`mr-1 flex items-center justify-center rounded-sm w-3.5 h-3.5 text-[9px] font-bold ${activeFilter === 'red_packet' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-500'}`}>¥</div>可用红包
                </div>
                <div 
                  onClick={() => setActiveFilter('special')}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer font-medium ${activeFilter === 'special' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 border border-transparent shadow-sm'}`}
                >
                  特价外卖
                </div>
                <div className="px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer font-medium bg-white text-gray-600 border border-transparent shadow-sm">
                  满减优惠 <ChevronRight size={12} className="inline ml-0.5 text-gray-400" />
                </div>
             </div>
          </div>

          {/* Store List Cards */}
          <div className="px-3 pb-4 space-y-2.5">
             {filteredStores.map((store) => (
               <div key={store.id} className="bg-white p-3 rounded-2xl shadow-sm flex gap-3 relative cursor-pointer hover:shadow-md transition-shadow">
                  {/* Left: Image */}
                  <div className="w-[85px] h-[85px] shrink-0 relative bg-gray-100 rounded-xl overflow-hidden">
                     {/* Dynamic Placeholder based on name */}
                     <div className="w-full h-full flex flex-col items-center justify-center text-white font-black leading-tight text-xl p-2 text-center" style={{ backgroundColor: store.id % 2 === 0 ? '#111' : '#D32822' }}>
                       {store.name.substring(0, 4)}
                     </div>
                     {store.brand && (
                       <div className="absolute top-0 right-0 bg-[#FFD161] text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg text-gray-900 shadow-sm">
                         品牌
                       </div>
                     )}
                  </div>
                  
                  {/* Right: Content */}
                  <div className="flex-1 min-w-0 pr-2">
                     <div className="text-[16px] font-bold text-gray-900 truncate mb-1">
                        {store.name}
                     </div>
                     
                     {/* Stats Row */}
                     <div className="flex items-center text-[11px] text-gray-500 mb-1.5 gap-2">
                        <span className="text-orange-500 font-bold flex items-center text-[13px]">
                           {store.score}
                        </span>
                        <span>月售{store.sales}</span>
                        <span>人均¥{store.perCapita}</span>
                     </div>
                     
                     {/* Delivery Limits */}
                     <div className="flex justify-between items-center text-[11px] text-gray-500 mb-2">
                       <span className="truncate pr-2 border-r border-gray-200">起送 ¥{store.deliveryStart} <span className="mx-1.5"></span> 配送 约¥{store.deliveryFee}</span>
                       <div className="shrink-0 text-right pl-2">
                          <span className="text-gray-700 font-medium">{store.time}</span> <span className="mx-1"></span> {store.distance}
                       </div>
                     </div>
                     
                     {/* Badges */}
                     <div className="flex flex-wrap gap-1.5">
                       {store.redPacketUsable && (
                          <div className="border border-red-200 text-red-500 px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium flex items-center">
                             <div className="bg-red-500 text-white text-[8px] px-1 rounded-sm mr-1">红包</div>
                             可用8元红包
                          </div>
                       )}
                       {store.rank && (
                         <div className="bg-[#FEF5E5] text-[#D88921] px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium flex items-center">
                           <span className="bg-[#D88921] text-white rounded-full w-3 h-3 flex items-center justify-center mr-1 text-[8px] transform scale-90">榜</span>
                           {store.rank} <ChevronRight size={10} className="ml-0.5" />
                         </div>
                       )}
                       {store.tags.map((tag, i) => (
                         <div key={i} className="border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-[4px] text-[10px]">
                           {tag}
                         </div>
                       ))}
                     </div>
                  </div>
               </div>
             ))}

             {filteredStores.length === 0 && (
               <div className="py-12 text-center text-gray-400 text-sm">
                  没有找到符合条件的红包商家~
               </div>
             )}
          </div>
          
        </div>

        {/* Variant Toggle Tab Bar */}
        <div className="absolute bottom-[55px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full p-1 flex shadow-lg z-[60]">
          {(['plan1', 'plan2', 'plan3'] as const).map(plan => (
            <div
              key={plan}
              onClick={() => setActiveTab(plan)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold cursor-pointer transition-colors whitespace-nowrap ${activeTab === plan ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {plan === 'plan1' ? '方案一' : plan === 'plan2' ? '方案二' : '方案三'}
            </div>
          ))}
        </div>

        {/* Plan 2: Animated Floating Red Packet placed properly */}
        {activeTab === 'plan2' && (
           <motion.div 
             drag
             dragConstraints={{ left: -300, right: 10, top: -600, bottom: 100 }}
             dragElastic={0.1}
             dragMomentum={false}
             onPointerDownCapture={(e) => e.stopPropagation()}
             onDragStart={() => { (window as any).isDraggingRedPacket = true; }}
             onDragEnd={() => { setTimeout(() => { (window as any).isDraggingRedPacket = false; }, 100); }}
             className="absolute right-4 bottom-[110px] z-[60] w-[54px] h-[64px] touch-none"
          >
            <motion.div
             initial={{ y: 0, opacity: 0 }}
             animate={{ y: [0, -6, 0], opacity: 1 }}
             transition={{ y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
             className="w-full h-full cursor-pointer shadow-[0_8px_16px_rgba(227,35,35,0.4)] rounded-[14px]"
             onClick={(e) => {
               if ((window as any).isDraggingRedPacket) {
                 e.preventDefault();
                 return;
               }
               scrollToFilter();
             }}
            >
             {/* Floating Red Packet Box */}
             <div className="w-full h-full bg-gradient-to-b from-[#FF5C5C] to-[#E32323] rounded-[14px] border border-[#FF8F8F] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Top Lid Animation */}
                <motion.div 
                   animate={redPacketAnim ? { y: [0, -25, -25, 0], opacity: [1, 0, 0, 1] } : { y: 0, opacity: 1 }}
                   transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
                   className="absolute top-0 w-[120%] h-[20px] bg-gradient-to-r from-[#FFDE73] to-[#FFC300] rounded-b-[50%] left-[-10%] shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-30"
                ></motion.div>

                {/* Coupons Flying Out and Back In */}
                <motion.div
                   animate={redPacketAnim ? { y: [0, -50, -50, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 0.5] } : { y: 0, opacity: 0, scale: 0.5 }}
                   transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
                   className="absolute top-0 w-8 h-10 bg-[#FFDE73] rounded-sm border border-[#F5A623] z-20 flex items-center justify-center shadow-lg"
                >
                   <span className="text-[#D0021B] font-bold text-[10px]">神券</span>
                </motion.div>
                
                <motion.div
                   animate={redPacketAnim ? { y: [0, -40, -40, 0], x: [0, -20, -20, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1.1, 0.5], rotate: [0, -15, -15, 0] } : { y: 0, x: 0, opacity: 0, scale: 0.5, rotate: 0 }}
                   transition={{ duration: 2.5, times: [0, 0.3, 0.8, 1] }}
                   className="absolute top-0 w-8 h-10 bg-white rounded-sm border border-[#F5A623] z-20 flex items-center justify-center shadow-lg"
                >
                   <span className="text-[#D0021B] font-bold text-[10px]">免配</span>
                </motion.div>

                <motion.div
                   animate={redPacketAnim ? { y: [0, -45, -45, 0], x: [0, 20, 20, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1.1, 0.5], rotate: [0, 15, 15, 0] } : { y: 0, x: 0, opacity: 0, scale: 0.5, rotate: 0 }}
                   transition={{ duration: 2.5, times: [0, 0.4, 0.8, 1] }}
                   className="absolute top-0 w-8 h-10 bg-white rounded-sm border border-[#F5A623] z-20 flex items-center justify-center shadow-lg"
                >
                   <span className="text-[#D0021B] font-bold text-[10px]">满减</span>
                </motion.div>

                {/* Default seal */}
                <motion.div 
                   animate={redPacketAnim ? { opacity: [1, 0, 0, 1] } : { opacity: 1 }}
                   transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
                   className="absolute top-[16px] w-4 h-4 bg-gradient-to-br from-[#E32323] to-[#FF5C5C] rotate-45 rounded-sm z-40 border border-[#FF8F8F]/50 shadow-sm"
                ></motion.div>
                <motion.div 
                   animate={redPacketAnim ? { opacity: [1, 0, 0, 1] } : { opacity: 1 }}
                   transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
                   className="absolute top-[19px] w-2 h-2 bg-[#FFDE73] rounded-full z-50 shadow-inner"
                ></motion.div>
                <span className="text-[#FFDE73] font-black text-[22px] leading-none mt-5 drop-shadow-md relative z-10">¥8</span>
             </div>
            </motion.div>
          </motion.div>
        )}

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 flex justify-around items-center pt-1.5 pb-2 px-2 z-50">
           <div className="flex flex-col items-center flex-1 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#FFD161] flex items-center justify-center mb-0.5 shadow-sm transform hover:scale-105 transition-transform">
                 <Home size={18} className="text-gray-900 fill-gray-900" />
              </div>
              <span className="text-[9px] font-bold text-gray-900">首页</span>
           </div>
           <div className="flex flex-col items-center flex-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
              <Crown size={20} className="mb-0.5" strokeWidth={1.5} />
              <span className="text-[9px] font-medium">会员</span>
           </div>
           <div className="flex flex-col items-center flex-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
              <FileText size={20} className="mb-0.5" strokeWidth={1.5} />
              <span className="text-[9px] font-medium">订单</span>
           </div>
           <div className="flex flex-col items-center flex-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
              <User size={20} className="mb-0.5" strokeWidth={1.5} />
              <span className="text-[9px] font-medium">我的</span>
           </div>
        </nav>
      </div>
    </div>
  );
}
