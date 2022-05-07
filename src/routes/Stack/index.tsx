import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Pages/Home";
import { propsNavigationStack } from "./Models";
import COLORS from "../../Shared/colors";

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
		</Navigator>
	);
};
export default Stack;
