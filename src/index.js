var FLASH_LETTER_STEP = 10;
var FLASH_DURATION = 5000;

export function element_text(element, text, duration, letter_step) {
  duration = duration || FLASH_DURATION;
  letter_step = leter_step || FLASH_LETTER_STEP;
  flash_appear(element, text, letter_step);
  setTimeout(function(){ flash_dissapear(element, letter_step); }, duration);
}

function flash_appear(element, text, i, letter_step) {
  if (i == undefined)
    i = 0;
  element.innerText = text.substring(0,i);
  setTimeout(function(){
    if (i<text.length)
      flash_appear(element, text, i+1, letter_step);
  }, letter_step);
}

function flash_dissapear(element, text, i, letter_step) {
  if (text == undefined)
    text = element.innerText;
  if (i == undefined)
    i = text.length-1;
  element.innerText = text.substring(0,i);
  setTimeout(function(){
    if (i>0)
      flash_dissapear(element, text, i-1, letter_step);
  }, letter_step);
}
