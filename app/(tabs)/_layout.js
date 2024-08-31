import { Tabs } from "expo-router";
import {
	HomeIcon,
	CalendarIcon,
	UsersIcon,
	ServicesIcon,
	UserIcon,
} from "../../components/Icons";

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="customers"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <UsersIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="services"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <ServicesIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <UserIcon color={color} />,
				}}
			/>
		</Tabs>
	);
}
