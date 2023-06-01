import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [company, setCompany] = useState("");

  function addTask() {
    database.collection("TB_Tasks").add({
      descricao: description,
      prazo: `${deadlineDate} ${deadlineTime}`,
      empresa: company,
      status: false,
    });
    navigation.navigate("Task");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Deadline Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={setDeadlineDate}
        value={deadlineDate}
      />
      <Text style={styles.label}>Deadline Time</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        onChangeText={setDeadlineTime}
        value={deadlineTime}
      />
      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Acme Inc."
        onChangeText={setCompany}
        value={company}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={addTask}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
