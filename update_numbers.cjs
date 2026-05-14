const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// numbers and scores wrappers
code = code.replace(/\{store.score\}/g, '<span className="font-mt-num">{store.score}</span>');
code = code.replace(/\{store.sales\}/g, '<span className="font-mt-num">{store.sales}</span>');
code = code.replace(/\{store.perCapita\}/g, '<span className="font-mt-num">{store.perCapita}</span>');
code = code.replace(/\{store.time\}/g, '<span className="font-mt-num">{store.time}</span>');
code = code.replace(/\{store.distance\}/g, '<span className="font-mt-num">{store.distance}</span>');
code = code.replace(/\{store.deliveryStart\}/g, '<span className="font-mt-num">{store.deliveryStart}</span>');
code = code.replace(/\{store.deliveryFee\}/g, '<span className="font-mt-num">{store.deliveryFee}</span>');

code = code.replace(/\{s.score\}/g, '<span className="font-mt-num">{s.score}</span>');
code = code.replace(/\{s.sales\}/g, '<span className="font-mt-num">{s.sales}</span>');
code = code.replace(/\{s.perCapita\}/g, '<span className="font-mt-num">{s.perCapita}</span>');
code = code.replace(/\{s.time\}/g, '<span className="font-mt-num">{s.time}</span>');
code = code.replace(/\{s.distance\}/g, '<span className="font-mt-num">{s.distance}</span>');
code = code.replace(/\{s.deliveryStart\}/g, '<span className="font-mt-num">{s.deliveryStart}</span>');
code = code.replace(/\{s.deliveryFee\}/g, '<span className="font-mt-num">{s.deliveryFee}</span>');

code = code.replace(/\{r.score\}/g, '<span className="font-mt-num">{r.score}</span>');

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx numbers updated');
