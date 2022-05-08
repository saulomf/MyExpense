import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";
import Card from "../../Components/Card";

const data = [
	{
		date: "04/06/2022",
		item: "ifood",
		value: 200,
		additionalInfo: "food",
	},
	{
		date: "08/06/2022",
		item: "manutenção carro",
		value: 500,
		additionalInfo: "car",
	},
	{
		date: "09/06/2022",
		item: "mercado",
		value: 500,
		additionalInfo: "shop",
	},
	{
		date: "09/06/2022",
		item: "conta de água",
		value: 500,
		additionalInfo: "bill",
	},
	{
		date: "09/06/2022",
		item: "conta de luz",
		value: 500,
		additionalInfo: "bill",
	},
	{
		date: "09/06/2022",
		item: "Americanas",
		value: 500,
		additionalInfo: "shop",
	},
	{
		date: "09/06/2022",
		item: "corte de cabelo",
		value: 500,
		additionalInfo: "other",
	},
	{
		date: "09/06/2022",
		item: "balada",
		value: 500,
		additionalInfo: "other",
	},
	{
		date: "09/06/2022",
		item: "show",
		value: 500,
		additionalInfo: "other",
	},
];

type ListProps = NativeStackScreenProps<propsNavigationStack, "List">;
const List = ({ navigation }: ListProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Todas as despesas</Text>
			<View style={styles.line} />
			<View style={styles.buttons}>
				<TouchableOpacity onPress={() => navigation.navigate("Add")}>
					<Text style={styles.textButton}>Adicionar despesa</Text>
				</TouchableOpacity>
			</View>
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

export default List;
