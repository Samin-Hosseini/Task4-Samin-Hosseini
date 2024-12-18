const randomArray = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
  let sortedArray1 = array.sort((a, b) => a - b);
  let sortedArray2 = array.sort((a, b) => b - a);
  console.log(sortedArray1);
  console.log(sortedArray2);
};
