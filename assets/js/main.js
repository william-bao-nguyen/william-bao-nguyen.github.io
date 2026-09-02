const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.site-menu');
const submenuButton=document.querySelector('.submenu-button');
const submenu=document.querySelector('.submenu');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
if(submenuButton&&submenu){submenuButton.addEventListener('click',()=>{const open=submenu.classList.toggle('open');submenuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(node=>node.textContent=new Date().getFullYear());
