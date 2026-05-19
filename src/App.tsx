import {
  MapPin,
  Bell,
  Search,
  ChevronRight,
  Home,
  Crown,
  FileText,
  User,
  Star,
  MoreVertical,
  ThumbsUp,
  Quote,
  Moon,
  ChevronDown,
  Sparkles,
  Sparkle,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

// Mock Data
const KingKongCategories = [
  { name: "美食", icon: "🍔", color: "bg-orange-100 text-mt-orange" },
  { name: "甜点饮品", icon: "🧋", color: "bg-pink-100 text-pink-500" },
  { name: "超市便利", icon: "🛒", color: "bg-blue-100 text-blue-500" },
  { name: "蔬菜水果", icon: "🍎", color: "bg-green-100 text-green-500" },
  { name: "美团买药", icon: "💊", color: "bg-red-100 text-mt-red" },
  { name: "拼好饭", icon: "🍱", color: "bg-yellow-100 text-yellow-600" },
  { name: "骑车", icon: "🚲", color: "bg-teal-100 text-teal-500" },
  { name: "跑腿", icon: "🏃", color: "bg-indigo-100 text-indigo-500" },
  { name: "买菜", icon: "🥦", color: "bg-emerald-100 text-emerald-500" },
  { name: "全部分类", icon: "⬇️", color: "bg-mt-bg-2 text-mt-text-2" },
];

const FeaturedStores = [
  {
    id: 1,
    name: "炊烟小炒黄牛肉",
    score: 4.9,
    sales: 9999,
    perCapita: 88,
    time: "45分钟",
    distance: "2.1km",
    tags: ["长沙必吃榜"],
    signatureDish: "小炒黄牛肉",
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "走进联合国的湘菜代表，牛肉鲜嫩，辣味正宗，米饭杀手。",
  },
  {
    id: 2,
    name: "壹盏灯",
    score: 4.8,
    sales: 8500,
    perCapita: 75,
    time: "50分钟",
    distance: "3.5km",
    tags: ["老字号", "免配送费"],
    signatureDish: "鸭掌筋",
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "本地人排队也要吃的重口味湘菜馆，无辣不欢爱好者的天堂。",
  },
  {
    id: 3,
    name: "茶颜悦色",
    score: 4.8,
    sales: 8901,
    perCapita: 18,
    time: "30分钟",
    distance: "1.2km",
    tags: ["极速退"],
    signatureDish: "幽兰拿铁",
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600&h=400",
    reason: "经典茶饮品牌，茶底醇厚，奶香浓郁，招牌幽兰拿铁不可错过。",
  },
  {
    id: "local-recommend" as any,
    isAiCard: true as any,
    name: "本地指南",
    score: 0,
    sales: 0,
    perCapita: 0,
    time: "",
    distance: "",
    tags: [],
    signatureDish: "",
    img: "",
    reason: "",
  },
];

const StoreList = [
  {
    id: 1,
    name: "笨萝卜浏阳菜馆（育英街店）",
    brand: true,
    score: 4.8,
    sales: 9800,
    perCapita: 45,
    deliveryStart: 20,
    deliveryFee: 2.5,
    time: "35分钟",
    distance: "1.5km",
    rank: "芙蓉区湘菜好评榜第1名",
    tags: ["已测体温", "免配送费"],
    signatureDish: "醋蒸鸡",
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1563245372-f2172452c92e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    name: "天宝兄弟（汇景城店）",
    brand: true,
    score: 4.9,
    sales: 8202,
    perCapita: 156,
    deliveryStart: 50,
    deliveryFee: 5.5,
    time: "45分钟",
    distance: "3.8km",
    rank: "长沙小龙虾热销榜第1名",
    tags: ["支持自取", "老板推荐"],
    signatureDish: "天宝口味虾",
    redPacketUsable: false,
    img: "https://images.unsplash.com/photo-1582875151240-da232fcc6f3d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "费大厨辣椒炒肉（五一广场店）",
    brand: true,
    score: 4.8,
    sales: 9102,
    perCapita: 68,
    deliveryStart: 20,
    deliveryFee: 3.0,
    time: "40分钟",
    distance: "2.2km",
    rank: "坡子街湘菜口碑榜第2名",
    tags: ["极速退"],
    signatureDish: "费大厨辣椒炒肉",
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1555126634-de26c2e22c95?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 4,
    name: "茶颜悦色（五一广场店）",
    brand: true,
    score: 4.9,
    sales: 9999,
    perCapita: 18,
    deliveryStart: 15,
    deliveryFee: 1.5,
    time: "25分钟",
    distance: "1.0km",
    rank: "长沙奶茶好评榜第1名",
    tags: ["极速贴", "品牌优选"],
    signatureDish: "幽兰拿铁",
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 5,
    name: "公交新村粉店",
    brand: false,
    score: 4.7,
    sales: 5400,
    perCapita: 15,
    deliveryStart: 15,
    deliveryFee: 2.0,
    time: "30分钟",
    distance: "2.5km",
    rank: "老长沙米粉热销榜第4名",
    tags: ["新店特惠", "支持自取"],
    signatureDish: "原汤肉丝粉",
    redPacketUsable: false,
    img: "https://images.unsplash.com/photo-1582875151240-da232fcc6f3d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 6,
    name: "果呀呀（国金街店）",
    brand: true,
    score: 4.8,
    sales: 6200,
    perCapita: 25,
    deliveryStart: 20,
    deliveryFee: 2.5,
    time: "35分钟",
    distance: "1.8km",
    rank: "果茶热销榜第2名",
    tags: ["减免配送费"],
    signatureDish: "芒果雪泥",
    redPacketUsable: true,
    img: "https://images.unsplash.com/photo-1560159846-5db2e6db5cbb?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const Plan3FeaturedCard = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [ticks, setTicks] = React.useState(0);
  const store = FeaturedStores[2]; // 茶颜悦色

  React.useEffect(() => {
    if (isExpanded) {
      setTicks(0);
      const timer = setInterval(() => {
        setTicks((t) => {
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
    {
      name: "靓虾二哥",
      score: "4.8分",
      reason: "地道小龙虾，夜宵盲选不出错",
      img: "https://images.unsplash.com/photo-1555126634-de26c2e22c95?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "公交新村粉店",
      score: "4.9分",
      reason: "老长沙必嗦粉馆，原汤码子足",
      img: "https://images.unsplash.com/photo-1582875151240-da232fcc6f3d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "黑色经典臭豆腐",
      score: "4.8分",
      reason: "外酥里嫩，灌汁风味一绝",
      img: "https://images.unsplash.com/photo-1560159846-5db2e6db5cbb?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "果呀呀",
      score: "4.7分",
      reason: "长沙本土果茶星光，鲜果多",
      img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      name: "客串出品",
      score: "4.8分",
      reason: "精致湘西烤串，环境潮人必去",
      img: "https://images.unsplash.com/photo-1563245372-f2172452c92e?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Main Card */}
      <div className="relative w-[359px] h-[199px] rounded-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex flex-col border border-mt-divider-2/50 bg-white z-20 shrink-0">
        {/* Top Image */}
        <div className="relative shrink-0">
          <img
            src={store.img}
            className="w-full h-[90px] object-cover rounded-t-[12px]"
            alt={store.name}
          />
          {/* Badge */}
          {store.name === "茶颜悦色" && (
            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[#FFF0D4] text-[10px] font-medium px-2 py-1 rounded-full flex items-center border border-[#FFF0D4]/30 shadow-lg">
              <ThumbsUp size={10} className="mr-1" /> 必点榜{" "}
              <span className="opacity-50 mx-1">|</span> 连续8年上榜
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-3 py-1.5 relative bg-white rounded-b-[12px] flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="text-[15px] font-bold text-mt-text-1 leading-tight truncate pr-2">
              {store.name}
            </h2>
            <div className="bg-[#FFD161] text-mt-text-1 text-[11px] font-bold px-2 py-1 rounded-full cursor-pointer shadow-sm active:scale-95 transition-transform flex items-center justify-center shrink-0">
              去下单
            </div>
          </div>

          <div className="flex items-center text-[10px] text-mt-text-2 space-x-1.5 shrink-0">
            <span className="text-orange-600 font-extrabold bg-orange-100/90 px-1 py-[1px] rounded flex items-center shadow-sm">
              <Star
                size={8}
                fill="currentColor"
                className="mr-[1px] mb-[1px]"
              />{" "}
              <span className="font-mt-num">{store.score}</span>
            </span>
            <span className="bg-mt-bg-2 px-1 py-[1px] rounded font-medium">
              月售<span className="font-mt-num">{store.sales}</span>
            </span>
            <span>
              ¥<span className="font-mt-num">{store.perCapita}</span>/人
            </span>
            <span className="ml-[2px]">
              <span className="font-mt-num">{store.time}</span>{" "}
              <span className="font-mt-num">{store.distance}</span>
            </span>
          </div>

          {(store as any).signatureDish && (
            <div className="flex items-center shrink-0">
              <div className="inline-flex items-center rounded-md overflow-hidden shadow-[0_2px_8px_rgba(255,140,0,0.15)] border border-orange-100">
                <span className="bg-gradient-to-r from-[#FF7A45] to-[#FF4D4F] text-white text-[9px] font-bold px-1 py-[1px] shrink-0 flex items-center">
                  <Star size={8} fill="currentColor" className="mr-0.5" />{" "}
                  本店招牌
                </span>
                <span className="bg-gradient-to-r from-[#FFF0D4] to-[#FFE599] text-[#8C5A2A] text-[9px] font-bold px-1.5 py-[1px] shrink-0 flex items-center">
                  {(store as any).signatureDish}
                </span>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-[#FFFBF2] via-[#FFF3E0] to-[#FFE4B5]/40 rounded-xl p-2 flex gap-2 relative border border-[#FFE4B5]/80 shadow-[inset_0_2px_8px_rgba(255,255,255,0.8),0_2px_8px_rgba(139,69,19,0.04)] shrink-0 overflow-hidden mt-1">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-bl from-[#FFD161]/40 to-transparent rounded-full blur-[15px] pointer-events-none"></div>
            <div className="absolute top-1 right-2 text-[#FFE5C4] opacity-50 mix-blend-multiply">
              <Quote size={32} fill="currentColor" stroke="none" />
            </div>
            <div className="w-1 bg-gradient-to-b from-[#FFD161] to-[#FF9E00] rounded-full shrink-0 relative z-10 shadow-[1px_0_4px_rgba(255,209,97,0.4)]"></div>
            <div className="flex flex-col justify-center relative z-10 w-full">
              <div className="flex items-center gap-2 mb-0.5 relative z-10 shrink-0">
                <span className="text-[13px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8C5A2A] to-[#D08C4A] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  推荐理由
                  <span className="text-[#8C5A2A] text-[10px] ml-1.5 opacity-90 font-bold border-l border-[#8C5A2A]/20 pl-1.5">
                    8年老店
                  </span>
                </span>
              </div>
              <p className="text-[11px] text-[#8C5A2A] leading-tight relative z-10 font-bold line-clamp-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                {store.reason}
              </p>
            </div>
          </div>

          {/* Expanded List moved inside the card */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 12 : 0,
              marginBottom: isExpanded ? 12 : 0,
            }}
            className="w-full overflow-hidden flex flex-col z-20"
          >
            <div className="pb-2 px-1 flex items-center gap-1.5 shrink-0 border-t border-mt-divider-2 pt-3 mt-1">
              <Sparkles size={16} className="text-mt-orange" />
              <span className="text-[14px] font-bold text-mt-text-1 tracking-wide">
                精选餐厅推荐
              </span>
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
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-orange-100/50 animate-pulse shrink-0 z-10"></div>
                    )}
                    <div className="flex flex-col justify-center flex-1 min-w-0 z-10">
                      <div className="text-[15px] font-bold text-mt-text-1 truncate">
                        {r.name.substring(0, Math.min(r.name.length, myTicks))}
                        {myTicks < r.name.length && (
                          <span className="inline-block w-1 h-3.5 bg-orange-400 ml-0.5 animate-pulse"></span>
                        )}
                      </div>
                      <div className="text-[12px] text-[#A67B5B] truncate mt-1.5 flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 shrink-0 opacity-60"></span>
                        {r.reason.substring(
                          0,
                          Math.max(0, myTicks - r.name.length),
                        )}
                        {myTicks >= r.name.length &&
                          myTicks < r.name.length + r.reason.length && (
                            <span className="inline-block w-1.5 h-3 bg-orange-300 ml-0.5 animate-pulse mt-0.5"></span>
                          )}
                      </div>
                    </div>
                    {showScore && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[13px] font-black text-orange-600 flex items-center justify-center shrink-0 z-10"
                      >
                        <span className="font-mt-num">{r.score}</span>
                      </motion.div>
                    )}
                  </div>
                  {i === 0 && myTicks > 20 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex gap-1.5 mb-2.5 shrink-0 justify-center w-full"
                    >
                      {/* 神券 1 */}
                      <div 
                        onClick={onRedPacketClick}
                        className="rounded-[8px] overflow-hidden flex bg-[#FF0B24] cursor-pointer active:scale-95 transition-transform shadow-[0_2px_8px_rgba(255,11,36,0.2)] relative border border-[#FF8F8F]/50 shrink-0"
                        style={{ width: 173.5, height: 69 }}
                      >
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FFFDF8] rounded-full border-r border-[#FF8F8F]/50 z-10"></div>
                        <div className="bg-white flex flex-col items-center justify-center relative shrink-0" style={{ width: 76 }}>
                          <span className="text-[#FF0B24] font-black text-[28px] leading-none flex items-baseline">
                            <span className="text-[14px] mr-[1px]">¥</span>10
                          </span>
                          <span className="text-[#FF0B24] text-[10px] font-medium opacity-90 mt-1 whitespace-nowrap">满999可用</span>
                          {/* 右侧内缺口（形成分离感） */}
                          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FF0B24] rounded-full z-10 shadow-inner"></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-start pl-2 pr-1 text-white relative py-1">
                          <span className="font-black tracking-wide whitespace-nowrap flex items-center" style={{ width: 78, height: 14, fontSize: 13, lineHeight: '14px' }}>吃喝玩乐神券</span>
                          <span className="font-medium opacity-90 mt-0.5 flex items-center whitespace-nowrap" style={{ width: 76.5, height: 14, fontSize: 10, lineHeight: '14px' }}>03:09:01后失效</span>
                          <div className="bg-white text-[#FF0B24] text-[10px] font-bold px-3 py-[2.5px] rounded-full shadow-sm mt-[3px] w-fit">
                            去使用
                          </div>
                        </div>
                      </div>

                      {/* 神券 2 */}
                      <div 
                        onClick={onRedPacketClick}
                        className="rounded-[8px] overflow-hidden flex bg-[#FF0B24] cursor-pointer active:scale-95 transition-transform shadow-[0_2px_8px_rgba(255,11,36,0.2)] relative border border-[#FF8F8F]/50 shrink-0"
                        style={{ width: 173.5, height: 69 }}
                      >
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FFFDF8] rounded-full border-r border-[#FF8F8F]/50 z-10"></div>
                        <div className="bg-white flex flex-col items-center justify-center relative shrink-0" style={{ width: 76 }}>
                          <span className="text-[#FF0B24] font-black text-[28px] leading-none flex items-baseline">
                            <span className="text-[14px] mr-[1px]">¥</span>8
                          </span>
                          <span className="text-[#FF0B24] text-[10px] font-medium opacity-90 mt-1 whitespace-nowrap">满30可用</span>
                          {/* 右侧内缺口（形成分离感） */}
                          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FF0B24] rounded-full z-10 shadow-inner"></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-start pl-2 pr-1 text-white relative py-1">
                          <span className="font-black tracking-wide whitespace-nowrap flex items-center" style={{ width: 78, height: 14, fontSize: 13, lineHeight: '14px' }}>吃喝玩乐神券</span>
                          <span className="font-medium opacity-90 mt-0.5 flex items-center whitespace-nowrap" style={{ width: 76.5, height: 14, fontSize: 10, lineHeight: '14px' }}>03:09:01后失效</span>
                          <div className="bg-white text-[#FF0B24] text-[10px] font-bold px-3 py-[2.5px] rounded-full shadow-sm mt-[3px] w-fit">
                            去使用
                          </div>
                        </div>
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
            {isExpanded ? (
              "收起精选餐厅推荐"
            ) : (
              <div className="relative flex items-center">
                <Sparkles size={14} className="mr-1" />
                <span>点击查看更多推荐</span>
                <motion.div
                  animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -top-[14px] -right-[68px] bg-gradient-to-r from-red-500 to-[#FF4D4F] text-white text-[10px] px-1.5 py-[1px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[1px] shadow-sm flex items-center font-medium z-10 whitespace-nowrap border border-white/50"
                >
                  红包惊喜{" "}
                  <span className="ml-[1px] text-[10px] leading-none">🧧</span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AIRestaurantCard = ({
  isActive,
  isExpanded,
  setIsExpanded,
  index,
  total,
  onRedPacketClick,
}: {
  isActive: boolean;
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
  index?: number;
  total?: number;
  onRedPacketClick?: () => void;
}) => {
  const [ticks, setTicks] = React.useState(0);

  React.useEffect(() => {
    if (isActive) {
      setTicks(0);
      const timer = setInterval(() => {
        setTicks((t) => {
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
      name: "靓虾二哥",
      score: "4.8",
      reason: "地道小龙虾，夜宵盲选不出错",
      distance: "1.2km",
      time: "32分钟",
    },
    {
      name: "公交新村粉店",
      score: "4.9",
      reason: "老长沙必嗦粉馆，原汤码子足",
      distance: "800m",
      time: "25分钟",
    },
    {
      name: "黑色经典臭豆腐",
      score: "4.8",
      reason: "外酥里嫩，灌汁风味一绝",
      distance: "2.1km",
      time: "38分钟",
    },
    {
      name: "果呀呀",
      score: "4.7",
      reason: "长沙本土果茶星光，鲜果多",
      distance: "900m",
      time: "20分钟",
    },
    {
      name: "客串出品",
      score: "4.8",
      reason: "精致湘西烤串，环境潮人必去",
      distance: "1.8km",
      time: "40分钟",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#FFFDF8] to-[#FFF3E0] rounded-[12px] flex flex-col p-3 relative overflow-hidden">
      {index !== undefined && total !== undefined && (
        <div className="absolute top-3 right-3 bg-black/10 backdrop-blur-md text-[#8C5A2A] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-20 border border-[#8C5A2A]/20">
          {index + 1}/{total}
        </div>
      )}
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD161]/20 blur-[30px] pointer-events-none rounded-full z-0" />

      <div className="flex items-center mb-1.5 relative z-10 shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" className="mr-1 mt-0.5 text-[#FF7A45] fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 1C12.5 6 16.5 10 21.5 10C16.5 10 12.5 14 12.5 19C12.5 14 8.5 10 3.5 10C8.5 10 12.5 6 12.5 1Z" />
          <path d="M7.5 13C7.5 15.5 9.5 17.5 12 17.5C9.5 17.5 7.5 19.5 7.5 22C7.5 19.5 5.5 17.5 3 17.5C5.5 17.5 7.5 15.5 7.5 13Z" />
        </svg>
        <span className="text-[15px] font-extrabold text-[#8C5A2A] tracking-wider">
          本地人推荐好店
        </span>
      </div>

      <div className="flex-1 overflow-hidden relative z-10 transition-all w-full mb-1">
        <div 
          className="flex flex-col gap-[7px] overflow-y-auto hide-scrollbar w-full h-full pb-1 touch-pan-y"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {aiRestaurants.map((r, i) => {
            const START_TICK = i * 40;
            const myTicks = Math.max(0, ticks - START_TICK);
            if (myTicks === 0) return null;

            const showImage = myTicks > 2;
            const showScore = myTicks > r.name.length + 5;

            const nameLen = Math.min(r.name.length, myTicks);
            const reasonWait = r.name.length + 10;
            const reasonLen =
              myTicks > reasonWait
                ? Math.min(r.reason.length, myTicks - reasonWait)
                : 0;

            return (
              <div
                key={i}
                className="flex gap-2 items-center bg-white/70 rounded-[10px] p-1.5 shadow-[0_2px_8px_rgba(140,90,42,0.04)] border border-[#FFE4B5]/60 relative w-full shrink-0"
              >
                {showImage ? (
                  <img
                    src={r.img}
                    className="w-[42px] h-[42px] rounded-[6px] object-cover shrink-0 bg-[#FFE4B5]/30"
                    alt=""
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555126634-de26c2e22c95?auto=format&fit=crop&q=80&w=100&h=100";
                    }}
                  />
                ) : (
                  <div className="w-[42px] h-[42px] rounded-[6px] bg-[#FFE4B5]/30 shrink-0 animate-pulse" />
                )}
                <div className="flex flex-col flex-1 overflow-hidden h-full justify-center">
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <div className="flex items-center gap-1 overflow-hidden">
                      <span className="text-[13px] font-extrabold text-mt-text-1 tracking-tight truncate">
                        {r.name.substring(0, nameLen)}
                      </span>
                      {showScore && (
                        <span className="text-[10px] font-bold text-[#FF9E00] flex items-center shrink-0">
                          <span className="font-mt-num">{r.score}</span>分
                        </span>
                      )}
                    </div>
                    {showScore && (
                      <div className="flex gap-1.5 text-[9px] text-mt-text-3 font-medium shrink-0 ml-1">
                        <span className="font-mt-num">{r.time}</span>
                        <span className="font-mt-num">{r.distance}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] text-[#8C5A2A]/80 font-medium leading-tight mt-0.5 truncate h-[16px]">
                    {r.reason.substring(0, reasonLen)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fade Out Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#FFF3E0] to-transparent pointer-events-none" />
      </div>

      {/* Button at bottom */}
      <div className="w-full flex justify-center z-20 pointer-events-auto shrink-0 pb-2">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-[#8C5A2A] font-bold text-[11px] bg-white/80 hover:bg-white px-5 py-1 rounded-full cursor-pointer transition-all shadow-sm border border-[#FFE4B5]/80 flex items-center justify-center shrink-0"
        >
          查看全部
        </div>
      </div>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 3600); // 24 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((timeLeft % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <span className="flex items-center font-mono text-[11px]">
      <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
    </span>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "special" | "red_packet"
  >("all");
  const featuredStoresToUse = FeaturedStores;
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);
  const [isAiExpanded, setIsAiExpanded] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

  const scrollToFilter = () => {
    setActiveFilter("red_packet");
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredStores = StoreList.filter((store) => {
    if (activeFilter === "red_packet") return store.redPacketUsable;
    return true;
  });

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center font-sans">
      {/* Mobile container */}
      <div className="bg-[#F5F5F6] w-[375px] h-[812px] relative overflow-hidden flex flex-col shadow-2xl overflow-y-auto hide-scrollbar">
        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-[80px]">
          {/* Header & Banner Area */}
          <div className="relative pt-4 pb-2 px-[10px] bg-[#FFE74D] overflow-hidden rounded-b-[12px] mb-1">
            {/* Top Bar */}
            <div className="flex justify-between items-center relative z-10 mb-2 mt-1 px-1">
              <div className="flex items-center text-[15px] font-bold text-[#111111]">
                <MapPin size={16} className="mr-1 text-[#111111]" />
                <span className="drop-shadow-sm">五一广场</span>
                <ChevronRight size={14} className="ml-0.5 text-[#111111]" />
              </div>
              <div className="relative cursor-pointer p-1">
                <Bell size={18} className="text-[#111111] drop-shadow-sm" />
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#FF0B24] rounded-full border-2 border-[#FFE74D] z-10"></span>
              </div>
            </div>

            {/* Title */}
            <div className="relative z-10 mb-2 pl-1">
              <h1 
                className="text-[22px] font-black text-[#111111] tracking-tight leading-[48px] drop-shadow-sm flex items-center"
                style={{ width: '288px', height: '48px' }}
              >
                欢迎来到长沙
              </h1>
            </div>

            {/* Search Bar */}
            <div className="relative z-20 w-full mt-2">
              <div className="bg-white/95 backdrop-blur-xl h-[33px] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.2)] flex items-center border border-white/30 overflow-hidden group hover:bg-white transition-colors">
                <Search
                  className="text-mt-text-3 ml-3.5 shrink-0 group-hover:text-[#FF9E00] transition-colors"
                  size={16}
                />
                <input
                  type="text"
                  className="flex-1 bg-transparent px-2.5 text-[13px] text-mt-text-1 outline-none w-full font-medium placeholder:text-mt-text-3/80"
                  placeholder="寻找深夜治愈胃的口味虾"
                />
                <button className="bg-gradient-to-r from-[#FFD161] to-[#FFB000] text-mt-text-1 px-5 h-full text-[13px] font-extrabold shadow-md whitespace-nowrap hover:brightness-105 transition-all">
                  搜 索
                </button>
              </div>
            </div>
          </div>

          {/* Categories: 1 Row, 5.5 Items */}
          <div className="pl-[10px] pt-2 pb-0 overflow-hidden">
            <div className="flex gap-[18px] overflow-x-auto hide-scrollbar pr-[10px]">
              {KingKongCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer group w-[48.5px] shrink-0"
                >
                  <div
                    className={`w-[48.5px] h-[48.5px] rounded-[18px] ${cat.color} flex items-center justify-center text-[24px] mb-[7px] shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-medium text-mt-text-2 whitespace-nowrap">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Card Module */}
          <div className="mt-[16px] mb-0 relative z-10 w-full flex flex-col items-center">
            <div className="w-full overflow-hidden px-[11px] pb-[14px] flex flex-col pt-2 -mt-2 touch-none relative">
              <motion.div 
                className="flex gap-3"
                drag="x"
                dragConstraints={{ 
                  left: -((featuredStoresToUse.length - 1) * 352), 
                  right: 0 
                }}
                animate={{ x: -activeStoreIndex * 352 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    setActiveStoreIndex(Math.min(activeStoreIndex + 1, featuredStoresToUse.length - 1));
                  } else if (info.offset.x > swipeThreshold) {
                    setActiveStoreIndex(Math.max(activeStoreIndex - 1, 0));
                  }
                }}
              >
              {featuredStoresToUse.map((store, index) => {
                const isActive = activeStoreIndex === index;
                const origIndex = index;
                return (
                  <div
                    key={index}
                    className={`relative w-[340px] h-[199px] shrink-0 overflow-hidden rounded-[12px] shadow-[0_6px_20px_rgba(0,0,0,0.1)] flex flex-col border border-mt-divider-2/50 ${(store as any).isAiCard ? "bg-transparent" : "bg-white"}`}
                  >
                    {(store as any).isAiCard ? (
                      <AIRestaurantCard
                        isActive={isActive}
                        isExpanded={isAiExpanded}
                        setIsExpanded={setIsAiExpanded}
                        index={origIndex}
                        total={featuredStoresToUse.length}
                        onRedPacketClick={scrollToFilter}
                      />
                    ) : (
                      <>
                        {/* Top Image & Info Overlay */}
                        <div className="relative flex-1 shrink-0 overflow-hidden bg-gray-900">
                          <img
                            src={store.img}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt={store.name}
                            onError={(e) => {
                               (e.target as HTMLImageElement).src = store.img;
                            }}
                          />
                          {/* Gradient overlay for readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                          {/* Pagination Indicator */}
                          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10 border border-white/10">
                            {origIndex + 1}/{featuredStoresToUse.length}
                          </div>

                          {/* Badge */}
                          {store.name === "茶颜悦色" && (
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[#FFF0D4] text-[10px] font-medium px-2 py-1 rounded-full flex items-center border border-[#FFF0D4]/30 shadow-lg z-10">
                              <ThumbsUp size={10} className="mr-1" /> 必点榜{" "}
                              <span className="opacity-50 mx-1">|</span>{" "}
                              连续8年上榜
                            </div>
                          )}

                          {/* Text overlay on image at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 px-3 pb-[10px] pt-10 flex flex-col gap-1 text-white z-10">
                            <div className="flex justify-between items-center w-full">
                              <h2 className="text-[20px] font-extrabold leading-tight truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide flex-1 pr-2">
                                {store.name}
                              </h2>
                              <div className="bg-[#FFCC33] text-[#000000] text-[12px] font-bold px-2.5 py-[4px] rounded-full shadow-sm shrink-0 leading-none">
                                去下单
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-[11px] font-medium opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5">
                              <div className="flex items-center gap-2">
                                <span className="text-[#FFD161] font-bold flex items-center text-[12px]">
                                  <Star size={11} fill="currentColor" className="mr-0.5" />
                                  <span className="font-mt-num">{store.score}</span>
                                </span>
                                <span>
                                  月售
                                  <span className="font-mt-num ml-0.5">{store.sales}</span>
                                </span>
                                <span>
                                  人均¥
                                  <span className="font-mt-num ml-0.5">{store.perCapita}</span>
                                </span>
                              </div>
                              <div className="flex gap-1.5 text-[10px] opacity-80">
                                <span>
                                  <span className="font-mt-num">{store.time}</span>
                                </span>
                                <span className="font-mt-num">{store.distance}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Reason Box directly below */}
                        <div className="bg-gradient-to-r from-[#FFF1DE] to-[#FFFBF6] px-3 py-2.5 relative border-t border-[#FFE4B5]/80 shrink-0 h-[64px] flex flex-col justify-center overflow-hidden">
                            <svg className="absolute top-2 right-2 w-7 h-7 text-[#EBD7BE] opacity-80 pointer-events-none rotate-180" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14.017 18L14.017 14.923C14.017 11.233 15.654 9.183 18.068 9.183L18.068 11.666C17.069 11.666 16.541 12.428 16.541 14.072L16.541 14.629L19.263 14.629L19.263 18L14.017 18ZM6.216 18L6.216 14.923C6.216 11.233 7.853 9.183 10.267 9.183L10.267 11.666C9.268 11.666 8.74 12.428 8.74 14.072L8.74 14.629L11.462 14.629L11.462 18L6.216 18Z" />
                            </svg>

                            <div className="flex items-center gap-1.5 mb-1 relative z-10 shrink-0">
                              <span className="text-[14px] font-extrabold text-[#111111] tracking-tight">
                                推荐理由
                              </span>
                              {(store as any).signatureDish && store.name !== "茶颜悦色" && (
                                <span className="text-[#8C5A2A] text-[10px] font-bold bg-[#FFE7C5] px-1.5 py-0.5 rounded-[4px] flex items-center">
                                  <Sparkle size={8} fill="currentColor" className="opacity-60 mr-0.5"/>
                                  特色菜：{(store as any).signatureDish}
                                </span>
                              )}
                              {store.name === "茶颜悦色" && (
                                <span className="text-[#8C5A2A] text-[10px] font-bold bg-[#FFE7C5] px-1.5 py-0.5 rounded-[4px] flex items-center">
                                  <Sparkle size={8} fill="currentColor" className="opacity-60 mr-0.5"/>
                                  线下排队
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#8C5A2A] leading-tight relative z-10 font-bold line-clamp-1">
                              {store.reason}
                            </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
              </motion.div>

              {/* Fast-scroll indicator fade */}
              {activeStoreIndex < featuredStoresToUse.length - 1 && (
                <div className="absolute right-0 top-0 bottom-[14px] w-[32px] bg-gradient-to-l from-[#F5F5F6] via-[#F5F5F6]/70 to-[#F5F5F6]/0 pointer-events-none z-20"></div>
              )}
            </div>

            {/* Red Packet Static Banner */}
            <div className="relative z-30 flex mb-[4px] mt-[2px] px-[11px]">
              <div className="flex gap-1.5 shrink-0 w-full">
                {/* 神券 1 */}
                <div 
                  onClick={scrollToFilter}
                  className="rounded-[8px] overflow-hidden flex bg-[#FF0B24] cursor-pointer active:scale-95 transition-transform shadow-[0_2px_8px_rgba(255,11,36,0.2)] relative border border-[#FF8F8F]/50 shrink-0"
                  style={{ width: 173.5, height: 69 }}
                >
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#F5F5F6] rounded-full border-r border-[#FF8F8F]/50 z-10"></div>
                  <div className="bg-white flex flex-col items-center justify-center relative shrink-0" style={{ width: 76 }}>
                    <span className="text-[#FF0B24] font-black text-[28px] leading-none flex items-baseline">
                      <span className="text-[14px] mr-[1px]">¥</span>10
                    </span>
                    <span className="text-[#FF0B24] text-[10px] font-medium opacity-90 mt-1 whitespace-nowrap">满999可用</span>
                    {/* 右侧内缺口（形成分离感） */}
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FF0B24] rounded-full z-10 shadow-inner"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start pl-2 pr-1 text-white relative py-1">
                    <span className="font-black tracking-wide whitespace-nowrap flex items-center" style={{ width: 78, height: 14, fontSize: 13, lineHeight: '14px' }}>吃喝玩乐神券</span>
                    <span className="font-medium opacity-90 mt-0.5 flex items-center whitespace-nowrap" style={{ width: 76.5, height: 14, fontSize: 10, lineHeight: '14px' }}><Countdown />后失效</span>
                    <div className="bg-white text-[#FF0B24] text-[10px] font-bold px-3 py-[2.5px] rounded-full shadow-sm mt-[3px] w-fit">
                      去使用
                    </div>
                  </div>
                </div>

                {/* 神券 2 */}
                <div 
                  onClick={scrollToFilter}
                  className="rounded-[8px] overflow-hidden flex bg-[#FF0B24] cursor-pointer active:scale-95 transition-transform shadow-[0_2px_8px_rgba(255,11,36,0.2)] relative border border-[#FF8F8F]/50 shrink-0"
                  style={{ width: 173.5, height: 69 }}
                >
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#F5F5F6] rounded-full border-r border-[#FF8F8F]/50 z-10"></div>
                  <div className="bg-white flex flex-col items-center justify-center relative shrink-0" style={{ width: 76 }}>
                    <span className="text-[#FF0B24] font-black text-[28px] leading-none flex items-baseline">
                      <span className="text-[14px] mr-[1px]">¥</span>8
                    </span>
                    <span className="text-[#FF0B24] text-[10px] font-medium opacity-90 mt-1 whitespace-nowrap">满30可用</span>
                    {/* 右侧内缺口（形成分离感） */}
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FF0B24] rounded-full z-10 shadow-inner"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start pl-2 pr-1 text-white relative py-1">
                    <span className="font-black tracking-wide whitespace-nowrap flex items-center" style={{ width: 78, height: 14, fontSize: 13, lineHeight: '14px' }}>吃喝玩乐神券</span>
                    <span className="font-medium opacity-90 mt-0.5 flex items-center whitespace-nowrap" style={{ width: 76.5, height: 14, fontSize: 10, lineHeight: '14px' }}><Countdown />后失效</span>
                    <div className="bg-white text-[#FF0B24] text-[10px] font-bold px-3 py-[2.5px] rounded-full shadow-sm mt-[3px] w-fit">
                      去使用
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store List Header */}
          <div
            ref={listRef}
            className="sticky top-0 bg-[#F5F5F6] z-30 pt-0 pb-[20px] px-3 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center gap-5 px-1">
              <div className="relative cursor-pointer">
                <span className="text-[18px] font-extrabold text-[#111111]">
                  附近商家
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#FFD161] rounded-full shadow-[0_0_8px_rgba(255,209,97,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* Store List Cards */}
          <div className="px-3 pb-4 space-y-2.5">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white p-3 rounded-[18px] shadow-sm flex gap-3 relative cursor-pointer hover:shadow-md transition-shadow"
              >
                {/* Left: Image */}
                <div className="w-[85px] h-[85px] shrink-0 relative bg-mt-bg-2 rounded-[8px] overflow-hidden">
                  {/* Dynamic Placeholder based on name */}
                  <div
                    className="w-full h-full flex flex-col items-center justify-center text-white font-black leading-tight text-xl p-2 text-center"
                    style={{
                      backgroundColor: store.id % 2 === 0 ? "#111" : "#D32822",
                    }}
                  >
                    {store.name.substring(0, 4)}
                  </div>
                  {store.brand && (
                    <div className="absolute top-0 right-0 bg-[#FFD161] text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg text-mt-text-1 shadow-sm">
                      品牌
                    </div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0 pr-2 flex flex-col justify-between py-0.5">
                  <div className="text-[16px] font-bold text-mt-text-1 truncate">
                    {store.name}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center text-[11px] text-mt-text-2 gap-2">
                    <span className="text-mt-orange font-bold flex items-center text-[13px]">
                      <span className="font-mt-num">{store.score}</span>
                    </span>
                    <span>
                      月售<span className="font-mt-num">{store.sales}</span>
                    </span>
                    <span>
                      人均¥
                      <span className="font-mt-num">{store.perCapita}</span>
                    </span>
                  </div>

                  {/* Delivery Limits */}
                  <div className="flex justify-between items-center text-[11px] text-mt-text-2">
                    <span className="truncate pr-2 border-r border-mt-border-1">
                      起送 ¥
                      <span className="font-mt-num">{store.deliveryStart}</span>{" "}
                      <span className="mx-1.5"></span> 配送 约¥
                      <span className="font-mt-num">{store.deliveryFee}</span>
                    </span>
                    <div className="shrink-0 text-right pl-2">
                      <span className="text-mt-text-2 font-medium">
                        <span className="font-mt-num">{store.time}</span>
                      </span>{" "}
                      <span className="mx-1"></span>{" "}
                      <span className="font-mt-num">{store.distance}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 h-[20px] overflow-hidden items-center">
                    {store.redPacketUsable && (
                      <div className="border border-red-200 text-mt-red px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium flex items-center">
                        <div className="bg-mt-red text-white text-[10px] px-1 rounded-sm mr-1">
                          红包
                        </div>
                        可用8元红包
                      </div>
                    )}
                    {store.rank && (
                      <div className="bg-[#FEF5E5] text-[#D88921] px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium flex items-center">
                        <span className="bg-[#D88921] text-white rounded-full w-3 h-3 flex items-center justify-center mr-1 text-[10px] transform scale-90">
                          榜
                        </span>
                        {store.rank}{" "}
                        <ChevronRight size={10} className="ml-0.5" />
                      </div>
                    )}
                    {store.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="border border-mt-border-1 text-mt-text-2 px-1.5 py-0.5 rounded-[4px] text-[10px]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {filteredStores.length === 0 && (
              <div className="py-12 text-center text-mt-text-3 text-sm">
                没有找到符合条件的红包商家~
              </div>
            )}
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center pt-1.5 pb-2 px-2 z-50">
          <div className="flex flex-col items-center flex-1 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#FFD161] flex items-center justify-center mb-0.5 shadow-[0_0_10px_rgba(255,209,97,0.3)] transform hover:scale-105 transition-transform">
              <Home size={18} className="text-gray-900 fill-gray-900" />
            </div>
            <span className="text-[10px] font-bold text-[#111111]">首页</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors">
            <Crown size={20} className="mb-0.5" strokeWidth={1.5} />
            <span className="text-[10px] font-medium">会员</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors">
            <FileText size={20} className="mb-0.5" strokeWidth={1.5} />
            <span className="text-[10px] font-medium">订单</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors">
            <User size={20} className="mb-0.5" strokeWidth={1.5} />
            <span className="text-[10px] font-medium">我的</span>
          </div>
        </nav>
      </div>
    </div>
  );
}
