import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerTitle: "",
				headerLeft: () => <Text>Aquí irá el logo</Text>,
			}}
		>
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}
