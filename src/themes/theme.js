const token = {
  primary: "#24438C",
  secondary: "#E5B94A",
  background: "#F2F4F9",
};

export const getGradient = (theme) =>
  `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`;

export const ANT_THEME = {
  token,
  components: {
    Checkbox: {
      colorPrimary: token.primary,
      colorBorder: token.primary,
      colorPrimaryHover: token.secondary,
      controlInteractiveSize: 20,
    },
  },
  custom: {
    spacing: {
      xSmall: "4px",
      small: "8px",
      medium: "12px",
      large: "16px",
      XLarge: "24px",
      doubleLarge: "32px",
    },
    customColors: {
      navy: "linear-gradient(135deg, #1A2F6A 0%, #24438C 100%)",
      gold: "linear-gradient(135deg, #E5B94A, #F2B51E)",
    },
    topNavbar: {
      height: "4.5rem",
    },
  },
};
