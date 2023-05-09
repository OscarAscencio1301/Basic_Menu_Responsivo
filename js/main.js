const menuHamburguer = document.querySelector(".menuToogle")
const navigation = document.querySelector(".navigation")
const listaItem = document.querySelectorAll(".list")


menuHamburguer.onclick = () => {
    navigation.classList.toggle('open')
}


function activarLink () {
    listaItem.forEach((item) => {
        item.classList.remove("active")
        this.classList.add("active")
    })
}

listaItem.forEach((item) => {
    item.addEventListener('click', activarLink)
})
