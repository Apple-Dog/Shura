import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import GenerateRandomBetween from "../utility/GenerateRandomBetween";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(this: any, { userNumber }: any): JSX.Element  {
  
  const initialGuess = GenerateRandomBetween(minBoundary, maxBoundary, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: any) {

      if (
            ( direction === "lower" && currentGuess < userNumber ) || 
            ( direction === "greater" && currentGuess > userNumber ) 
         ) {
            Alert.alert("Don't Lie!", "You Know that this is wrong...",[{text: "Sorry!", style: "cancel"}]);
            return;
      };

      if(direction === "lower") {
        maxBoundary = currentGuess;
      }
      else { 
        minBoundary = currentGuess + 1;
      };

      console.log(minBoundary,maxBoundary);

      const newRndNumber = GenerateRandomBetween(minBoundary, maxBoundary, currentGuess);

      setCurrentGuess(newRndNumber);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
        </View>
      </View>
      {/* <View>Log Rounds</View> */}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});