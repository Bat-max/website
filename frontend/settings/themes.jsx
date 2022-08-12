export const mainTheme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
    add1: "#C60606",
    add2: "#4C4C4C",
    add3: "#C4C4C4",
    add4: "#686868",
    error: "#ff568c",
    success: "#45d345",
  },
  typography: {
    primary: "Poppins, sans-serif",
  },
  spacing: {
    section: "clamp(20px,3vw, 40px) 20px;",
    navbarHeight: "65px",
    mainHeader: "60px 20px",
  },
  breakpoints: {
    xs: `(min-width: 512px)`,
    sm: `(min-width: 768px)`,
    smP: `(orientation: portrait) and (min-width: 768px)`,
    md: `(min-width: 992px)`,
    lg: `(min-width: 1200px)`,
    xl: `(min-width: 1440px)`,
  },
};
