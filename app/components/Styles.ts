import { colors, spacing } from "app/theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.palette.neutral100,
    borderTopWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginHorizontal: -spacing.lg,
    padding: spacing.md,
  },
})
export default styles
