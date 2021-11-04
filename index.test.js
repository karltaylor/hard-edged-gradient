import hardEdgedGradient from "./index";

test("It works", () => {
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

  const result = hardEdgedGradient(colors);
  expect(result).toBe(
    "linear-gradient(90deg, red 25%, blue 25%, blue 50%, orange 50%, orange 75%, green 75%, green 100%)"
  );
});

test("It throws an error when only 1 color is used", () => {
  const colors = [{ start: 0, end: 50, color: "blue" }];
  expect(() => hardEdgedGradient(colors)).toThrow(
    "Must have more than 1 color"
  );
});
