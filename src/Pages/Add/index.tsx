import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";

import CheckBox from "../../Components/CheckBox";

type AddProps = NativeStackScreenProps<propsNavigationStack, "Add">;
const Add = ({ navigation }: AddProps) => {
	const [inputTextName, onChangeInputName] = useState("");
	const [inputTextValue, onChangeInputValue] = useState("");

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
				<TouchableOpacity onPress={() => {}}>
					<CheckBox
						iconType="food"
						title="Comida"
						message="(Gastos em restaurantes, deliverys, etc...)"
						selected={true}
					/>
				</TouchableOpacity>
				{/* <TouchableOpacity
					onPress={() => {
						setTypes;
					}}
				>
					<CheckBox
						iconType="food"
						message="Compras (Gastos em mercados, lojas online, etc...)"
						selected={types[1]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setTypes;
					}}
				>
					<CheckBox
						iconType="food"
						message="Carro (Combustível, manutenção, etc...)"
						selected={types[2]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setTypes;
					}}
				>
					<CheckBox
						iconType="food"
						message="Casa (Contas de energia, água, etc...)"
						selected={types[3]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setTypes;
					}}
				>
					<CheckBox
						iconType="food"
						message="Outros"
						selected={types[4]}
					/>
				</TouchableOpacity> */}
			</View>
		</View>
	);
};

export default Add;
