import { colors, spacing } from "app/theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.palette.neutral100,
    borderTopWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flex:1,
    gap: spacing.md,
    margin: -spacing.lg,
    marginTop:0,
    padding: spacing.lg,
  },
})
export default styles
