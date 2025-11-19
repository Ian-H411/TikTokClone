import { Tabs } from "expo-router"
import { Entypo, FontAwesome5, Feather } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => {
                        return <Entypo name="home" size={24} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="friends"
                options={{
                    title: 'Friends',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome5 name="user-friends" size={24} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color }) => {
                        return <Entypo name="mail" size={24} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="newPost"
                options={{
                    title: 'New Post',
                    tabBarIcon: ({ color }) => {
                        return <Entypo name="new-message" size={24} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => {
                        return <Feather name="settings" size={24} color={color} />
                    }
                }}
            />
        </Tabs>
    )
}
