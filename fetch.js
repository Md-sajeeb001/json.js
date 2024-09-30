// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function runData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }

// function loadData() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const datas = data.map((d) => d.name);
//       dispayData(datas)
//     });
// }
// function dispayData(data){
//     console.log(data);
// }

// function loadData2() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => showData(data));
// }

// function showData(data) {
//   data.map((d) => {
//     const dataInfo = d.id;
//     displayInfo(dataInfo);
//   });
// };

// function displayInfo(data){
//     const ul = document.getElementById('list-container');
//     const li = document.createElement('li');
//     li.innerText = data;

//     ul.appendChild(li);
// }

function runData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayInfo(data));
}

function displayInfo(infoData) {
  const ul = document.getElementById("list-box");

  const info = infoData.map((d) => d.title);
  const li = document.createElement('li');
  li.textContent = info;
  li.classList.add('text-white')
  ul.appendChild(li);


}
