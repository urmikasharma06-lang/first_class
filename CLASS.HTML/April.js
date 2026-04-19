let container = document.getElementById("container");
console.log(container)
const fetchData = async () => {
    try {
        const a = await fetch("https://dummyjson.com/users");
        const b = await a.json();
        displayCards(b.users);
    } catch (error) {
        console.log(error);
    }
};

function displayCards(users) {
    const cards = users.map((user) => {
        return `
        <div class="cards">
            <h1>${user.firstName}</h1>
        </div>
        `;
    });
    container.innerHTML = cards.join("");
}

fetchData();