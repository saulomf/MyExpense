import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type CardProps = {
	iconType: string;
	name: string;
	value: number;
	date: string;
};

const Card = ({ iconType, name, value, date }: CardProps) => {
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
			<View style={styles.icon}>{getIcon()}</View>
			<View style={styles.center}>
				<Text style={{}}>{name[0].toUpperCase() + name.slice(1)}</Text>
				<Text>{date}</Text>
			</View>
			<Text style={styles.textRigth}>{value}</Text>
		</View>
	);
};

export default Card;
