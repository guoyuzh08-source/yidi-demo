const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace(/pl-\[10px\] pt-2 pb-1/g, 'pl-[10px] pt-2 pb-0');

code = code.replace(/<div className="mx-4 mt-3 mb-2 flex gap-2">/g, '<div className="mx-4 mt-[20px] mb-[20px] flex gap-2">');

fs.writeFileSync('src/App.tsx', code);
