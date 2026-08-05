const menuAll = document.querySelector('.all')

const menuLateral = document.querySelector('.menuLateral')

menuAll.addEventListener('click',(c) => {
    let target = c.target
    console.log(c)
    if (target.className == 'material-symbols-outlined') {
        menuLateral.classList.toggle('menuLateralA')
    }
})
