import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";

import CheckBox from "../../Components/CheckBox";
import { apiPOST, apiPUT } from "../../Services/api";
import { ListContext } from "../../Context/list";

type AddProps = NativeStackScreenProps<propsNavigationStack, "Add">;
type changeTypesState = {
	position: number;
};

const Add = ({ navigation, route }: AddProps) => {
	const { id } = route.params;

	const listContext = useContext(ListContext);
	const [inputTextName, onChangeInputName] = useState("");
	const [inputTextValue, onChangeInputValue] = useState("");
	const [typesExpenses, setTypesExpenses] = useState([
		false,
		false,
		false,
		false,
		false,
	]);

	useEffect(() => {
		if (id !== "") {
			navigation.setOptions({ title: "Editar" });
			const itemFromList = listContext.listData.filter(
				(item) => item._id === id
			)[0];
			onChangeInputName(itemFromList.item);
			onChangeInputValue(itemFromList.value.toString());
		}
	}, []);

	const changeTypesState = ({ position }: changeTypesState) => {
		let newTypesstate = [...typesExpenses];
		for (let index = 0; index < newTypesstate.length; index++) {
			if (index !== position) newTypesstate[index] = false;
		}
		newTypesstate[position] = !typesExpenses[position];
		setTypesExpenses(newTypesstate);
	};

	const addExpense = async () => {
		var date = new Date().toISOString().split("T")[0];
		const typesExpensesNames = ["food", "shop", "car", "bill", "other"];

		let index = 0;
		for (index; index < typesExpenses.length; index++) {
			if (typesExpenses[index] === true) break;
		}

		const expense = {
			date: date,
			item: inputTextName,
			value: parseInt(inputTextValue),
			additionalInfo: { type: typesExpensesNames[index] },
		};

		const response = await apiPOST({ expense });

		if (response !== "error") {
			listContext.addLocalData({
				_id: response,
				date: date,
				item: inputTextName,
				value: parseInt(inputTextValue),
				additionalInfo: { type: typesExpensesNames[index] },
			});
		}
		response === "error"
			? Alert.alert(
					"Erro!",
					"Não foi possível adicioncar a despesa, confira os campos e tente novamente."
			  )
			: Alert.alert(
					"Sucesso!",
					"Despesa cadastrada corretamente",
					[
						{
							text: "Ok",
							onPress: () => navigation.goBack(),
							style: "cancel",
						},
					],
					{
						cancelable: true,
						onDismiss: () => navigation.goBack(),
					}
			  );
	};

	const updateExpense = async () => {
		var date = new Date().toISOString().split("T")[0];
		const typesExpensesNames = ["food", "shop", "car", "bill", "other"];

		let index = 0;
		for (index; index < typesExpenses.length; index++) {
			if (typesExpenses[index] === true) break;
		}
		const newData = {
			date: date,
			item: inputTextName,
			value: parseInt(inputTextValue),
			additionalInfo: { type: typesExpensesNames[index] },
		};
		const response = await apiPUT({ params: { id: id, expense: newData } });
		if (response !== "error")
			listContext.updateExpense(
				{
					_id: id,
					date: date,
					item: inputTextName,
					value: parseInt(inputTextValue),
					additionalInfo: { type: typesExpensesNames[index] },
				},
				id
			);
		response === "error"
			? Alert.alert(
					"Erro!",
					"Não foi possível atualizar a despesa, tente novamente mais tarde."
			  )
			: Alert.alert(
					"Sucesso!",
					"Despesa atualizada corretamente",
					[
						{
							text: "Ok",
							onPress: () => {
								navigation.navigate("Home");
							},
							style: "cancel",
						},
					],
					{
						cancelable: true,
						onDismiss: () => {
							navigation.navigate("Home");
						},
					}
			  );
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Adicione uma despesa</Text>
			<View style={styles.line} />
			<View style={styles.box}>
				<Text style={styles.subTitles}>Nome</Text>
				<TextInput
					style={styles.input}
					onChangeText={(item) => {
						onChangeInputName(item);
					}}
					value={inputTextName}
					placeholder="Digite o nome que deseja dar a essa despesa"
				/>
			</View>
			<View style={styles.box}>
				<Text style={styles.subTitles}>Valor</Text>
				<TextInput
					style={styles.input}
					onChangeText={(item) => {
						onChangeInputValue(item);
					}}
					value={inputTextValue}
					placeholder="Digite o valor dessa despesa"
				/>
			</View>
			<View style={styles.box}>
				<Text style={styles.subTitles}>Tipo</Text>
				<TouchableOpacity
					onPress={() => {
						changeTypesState({ position: 0 });
					}}
				>
					<CheckBox
						iconType="food"
						title="Comida"
						message="(Restaurantes, deliverys, etc...)"
						selected={typesExpenses[0]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						changeTypesState({ position: 1 });
					}}
				>
					<CheckBox
						iconType="shop"
						title="Compras"
						message="(Mercados, lojas online, etc...)"
						selected={typesExpenses[1]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						changeTypesState({ position: 2 });
					}}
				>
					<CheckBox
						iconType="car"
						title="Carro"
						message="(Combustível, manutenção, etc...)"
						selected={typesExpenses[2]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						changeTypesState({ position: 3 });
					}}
				>
					<CheckBox
						iconType="bill"
						title="Casa"
						message="(Contas de energia, água, etc...)"
						selected={typesExpenses[3]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						changeTypesState({ position: 4 });
					}}
				>
					<CheckBox
						iconType="other"
						title="Outros"
						message=""
						selected={typesExpenses[4]}
					/>
				</TouchableOpacity>
			</View>
			{id === "" ? (
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => addExpense()}
				>
					<Text>Adicionar</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => updateExpense()}
				>
					<Text>Editar</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Add;
