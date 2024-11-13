import { Stack } from "expo-router";

const RootLayer = () => {
    return (
        <Stack>
        <Stack.Screen name="index"
        options={{
            headerTitle: "The Last Mile",
            headerStyle: {
                backgroundColor: "gold",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}/>
        <Stack.Screen name="Faq"
        options={{
            headerTitle: "Frequently Asked Questions",
            headerStyle: {
                backgroundColor: "gold",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 40,
            },
        }}/>
        <Stack.Screen name="Stories"
        options={{
            headerTitle: "TLM Success Stories",
            headerStyle: {
                backgroundColor: "gold",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }} />
        <Stack.Screen name="About"
        options={{
            headerTitle: "About The Last Mile",
            headerStyle: {
                backgroundColor: "gold",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },

        }} />
        <Stack.Screen name="Apply"
        options={{
            headerTitle: "Enrollment Application",
            headerStyle: {
                backgroundColor: "gold",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }} />
        </Stack>
    );
};

export default RootLayer;
