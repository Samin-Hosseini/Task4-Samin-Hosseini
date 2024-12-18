const getDataWithPromise = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("HTTP ERROR");
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject("network error: " + error));
  });
};

const getData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const container = document.getElementById("postsContainer");
  const dataElement = document.getElementById("data");

  container.innerText = "در حال آپدیت...";

  getDataWithPromise(url)
    .then((data) => {
      let output = "";
      for (let i = 0; i < data.length; i++) {
        const posts = data[i];
        output += `
          <p> 
              <strong>id:</strong> ${posts.id} <br>
              <strong>title:</strong> ${posts.title} <br>
              <strong>body:</strong> ${posts.body} <br>
          </p>`;
      }
      dataElement.innerHTML = output;

      container.innerText = "آپدیت شد";
    })
    .catch((error) => {
      console.log(error);
      container.innerText = "خطا در آپدیت";
    });
};

const fetchDataInterval = () => {
  getData();
  setInterval(() => {
    getData();
  }, 5000);
};

window.onload = fetchDataInterval;
