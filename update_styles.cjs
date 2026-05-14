const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Font Sizes (min 20px design -> 10px logical)
code = code.replace(/text-\[8px\]/g, 'text-[10px]');
code = code.replace(/text-\[9px\]/g, 'text-[10px]');

// Text Colors
code = code.replace(/text-gray-900/g, 'text-mt-text-1');
code = code.replace(/text-gray-800/g, 'text-mt-text-1');
code = code.replace(/text-gray-700/g, 'text-mt-text-2');
code = code.replace(/text-gray-600/g, 'text-mt-text-2');
code = code.replace(/text-gray-500/g, 'text-mt-text-2');
code = code.replace(/text-gray-400/g, 'text-mt-text-3');
code = code.replace(/text-gray-300/g, 'text-mt-text-4');

// Background Colors
code = code.replace(/bg-gray-100/g, 'bg-mt-bg-2');
code = code.replace(/bg-gray-50/g, 'bg-mt-bg-1');
code = code.replace(/bg-\[\#F9F9F9\]/g, 'bg-mt-bg-1');
code = code.replace(/bg-\[\#FAFAFA\]/g, 'bg-mt-bg-3');

// Divider/Border Colors
code = code.replace(/border-gray-100/g, 'border-mt-divider-2');
code = code.replace(/border-gray-200/g, 'border-mt-border-1');

// Theme Colors
code = code.replace(/text-red-500/g, 'text-mt-red');
code = code.replace(/text-red-600/g, 'text-mt-red');
code = code.replace(/bg-red-500/g, 'bg-mt-red');
code = code.replace(/bg-red-600/g, 'bg-mt-red');
code = code.replace(/text-orange-500/g, 'text-mt-orange');

// Border Radii mappings
code = code.replace(/rounded-\[24px\]/g, 'rounded-[12px]');
code = code.replace(/rounded-t-\[24px\]/g, 'rounded-t-[12px]');
code = code.replace(/rounded-b-\[24px\]/g, 'rounded-b-[12px]');
code = code.replace(/rounded-\[14px\]/g, 'rounded-[12px]');
code = code.replace(/rounded-t-\[14px\]/g, 'rounded-t-[12px]');
code = code.replace(/rounded-\[25px\]/g, 'rounded-[12px]'); // generic large
code = code.replace(/rounded-2xl/g, 'rounded-[18px]'); // large block -> 二级圆角 18px

// The user specified that font and numbers are custom:
// We add font-mt-num on '¥' strings and numbers. This is a bit tricky with regex, 
// so we'll wrap a few known structures.
code = code.replace(/>¥</g, ' className="font-mt-num">¥<');
code = code.replace(/>¥([\d.]+)</g, ' className="font-mt-num">¥$1<');
code = code.replace(/>¥\s*</g, ' className="font-mt-num">¥<');

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx updated based on spec');
