import { Tabs } from "expo-router"

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name="friends"
                options={{
                    title: 'Friends',
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                }}
            />
            <Tabs.Screen
                name="newPost"
                options={{
                    title: 'New Post',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                }}
            />
        </Tabs>
    )
}
