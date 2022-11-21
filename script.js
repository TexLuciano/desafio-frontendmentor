/*const nav = document.querySelector('.nav')
const btnmenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

function handleButtonClick(event)
nav.classList.toggle("active")

btnmenu.addEventListener("click", handleButtonClick);
*/

window.onload = function () {
  document.querySelector('.menu').addEventListener('click', function () {
    if (document.querySelector('nav').style.display == 'flex') {
      document.querySelector('nav').style.display = 'none'
    } else {
      document.querySelector('nav').style.display = 'flex'
    }
  })
}
