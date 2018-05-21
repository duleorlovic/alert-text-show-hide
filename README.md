# Alert Text Show Hide

Show and hide any alert text [Demo].

## Installation

You can include as a module (UMD) from npm package
https://www.npmjs.com/package/alert-text-show-hide

~~~
npm install alert-text-show-hide
~~~

If you are using bower than use

~~~
npm add bower-npm-resolver
# update your .bowerrc
{
  "resolvers": [
    "bower-npm-resolver"
  ]
}
bower install npm:alert-text-show-hide --save

~~~
You can use github cdn and include with a script tag and use global object
`alertTextShowHide` on some element and text.

~~~
<script src="./dist/element_text.js"></script>
~~~

It needs element id and text which needs to be shown:

~~~
let el = document.getElementById('notice')
let text = 'This is my notice'
alertTextShowHide.element_text(el, text)

// or in one line
alertTextShowHide.element_text(document.getElementById('notice'), 'This is my notice');
~~~

You can also change delay and show speed, split message by any character and use
html tags:

~~~
alertTextShowHide.element_text(
  document.getElementById('notice'),
  "<span class='error'>This is my notice</span>
  <a href='http://trk.in.rs'>TRK</a>",
  10000,
  500,
  ','
);
~~~

Styling of alerts and notices is completelly on your side. This just show and
hide text inside it.


## Example usage in Ruby on Rails

~~~
<%# app/views/layouts/_alerts.html.erb
<div class="alert alert-info" id="notice"></div>
<div class="alert alert-danger" id="alert"></div>
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

## Develop

~~~
npm run build
gnome-open test/index.html
~~~

Run tests

~~~
./node_modules/mocha/bin/mocha
~~~

Add new version with

~~~
npm run build
vi package.json # increase version
git add .
git commit -m 'Fix something'
npm publish
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

