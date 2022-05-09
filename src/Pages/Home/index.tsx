import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";
import Card from "../../Components/Card";
import { ListContext } from "../../Context/list";
import { apiGET } from "../../Services/api";

type HomeProps = NativeStackScreenProps<propsNavigationStack, "Home">;
const Home = ({ navigation }: HomeProps) => {
	const listContext = useContext(ListContext);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await apiGET({ params: "?page=1&perPage=20" });
		for (let i = 0; i < response.length; i++) {
			listContext.addLocalData(response[i]);
		}
	};

	const getLastItems = () => {
		if (listContext.listData.length < 3) {
			return listContext.listData;
		} else
			return listContext.listData.slice(
				listContext.listData.length - 3,
				listContext.listData.length
			);
	};

	const getMonthExpense = () => {
		let monthCost = 0;
		listContext.listData.forEach((item) => {
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
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Add", { id: "" })}
				>
					<Text style={styles.textButton}>Adicionar despesa</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("List")}>
					<Text style={styles.textButton}>Listar despesas</Text>
				</TouchableOpacity>
			</View>
			{listContext.listData.length > 0 ? (
				<Text style={styles.subTitle2}>Últimos lançamentos</Text>
			) : null}
			<FlatList
				data={getLastItems()}
				keyExtractor={(index) => index._id}
				renderItem={({ item }) => (
					<View>
						<Card
							iconType={item.additionalInfo.type}
							name={item.item}
							value={item.value}
							date={
								item.date.slice(8, 10) +
								"/" +
								item.date.slice(5, 7) +
								"/" +
								item.date.slice(0, 4)
							}
							id={item._id}
							navigation={navigation}
						/>
					</View>
				)}
			/>
		</View>
	);
};

export default Home;
