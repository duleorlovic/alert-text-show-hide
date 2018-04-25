var FLASH_LETTER_STEP = 10;
var FLASH_DURATION = 5000;

export function element_text(element, text, duration = FLASH_DURATION) {
  flash_appear(element, text);
  setTimeout(function(){ flash_dissapear(element); }, duration);
}

function flash_appear(element, text, i) {
  if (i == undefined)
    i = 0;
  element.innerText = text.substring(0,i);
  setTimeout(function(){
    if (i<text.length)
      flash_appear(element, text, i+1);
  }, FLASH_LETTER_STEP);
}

function flash_dissapear(element, text, i) {
  if (text == undefined)
    text = element.innerText;
  if (i == undefined)
    i = text.length-1;
  element.innerText = text.substring(0,i);
  setTimeout(function(){
    if (i>0)
      flash_dissapear(element, text, i-1);
  }, FLASH_LETTER_STEP);
}
