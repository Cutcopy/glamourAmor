console.log("dope Shoes");

//shortens some of the js funtions, because laziness
var byId = function ( id ){ return document.getElementById( id )}
var byClass = function ( classname ){ return document.getElementsByClassName( classname )}

//color picker
var colorInput1 = document.querySelector('input#pallete1');
var colorInput2 = document.querySelector('input#pallete2');

//main Color Selector
colorInput1.addEventListener('input', function(){
  var bg = colorInput1.value
  var elems = byClass('sitecolor1');
  for (var i=0;i<elems.length;i+=1){
    elems[i].style.background = bg;
    elems[i].style.fill = bg
  }
});

//forground color selector
colorInput2.addEventListener('input', function(){
  var fg = colorInput2.value
  var elems = byClass('sitecolor2');
  for (var i=0;i<elems.length;i+=1){
    elems[i].style.background = fg;
    elems[i].style.fill = fg;
  }
});

//toggles inbetween color choices
function swapColor(){
  //assign colors into variables from color input
  var bg = colorInput1.value;
  var fg = colorInput2.value;

  //swap colors in input fields
  byId('pallete1').value = fg;
  byId('pallete2').value = bg;
  //run through all classes and swap colors on page
  var elems = byClass('sitecolor1');
  for (var i=0;i<elems.length;i+=1){
    elems[i].style.background = fg;
    elems[i].style.fill = fg;
    }
    var elems = byClass('sitecolor2');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.background = bg;
      elems[i].style.fill = bg
    }
};
