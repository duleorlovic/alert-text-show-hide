var FLASH_LETTER_STEP = 10;
var FLASH_DURATION = 5000;

// Use in your html erb file like:
//
// <div class="right-down">
//   <span class="notice" id="notice"></span>
//   <span class="alert" id="alert"></span>
// </div>
// <script>
//   <%=raw "alertTextShowHide(document.getElementById('notice'), '#{j notice}');" if notice %>
//   <%=raw "alertTextShowHide(document.getElementById('alert'), '#{j alert}');" if alert %>
// </script>
//
function alertTextShowHide(element, message) {
  flash_appear(element, message);
  setTimeout(function(){ flash_dissapear(element); }, FLASH_DURATION);
}

function flash_appear(element, message, i) {
  if (i == undefined)
    i = 0;
  element.innerText = message.substring(0,i);
  setTimeout(function(){ 
    if (i<message.length)
      flash_appear(element, message, i+1);
  }, FLASH_LETTER_STEP);
}

function flash_dissapear(element, message, i) {
  if (message == undefined)
    message = element.innerText;
  if (i == undefined)
    i = message.length-1;
  element.innerText = message.substring(0,i);
  setTimeout(function(){ 
    if (i>0)
      flash_dissapear(element, message,i-1);
  }, FLASH_LETTER_STEP);
}
