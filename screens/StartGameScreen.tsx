import PrimaryButton from "../components/ui/PrimaryButton";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";


export default function StartGameScreen({onPickNumber}: any): JSX.Element {
  
  const [enteredNumber, setEnteredNumber] = useState("");
  
  const numberInputHandler = (enteredText : any) =>{
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredNumber);

      if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
        Alert.alert("Invalid Number", "Number has to be a number betweeen 0 & 99", [{text: "Okay", style: "destructive", onPress: resetInputHandler}]);
        
        return;
      };

      onPickNumber(chosenNumber);
  };
  
  
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none"
        autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    opacity:0.8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.black900,
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "400",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },

});