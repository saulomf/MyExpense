import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";

import CheckBox from "../../Components/CheckBox";

type AddProps = NativeStackScreenProps<propsNavigationStack, "Add">;
type changeTypesState = {
	position: number;
};

const Add = ({ navigation }: AddProps) => {
	const [inputTextName, onChangeInputName] = useState("");
	const [inputTextValue, onChangeInputValue] = useState("");
	const [types, setTypes] = useState([true, false]);

	const changeTypesState = ({ position }: changeTypesState) => {
		let newTypesstate = types;
		newTypesstate[position] = !types[position];
		setTypes(newTypesstate);
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
						message="(Gastos em restaurantes, deliverys, etc...)"
						selected={types[0]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<CheckBox
						iconType="shop"
						title="Compras"
						message="(Gastos em mercados, lojas online, etc...)"
						selected={true}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<CheckBox
						iconType="car"
						title="Carro"
						message="(Combustível, manutenção, etc...)"
						selected={true}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<CheckBox
						iconType="bill"
						title="Casa"
						message="(Contas de energia, água, etc...)"
						selected={true}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<CheckBox
						iconType="other"
						title="Outros"
						message=""
						selected={true}
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.addButton}>
				<Text>Adicionar</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Add;
