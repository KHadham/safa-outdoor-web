import { Dimensions } from "react-native"

const WINDOW = Dimensions.get("window")

export const isPortrait = () => {
  const { width, height } = Dimensions.get("window")
  return width <= height
}

export function heightByScreen(size: number) {
  return (size * WINDOW.height) / 100
}

export function widthByScreen(size: number) {
  return (size * WINDOW.width) / 100
}
