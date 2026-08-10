const menuAll = document.querySelector('.all')
const detalist = document.querySelector('.detalistt')

const menuLateral = document.querySelector('.menuLateral')

menuAll.addEventListener('click',(c) => {
    let target = c.target
    console.log(target.className)
    if (target.className == 'material-symbols-outlined') {
        menuLateral.classList.toggle('menuLateralA')
    }
    if (target.className == 'dowland') {
        detalist.setAttribute('open', '') 
    }

})
