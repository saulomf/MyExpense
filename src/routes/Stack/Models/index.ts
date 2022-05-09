import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
	Home: undefined;
	List: undefined;
	Add: { id: string };
	Details: { id: string };
};
export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
