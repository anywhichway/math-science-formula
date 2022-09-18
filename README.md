# math-science-formula
A web component for rendering LaTex based math and chemical formulas.

# Usage

`@anywhichway/math-science-formula` is designed to be loaded and used from a CDN like https://www.jsdelivr.com. It is also designed
to be loaded and instantiated by `@anywhichway/quick-component`.

Insert this line into your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@anywhichway/quick-component.js" component="https://cdn.jsdelivr.net/npm/@anywhichway/math-science-formula@0.0.1"></script>
```

Version numbers are used above to insulate your use from unexpected changes due to future enhancements. You can also use
the most recent version of the software with the code below:

```html
<script src="https://cdn.jsdelivr.net/npm/@anywhichway/quick-component.js" component="https://cdn.jsdelivr.net/npm/@anywhichway/math-science-formula"></script>
```

After this you can include the tag `<math-science-formula>` in your HTML.

# Configuration

`<math-science-formula>` is not a typical web component in that it does not use slots for configuration. Instead, you just put
any LaTex for Math or Chemistry inside the start and end tags.

For example:

```html
<math-science-formula>
    \sqrt[n]{1+x+x^2+x^3+\ldots}
</math-science-formula>
```

```html
<math-science-formula>
    \ce{2H + O -> H2O}
</math-science-formula>
```

# Dynamic Updates

By changing the slot value and calling `render` you can re-use the tag with other arguments.

```javascript
const computer = document.getElementById("myeval"),
    slot = computer.querySelector("[slot]");
slot.innerText = "2 - 2";
computer.render();
```

# Version History (reverse chronological order)

2022-09-18 v0.0.1 First public commit
