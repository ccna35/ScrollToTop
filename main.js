const up = document.querySelector('.up');

window.onscroll = ()=>{
  if(window.scrollY >= 100){
   up.classList.add('show');
  }else{
    up.classList.remove('show');
  }
};

up.addEventListener("click", ()=>{
  window.scrollTo(0, 0);
 // console.log('hello')
});