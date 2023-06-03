import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import database from "../../../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function AuthenticationLogin({ navigation }) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função para fazer o login do usuário
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Task");
      })
      .catch((error) => {
        setErrorMessage("Email ou senha incorretos!!");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task
      </Text>
      <Text style={styles.description}>
        Olá, que bom te ver de novo.{'\n'}
        Vamos começar?
      </Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("AuthenticationCreate")}>
        Criar conta
      </Text>
    </View>
  );
}
