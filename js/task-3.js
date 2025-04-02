function getElementWidth(content, padding, border) {
  const a = parseFloat(content);
  const b = parseFloat(padding);
  const c = parseFloat(border);
  let totalWidth = a + b * 2 + c * 2;
  return totalWidth;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
