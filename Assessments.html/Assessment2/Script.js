let allData = [];
async function fetchData(){
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    allData = data;
    displayData(data);
}
fetchData();

function displayData(data){
    let container = document.getElementById("container");
    container.innerHTML = "";
    data.map(item =>{
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3>${item.title}</h3>
        <p>₹${item.price}</p>
      <img src="${item.image}" width="100"></img>
      `;
      container.appendChild(div);
    });
}

let searchInput = document.getElementById("search");
searchInput.addEventListener("input",function(){
    let value = searchInput.value.toLowerCase();
      let filtered = allData.filter(item =>
    item.title.toLowerCase().includes(value)
  );
displayData(filtered);
});