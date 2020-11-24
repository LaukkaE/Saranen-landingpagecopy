//
//Header box shadow
//
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#header").addClass("active");
  }
  else {
      $("#header").removeClass("active");
  }
});
//
//mobile menu
//
const mobileBtn = document.querySelector('.mobile-btn')
mobileBtn.addEventListener('click', () =>{
   mobileBtn.classList.toggle('active')
   document.querySelector('.container-header').classList.toggle('show')
})


//
//ajankohtaista alue
//
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

function removeActive(){
  btns.forEach(item => item.classList.remove('active'))
}
function removeShow(){
  contents.forEach(item => item.classList.remove('show'))
}
btns.forEach(item=>item.addEventListener('click', selectItem))
//
//Saranen lukuina alueen underline animaatiot
//
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('.viewport-underline').isInViewport()) {
      $('.viewport-underline').addClass('viewport-underline-active')
  } else {
    $('.viewport-underline').removeClass('viewport-underline-active')
  }
});

