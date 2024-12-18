const changeImgOnHover = () => {
  const img = document.getElementById("img");

  img.onmouseover = function () {
    img.src = "./src/images/nature2.jpg";
  };

  img.onmouseout = function () {
    img.src = "./src/images/nature1.jpg";
  };
};
