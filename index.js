export default function hardEdgedGradient(colors) {
  if (colors.length === 1) throw new Error("Must have more than 1 color");

  let gradient = "linear-gradient(90deg, ";

  colors.forEach(({ color, start, end }, index) => {
    if (index === 0) {
      gradient += `${color} ${end}%, `;
    } else {
      gradient += `${color} ${start}%, ${color} ${end}%`;
      if (index !== colors.length - 1) {
        gradient += ", ";
      } else {
        gradient += ")";
      }
    }
  });

  return gradient;
}
