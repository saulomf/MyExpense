import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import COLORS from "../../Shared/colors";

import Home from "../../Pages/Home";
import List from "../../Pages/List";
import Add from "../../Pages/Add";

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
			<Screen name="Home" component={Home} />
			<Screen name="List" component={List} />
			<Screen name="Add" component={Add} />
		</Navigator>
	);
};
export default Stack;
