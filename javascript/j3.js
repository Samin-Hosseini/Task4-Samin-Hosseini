const testTimeOut = () => {
  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 10);
    const testTime = (number) => {
      switch (true) {
        case number < 5:
          alert("موفق شدید!");
          break;
        case number >= 5:
          alert("دوباره تلاش کنید!");
          break;
        default:
          break;
      }
    };

    testTime(randomNum);
  }, 3000);
};
