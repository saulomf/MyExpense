import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		margin: 16,
		borderRadius: 10,
	},

	title: {
		margin: 20,
		color: COLORS.GRAY,
		fontSize: 20,
		fontWeight: "bold",
	},

	subTitle1: {
		marginHorizontal: 20,
		marginBottom: 20,
		borderLeftWidth: 2,
		borderLeftColor: COLORS.BLUE,
		paddingLeft: 8,
	},

	textSubTitle1: {
		color: COLORS.DARK_GRAY,
		fontSize: 16,
	},

	subTitle2: {
		marginHorizontal: 20,
		marginBottom: 10,
		color: COLORS.DARK_GRAY,
		fontSize: 16,
	},

	line: {
		borderWidth: 0.5,
		borderColor: COLORS.LIGTH_GRAY,
		marginBottom: 20,
	},

	buttons: {
		flexDirection: "row",
		alignSelf: "center",
		marginBottom: 20,
	},

	textButton: {
		color: COLORS.GRAY,
		paddingVertical: 2,
		paddingHorizontal: 4,
		borderRadius: 4,
		borderColor: COLORS.GRAY,
		borderWidth: 1,
		marginHorizontal: 20,
		fontSize: 14,
	},

	textValue: {
		fontSize: 14,
		fontWeight: "bold",
		color: COLORS.BLUE,
	},
});
