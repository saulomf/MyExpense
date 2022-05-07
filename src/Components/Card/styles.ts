import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 25,
	},

	icon: {
		marginRight: 15,
		alignSelf: "center",
	},

	center: {
		flex: 1,
		flexDirection: "column",
	},

	textName: {
		fontSize: 16,
		marginBottom: 2,
	},

	textDate: {
		color: COLORS.DARK_GRAY,
	},

	textValue: {
		fontSize: 14,
		alignSelf: "flex-end",
		alignItems: "flex-end",
		fontWeight: "bold",
		color: COLORS.BLUE,
	},
});
