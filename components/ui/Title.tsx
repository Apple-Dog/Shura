import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function Title({children}: any): JSX.Element {
  return (
    <Text style={styles.title}>{children}</Text>
  );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.white100,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.white100,
        borderRadius: 10,
        padding : 12,
      },
})