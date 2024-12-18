const randomArray = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
  // مرتب سازی کوچک به بزرگ
  let sortedArray1 = array.flat().sort((a, b) => a - b);
  // مرتب سازی بزرگ به کوچک
  let sortedArray2 = array.flat().sort((a, b) => b - a);
  console.log(sortedArray1);
  console.log(sortedArray2);
};
