import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		margin: 16,
		borderRadius: 10,
		flex: 1,
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
});
