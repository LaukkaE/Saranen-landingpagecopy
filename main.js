//ajankohtaista alue
const btns = document.querySelectorAll('.selection-btn')
const contents = document.querySelectorAll('.tab-content-item')

function selectItem(e){
  removeActive()
  removeShow()
  //lisää buttoniin active classin
  this.classList.add('active')

  //etsii buttoniin liitetyn contentin
  const tabContent = document.querySelector(`#${this.id}-content`)

  //lisää contenttiin show classin
  tabContent.classList.add('show')
}




//vanhojen classien poisto
function removeActive(){
  btns.forEach(item => item.classList.remove('active'))
}
function removeShow(){
  contents.forEach(item => item.classList.remove('show'))
}

//listener
btns.forEach(item=>item.addEventListener('click', selectItem))