import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import database from "../../../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function AuthenticationCreate({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função para criar uma nova conta de usuário
  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Task");
      })
      .catch((error) => {
        setErrorMessage("Dados Indefinidos!!");
      });
  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
}
