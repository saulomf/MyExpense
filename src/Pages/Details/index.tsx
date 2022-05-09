import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";
import { ListContext } from "../../Context/list";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { apiDELETE, apiPUT } from "../../Services/api";

type DetailsProps = NativeStackScreenProps<propsNavigationStack, "Details">;
const Details = ({ navigation, route }: DetailsProps) => {
	const { id } = route.params;
	const listContext = useContext(ListContext);
	const [itemFromList, setItemFromList] = useState({
		_id: "",
		date: "",
		item: "",
		value: 0,
		additionalInfo: {
			type: "",
		},
	});

	useEffect(() => {
		const itemSelected = listContext.listData.filter(
			(item) => item._id === id
		)[0];
		setItemFromList(itemSelected);
	}, []);

	const getIcon = () => {
		let iconType = itemFromList.additionalInfo.type;
		if (iconType === "food")
			return (
				<Ionicons name="restaurant-outline" size={40} color="black" />
			);
		else if (iconType === "shop")
			return <Ionicons name="cart-outline" size={40} color="black" />;
		else if (iconType === "car")
			return <Ionicons name="car-outline" size={40} color="black" />;
		else if (iconType === "bill")
			return <Ionicons name="home-outline" size={40} color="black" />;
		else
			return <AntDesign name="questioncircleo" size={40} color="black" />;
	};

	const getTypeName = () => {
		let iconName = itemFromList.additionalInfo.type;
		if (iconName === "food") return "Comida";
		else if (iconName === "shop") return "Compras";
		else if (iconName === "car") return "Carro";
		else if (iconName === "bill") return "Casa";
		else return "Outros";
	};

	const deleteExpense = async () => {
		const response = await apiDELETE({ params: "/" + id });
		response === "error"
			? Alert.alert(
					"Erro!",
					"Não foi possível deletar a despesa, tente novamente mais tarde."
			  )
			: Alert.alert(
					"Sucesso!",
					"Despesa deletada corretamente",
					[
						{
							text: "Ok",
							onPress: () => {
								navigation.goBack();
								listContext.deleteLocalData(id);
							},
							style: "cancel",
						},
					],
					{
						cancelable: true,
						onDismiss: () => {
							navigation.goBack();
							listContext.deleteLocalData(id);
						},
					}
			  );
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Detalhes da despesa</Text>
			<View style={styles.line} />
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Add", { id: id })}
				>
					<Text style={styles.textButton}>Editar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => deleteExpense()}>
					<Text style={styles.textButton}>Excluir</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.iconAndText}>
				{getIcon()}
				<Text style={styles.name}>{itemFromList.item}</Text>
			</View>
			<Text style={styles.value}>R$ {itemFromList.value}</Text>
			<Text style={styles.itemType}>{getTypeName()}</Text>
			<Text style={styles.itemDate}>
				{itemFromList.date.slice(8, 10) +
					"/" +
					itemFromList.date.slice(5, 7) +
					"/" +
					itemFromList.date.slice(0, 4)}
			</Text>
		</View>
	);
};

export default Details;
