import React from "react";
import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";
import Card from "../../Components/Card";

const data = [
	{
		date: "04/06/2022",
		item: "compras",
		value: 200,
		additionalInfo: "food",
	},
	{
		date: "08/06/2022",
		item: "manutenção carro",
		value: 500,
		additionalInfo: "car",
	},
];

type HomeProps = NativeStackScreenProps<propsNavigationStack, "Home">;
const Home = ({ navigation }: HomeProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bem-vindo!</Text>
			<Text style={styles.subTitle}>Últimos lançamentos</Text>
			<FlatList
				data={data}
				keyExtractor={(index) => index.date}
				renderItem={({ item }) => (
					<View>
						<Card
							iconType={item.additionalInfo}
							name={item.item}
							value={item.value}
							date={item.date}
						/>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;
