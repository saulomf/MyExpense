import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginTop: 10,
		alignItems: "center",
	},

	checkBoxSelected: {
		height: 20,
		width: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.GREEN,
		backgroundColor: COLORS.GREEN,
	},

	checkBoxUnselected: {
		height: 20,
		width: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.GREEN,
	},

	icon: {
		marginLeft: 12,
	},

	containerText: {
		flexDirection: "column",
		marginLeft: 5,
	},

	text: {
		color: COLORS.DARK_GRAY,
	},
});
