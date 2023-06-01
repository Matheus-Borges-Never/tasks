import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [deadlineDateEdit, setDeadlineDateEdit] = useState("");
  const [deadlineTimeEdit, setDeadlineTimeEdit] = useState("");
  const [companyEdit, setCompanyEdit] = useState("");

  const idTask = route.params.id;

  function editTask() {
    const updatedTask = {
      descricao: descriptionEdit,
      prazo: `${deadlineDateEdit} ${deadlineTimeEdit}`,
      empresa: companyEdit,
    };

    database.collection("TB_Tasks").doc(idTask).update(updatedTask);
    navigation.navigate("Task");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <Text style={styles.label}>Deadline Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={setDeadlineDateEdit}
        value={deadlineDateEdit}
      />
      <Text style={styles.label}>Deadline Time</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        onChangeText={setDeadlineTimeEdit}
        value={deadlineTimeEdit}
      />
      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Acme Inc."
        onChangeText={setCompanyEdit}
        value={companyEdit}
      />
      <TouchableOpacity style={styles.buttonNewTask} onPress={editTask}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
