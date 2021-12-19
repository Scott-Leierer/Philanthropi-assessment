const createScale = (base: number, step: number) => (multiplier: number) =>
  `${base + step * multiplier}px`;

const spaceScale = createScale(4, 4);
const borderRadiusScale = createScale(4, 2);
const fontSizeScale = createScale(16, 2);
const lineHeightScale = createScale(22, 2);

export const vars = {
  fontFamily: {
    body: `Inter, Helvetica, Arial, sans-serif`,
  },
  color: {
    "white-1": "#fff",
    "black-1": "#000",
    "black-2": "#222",
    "gray-1": "#f6f6f6",
    "gray-2": "#868686",
    "gray-3": "#97999B",
    "gray-4": "#D0D0D0",
    "gray-5": "#E0E0E0",
    "red-1": "#9D1137",
    "red-2": "#FF3D34",
    "red-3": "#CC2668",
    "red-4": "#ffe0e0",
    "blue-1": "#00ADEE",
    "blue-2": "#0091C3",
    "blue-3": "#006ECE",
    "blue-4": "#0B7DA8",
    "green-1": "#55871F",
    "green-2": "#539310",
    "yellow-1": "#FFCC34",
    "yellow-2": "#CF9B25",
  },
  fontSize: {
    "-1x": fontSizeScale(-1), // 14px
    base: fontSizeScale(0), // 16px
    "1x": fontSizeScale(1), // 18px
    "2x": fontSizeScale(2), // 20px
    "3x": fontSizeScale(3), // 22px
    "4x": fontSizeScale(4), // 24px
    "5x": fontSizeScale(5), // 26px
    "6x": fontSizeScale(6), // 28px
    "7x": fontSizeScale(7), // 30px
    "8x": fontSizeScale(8), // 32px
  },
  lineHeight: {
    "-1x": lineHeightScale(-1), // 20px
    match: "1", // match whatever the font-size was set to
    base: lineHeightScale(0), // 22px
    "1x": lineHeightScale(1), // 24px
    "2x": lineHeightScale(2), // 26px
    "3x": lineHeightScale(3), // 28px
    "4x": lineHeightScale(4), // 30px
    "5x": lineHeightScale(5), // 32px
    "6x": lineHeightScale(6), // 34px
    "7x": lineHeightScale(7), // 36px
    "8x": lineHeightScale(8), // 38px
  },
  space: {
    none: "0",
    base: spaceScale(0), // 4px
    "1x": spaceScale(1), // 8px
    "2x": spaceScale(2), // 12px
    "3x": spaceScale(3), // 16px
    "4x": spaceScale(4), // 20px
    "5x": spaceScale(5), // 24px
    "6x": spaceScale(6), // 28px
    "7x": spaceScale(7), // 32px
    "8x": spaceScale(8), // 36px
    "9x": spaceScale(9), // 40px
  },
  borderRadius: {
    none: "0",
    base: borderRadiusScale(0), // 4px
    "1x": borderRadiusScale(1), // 6px
    "2x": borderRadiusScale(2), // 8px
    "3x": borderRadiusScale(3), // 10px
    "4x": borderRadiusScale(4), // 12px
    "5x": borderRadiusScale(5), // 14px
    "6x": borderRadiusScale(6), // 16px
    full: "99999px",
  },
  breakpoints: {
    value: {
      mobile: 0,
      tablet: "768px",
      desktop: "1024px",
      "desktop-lg": "1440px",
    },
    media: {
      mobile: "",
      tablet: "@media screen and (min-width: 768px)",
      desktop: "@media screen and (min-width: 1024px)",
      "desktop-lg": "@media screen and (min-width: 1440px)",
    },
  },
  modes: {
    lightMode: "",
    darkMode: "@media (prefers-color-scheme: dark)",
  },
  layouts: {
    inputs: {
      height: "50px",
    },
  },
};
