import { DefaultTheme } from "styled-components"
import { ThemeColors } from "../types/theme"

export const colors: ThemeColors = {
  white: "#fff",
  black: "#292929",
  primary: "#f6bd20",
  secondary: "#9c5200",
  border: "#de9400",
}

export const fonts = {
  sansSerif: "sans-serif",
  serif: "serif",
  monospace: "monospace",
}

export const defaultTheme: DefaultTheme = {
  colors,
  fonts,
}
