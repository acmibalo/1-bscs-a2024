const sidebar = document.querySelector('#dropdown')

function showSideBar(){
    sidebar.style.transform = 'translateX(0)'
}

function hideSideBar(){
    sidebar.style.transform = 'translateX(100%)'
}