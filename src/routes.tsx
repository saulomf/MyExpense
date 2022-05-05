import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from ".";
import type { RoutesParamsList } from "./Shared/types";

const Stack = createNativeStackNavigator<RoutesParamsList>();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Início" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
