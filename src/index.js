var DEFAULT_LETTER_DURATION = 10;
var DEFAULT_DURATION = 5000;

export function element_text(element, text, duration, letter_duration, letter_bound) {
  duration = duration || DEFAULT_DURATION;
  letter_duration = letter_duration || DEFAULT_LETTER_DURATION;
  flash_appear(element, text, 0, letter_duration, letter_bound);
  setTimeout(function(){ flash_dissapear(element, text, text.length, letter_duration, letter_bound); }, duration);
}

function flash_appear(element, text, i, letter_duration, letter_bound) {
  if (i <= text.length) {
    element.innerHTML = text.substring(0, i);
    setTimeout(function(){
      var jump = 1;
      if (letter_bound) {
        jump = text.substring(i + 1).indexOf(letter_bound);
        if (jump == -1) {
          jump = text.length;
        } else {
          jump = jump + 1;
        }
      }
      flash_appear(element, text, i + jump, letter_duration, letter_bound);
    }, letter_duration);
  } else {
    element.innerHTML = text;
  }
}

function flash_dissapear(element, text, i, letter_duration, letter_bound) {
  if (text == undefined)
    text = element.innerHTML;
  if (i == undefined)
    i = text.length-1;
  if (i > 0) {
    element.innerHTML = text.substring(0, i);
    setTimeout(function(){
      var jump = 1;
      if (letter_bound) {
        jump = text.substring(0, i - 1).lastIndexOf(letter_bound);
        if (jump == -1) {
          jump = text.length;
        } else {
          jump = i - jump
        }
      }
      flash_dissapear(element, text, i - jump, letter_duration, letter_bound);
    }, letter_duration);
  } else {
    element.innerHTML = '';
  }
}
