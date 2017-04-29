console.log("dope Shoes");
$('#pallete2').click(function(){

  $('#pallete1').removeClass('bg').addClass('fg');
  $('#pallete2').removeClass('fg').addClass('bg');
});
$('#pallete1').click(function(){
  $('#pallete1').addClass('bg').removeClass('fg');
  $('#pallete2').addClass('fg').removeClass('bg');
});
function swapColor1(){
  document.getElementsByClassName('about')[0].style.background = 'var(--bgcolor)'
  document.getElementById('h1').style.color = 'var(--fgcolor)'
}
function swapColor2(){
    document.getElementById('h1').style.color = 'var(--bgcolor)'
  document.getElementsByClassName('about')[0].style.background = 'var(--fgcolor)'
}
// function swapColor1(){
//   document.getElementById('about').style.background = 'var(--bgcolor)'
// }
// function swapColor2(){
//   document.getElementById('about').style.background = 'var(--fgcolor)'
// }
