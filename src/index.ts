import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeParamsList } from "./Shared/types";

type HomeProps = NativeStackScreenProps<HomeParamsList, "Home">;
const Home = ({ navigation }: HomeProps) => {
	return;
};

export default Home;
