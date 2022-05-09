import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import COLORS from "../../Shared/colors";

import Home from "../../Pages/Home";
import List from "../../Pages/List";
import Add from "../../Pages/Add";
import Details from "../../Pages/Details";

const { Navigator, Screen } =
	createNativeStackNavigator<propsNavigationStack>();

const Stack = () => {
	return (
		<Navigator
			initialRouteName="Home"
			screenOptions={{
				contentStyle: {
					backgroundColor: COLORS.GREEN,
				},
			}}
		>
			<Screen
				name="Home"
				options={{ title: "Início" }}
				component={Home}
			/>
			<Screen name="List" options={{ title: "Lista" }} component={List} />
			<Screen
				name="Add"
				options={{ title: "Adicionar" }}
				component={Add}
			/>
			<Screen
				name="Details"
				options={{ title: "Detalhes" }}
				component={Details}
			/>
		</Navigator>
	);
};
export default Stack;
