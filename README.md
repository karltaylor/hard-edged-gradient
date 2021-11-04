# hard-edged-gradient

Create hard edged gradients in JS using an array:

```js
const colors = [
  {
    start: 0,
    end: 25,
    color: "red",
  },
  {
    start: 25,
    end: 50,
    color: "blue",
  },
  {
    start: 50,
    end: 75,
    color: "orange",
  },
  {
    start: 75,
    end: 100,
    color: "green",
  },
];

console.log(hardEdgedGradient(colors));
// linear-gradient(90deg, red 25%, blue 25%, blue 50%, orange 50%, orange 75%, green 75%, green 100%)
```
