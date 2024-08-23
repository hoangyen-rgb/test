// Author :dangphuonghoangyen.io.vn

const topMenu = document.getElementById('hy-top-menu')
const toggleTopMenuIcon = document.getElementById('hy-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) { // khi click vào 1 cái phần nào trên web thuộc đúng toggle 
        // Click to Toggel top menu icon
        topMenu.classList.toggle('hy-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    } else {
        if (topMenu.classList.contains('hy-topmenu-expanded')) {
            topMenu.classList.remove('hy-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
        // Click Outside from Toggle top menu icon

    }
})