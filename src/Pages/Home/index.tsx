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
];

type HomeProps = NativeStackScreenProps<propsNavigationStack, "Home">;
const Home = ({ navigation }: HomeProps) => {
	const getMonthExpense = () => {
		let monthCost = 0;
		data.forEach((item) => {
			monthCost = monthCost + item.value;
		});
		return monthCost;
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bem-vindo!</Text>
			<View style={styles.subTitle1}>
				<Text style={styles.textSubTitle1}>Gasto mensal até hoje</Text>
				<Text style={styles.textValue}>R$ {getMonthExpense()}</Text>
			</View>
			<View style={styles.line} />
			<View style={styles.buttons}>
				<TouchableOpacity>
					<Text style={styles.textButton}>Adicionar despesa</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.textButton}>Listar despesas</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.line} />
			<Text style={styles.subTitle2}>Últimos lançamentos</Text>
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
