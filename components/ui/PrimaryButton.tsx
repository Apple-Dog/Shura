import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }: any): JSX.Element {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.buttonEffectIOS] : styles.buttonInnerContainer} onPress={onPress}
        android_ripple={styles.buttonEffectAndroid}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 14,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white100,
    textAlign: "center",
  },
  buttonEffectAndroid: {
    color: Colors.primary600,
  },
  buttonEffectIOS: {
    opacity : Platform.OS === 'ios' ? 0.75 : 1,
  },

});