import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 25,
		flex: 1,
	},

	icon: {
		flex: 1,
		alignSelf: "flex-start",
	},

	center: {
		flex: 1,
		alignSelf: "center",
		flexDirection: "column",
	},

	textRigth: {
		flex: 1,
		alignSelf: "flex-end",
	},
});
