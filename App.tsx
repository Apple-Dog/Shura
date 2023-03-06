import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import LinearGradient from "react-native-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";



export default function App(): JSX.Element {

  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber: any) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  };

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover"
        style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
