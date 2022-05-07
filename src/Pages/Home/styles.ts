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
		fontSize: 18,
		fontWeight: "bold",
	},
	subTitle: {
		marginHorizontal: 20,
		marginBottom: 10,
		color: COLORS.GRAY,
		fontSize: 14,
	},
});
