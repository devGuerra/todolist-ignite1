import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        borderRadius: 8,
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    textContainer: {
        paddingHorizontal: 8,
        flex: 1,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 24,
    },
    image: {
        width: 32,
        height: 32,
        alignItems: 'center',
        marginRight: 8
    },
    text: {
        fontSize: 14,
        color: '#F2F2F2'
    }
})