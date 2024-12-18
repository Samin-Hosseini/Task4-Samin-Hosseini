const getDataAsycrounous = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const title = data.title;
      const headerElement = document.getElementById("header");
      headerElement.innerText = title;
    })
    .catch((error) => {
      console.log("خطا در دریافت داده", error);
      const headerElement = document.getElementById("header");
      headerElement.innerText = "خطا در بارگذاری داده‌ها";
    });
};

getDataAsycrounous();
