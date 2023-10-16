// All element to world with:
let shop = document.querySelector('.shop')
let shop_collapsed = document.getElementsByClassName('collapsed-bag-initial')[0]

let apple  = document.querySelector('.apple')

let search = document.querySelector('.search')
let search_collapsed = document.getElementsByClassName('collapsed-search-initial')[0]

let ham = document.querySelector('.ham-button')
let ham_collapsed = document.getElementsByClassName('ham-opt-initial')[0]

// Rotating the plus sign to make it cross
function rotate_sign() {
    this.nextElementSibling.classList.toggle('show-items')
    this.children[0].classList.toggle('rotate-45')
}
document.querySelectorAll('.link-heads').forEach((element) => { element.addEventListener('click', rotate_sign) })

function close_collapse() {
    if (window.innerWidth < 850){
        shop.style.display = 'none'
        apple.style.display = 'none'
        search.style.display = 'none'
        document.querySelector('.fa-equals').style.display = 'none'
        document.querySelector('.material-symbols-outlined').style.display = 'flex'
    }
}

function x_mark() {
        shop.style.display = 'flex'
        apple.style.display = 'flex'
        search.style.display = 'flex'
        document.querySelector('.fa-equals').style.display = 'flex'
        document.querySelector('.material-symbols-outlined').style.display = 'none'
        
        ham_collapsed.classList.remove('ham-opt-final')
        shop_collapsed.classList.remove('collapsed-bag-final')
        search_collapsed.classList.remove('collapsed-search-final')
}

function flip_collapse() {
    if (this.classList.contains('shop')) {
        ham_collapsed.classList.remove('ham-opt-final')
        search_collapsed.classList.remove('collapsed-search-final')
        shop_collapsed.classList.toggle('collapsed-bag-final')
    }
    else if (this.classList.contains('search')) {
        ham_collapsed.classList.remove('ham-opt-final')
        shop_collapsed.classList.remove('collapsed-bag-final')
        search_collapsed.classList.toggle('collapsed-search-final')
        
    }
    else if (this.classList.contains('ham-button')) {
        ham_collapsed.classList.toggle('ham-opt-final')
        search_collapsed.classList.remove('collapsed-search-final')
        shop_collapsed.classList.remove('collapsed-bag-final')
    }
}
document.querySelector('.search').addEventListener('click', flip_collapse)
document.querySelector('.search').addEventListener('click', close_collapse)

document.querySelector('.shop').addEventListener('click', flip_collapse)
document.querySelector('.shop').addEventListener('click', close_collapse)

document.querySelector('.ham-button').addEventListener('click', flip_collapse)
document.querySelector('.ham-button').addEventListener('click', close_collapse)

document.querySelector('.material-symbols-outlined').addEventListener('click', x_mark)

