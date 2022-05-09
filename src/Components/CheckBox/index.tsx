import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type CheckBoxProps = {
	title: string;
	message: string;
	iconType: string;
	selected: boolean;
};

const CheckBox = ({ iconType, title, message, selected }: CheckBoxProps) => {
	const getIcon = () => {
		if (iconType === "food")
			return (
				<Ionicons name="restaurant-outline" size={24} color="black" />
			);
		else if (iconType === "shop")
			return <Ionicons name="cart-outline" size={24} color="black" />;
		else if (iconType === "car")
			return <Ionicons name="car-outline" size={24} color="black" />;
		else if (iconType === "bill")
			return <Ionicons name="home-outline" size={24} color="black" />;
		else
			return <AntDesign name="questioncircleo" size={24} color="black" />;
	};

	return (
		<View style={styles.container}>
			<View
				style={
					selected
						? styles.checkBoxSelected
						: styles.checkBoxUnselected
				}
			/>
			<View style={styles.icon}>{getIcon()}</View>
			<View style={styles.containerText}>
				<Text style={styles.text}>{title}</Text>
				{message !== "" ? (
					<Text style={styles.text}>{message}</Text>
				) : null}
			</View>
		</View>
	);
};

export default CheckBox;
