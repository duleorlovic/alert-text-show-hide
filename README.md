# Alert Text Show Hide

Show and hide any alert text [Demo].

## Installation

You can include as a module (UMD) or with a script tag so you you can access
global object `alertTextShowHide`.

~~~
<script src="./dist/element_message.js"></script>
~~~

It needs element id and text which needs to be shown.

~~~
let el = document.getElementById('notice')
let text = 'This is my notice'
alertTextShowHide.element_text(el, text)

// or in one line
alertTextShowHide.element_text(document.getElementById('notice'), 'This is my notice');
~~~

Styling of alerts and notices is completelly on your side. This just show and
hide text inside it.

## Example usage in Ruby on Rails

~~~
<%# app/views/layouts/_alerts.html.erb
<span class="alert alert-info" id="notice"></span>
<span class="alert alert-danger" id="alert"></span>
<script>
  <%=raw "alertTextShowHide.element_text(document.getElementById('notice'), '#{j notice}', 10000);" if notice %>
  <%=raw "alertTextShowHide.element_text(document.getElementById('alert'), '#{j alert}', 10000);" if alert %>
</script>
~~~

For Bootstrap you should override padding in case when there is empty message.

~~~
.alert:empty {
  /* remove padding for empty messages */
  padding: 0px;
  /* when innerText is cleared somehow background and border remains */
  background: none;
  border: none;
}
~~~

## Contributing

Bug reports and pull requests are welcome on GitHub at
[github.com/duleorlovic/alert-text-show-hide]

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Authors

This project is designed and created at TRK INNOVATIONS llc by:

* [duleorlovic](https://github.com/duleorlovic)

[Demo]: https://codepen.io/duleorlovic/pen/QrbqLo
[github.com/duleorlovic/alert-text-show-hide]: https://github.com/duleorlovic/alert-text-show-hide

