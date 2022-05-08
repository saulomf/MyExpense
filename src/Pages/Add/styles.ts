import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		margin: 16,
		borderRadius: 10,
		paddingBottom: 20,
	},

	title: {
		margin: 20,
		color: COLORS.GRAY,
		fontSize: 20,
		fontWeight: "bold",
	},

	line: {
		borderWidth: 0.5,
		borderColor: COLORS.LIGTH_GRAY,
		marginBottom: 20,
	},

	box: {
		marginHorizontal: 20,
		marginBottom: 20,
	},

	subTitles: {
		color: COLORS.DARK_GRAY,
		fontSize: 16,
	},

	input: {
		borderBottomWidth: 1,
		borderColor: COLORS.GRAY,
	},

	checkBox: {
		height: 20,
		width: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.DARK_GREEN,
		backgroundColor: COLORS.DARK_GREEN,
	},
});
