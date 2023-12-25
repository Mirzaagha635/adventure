const div = document.getElementById('productsList')
const btn = document.getElementById('pagi')
function getProducts() {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.innerHTML = `
        <img  src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>`;

        div.appendChild(box)
    })
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}



const input = document.getElementById('searchinput')
const searchbtn = document.getElementById('searchbtn')

function getbyname() {
    div.innerHTML = ``
    axios.get('https://65680fe59927836bd97408d3.mockapi.io/products')
        .then(res => {
            db = res.data
            console.log(db);
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(input.value.toLowerCase()))
            console.log(filteredData);
            filteredData.map(item => {
                const box = document.createElement('div')
                box.innerHTML = `
        <img  src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick="removeItem()">Remove from cart</button>`;

                div.appendChild(box)
            })
        })
}
searchbtn.addEventListener('click', getbyname)