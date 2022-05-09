import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type CardProps = {
	iconType: string;
	name: string;
	value: number;
	date: string;
	id: string;
	navigation: NavigationProp<ParamListBase>;
};

const Card = ({ iconType, name, value, date, id, navigation }: CardProps) => {
	const getIcon = () => {
		if (iconType === "food")
			return (
				<Ionicons name="restaurant-outline" size={35} color="black" />
			);
		else if (iconType === "shop")
			return <Ionicons name="cart-outline" size={35} color="black" />;
		else if (iconType === "car")
			return <Ionicons name="car-outline" size={35} color="black" />;
		else if (iconType === "bill")
			return <Ionicons name="home-outline" size={35} color="black" />;
		else
			return <AntDesign name="questioncircleo" size={35} color="black" />;
	};

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Details", { id: id })}
		>
			<View style={styles.container}>
				<View style={styles.icon}>{getIcon()}</View>
				<View style={styles.center}>
					<Text style={styles.textName}>
						{name[0].toUpperCase() + name.slice(1)}
					</Text>
					<Text style={styles.textDate}>{date}</Text>
				</View>
				<Text style={styles.textValue}>R$ {value}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
