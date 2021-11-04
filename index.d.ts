interface ColorItem {
  start: number;
  end: number;
  color: string;
}

export type Colors = Array<ColorItem>;

export default function hardEdgedGradient(colors: Colors): string;
