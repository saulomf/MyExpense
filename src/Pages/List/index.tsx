import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { propsNavigationStack } from "../../routes/Stack/Models";
import Card from "../../Components/Card";
import { ListContext } from "../../Context/list";

type ListProps = NativeStackScreenProps<propsNavigationStack, "List">;
const List = ({ navigation }: ListProps) => {
	const listContext = useContext(ListContext);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Todas as despesas</Text>
			<View style={styles.line} />
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Add", { id: "" })}
				>
					<Text style={styles.textButton}>Adicionar despesa</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={listContext.listData}
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

export default List;
