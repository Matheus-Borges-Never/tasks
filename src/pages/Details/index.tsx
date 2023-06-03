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

    
    // <View style={styles.container}>
    //   <FlatList
    //     showsVerticalScrollIndicator={false}
    //     data={task}
    //     renderItem={({ item }) => {
    //       return (
    //         <View style={styles.Tasks}>
    //           <TouchableOpacity
    //             style={[
    //               styles.checkTask,
    //               { backgroundColor: item.isCompleted ? "#43C46D" : "#fff" },
    //             ]}
    //             onPress={() => {
    //               toggleCompletion(item.id, item.isCompleted);
    //             }}
    //           >
    //             {item.isCompleted && (
    //               <FontAwesome name="check" size={16} color="#fff" />
    //             )}
    //           </TouchableOpacity>
    //           <View style={styles.taskDetails}>
    //             <Text
    //               style={styles.DescriptionTask}
    //               onPress={() =>
    //                 navigation.navigate("Details", {
    //                   id: item.id,
    //                   descricao: item.descricao,
    //                 })
    //               }
    //             >
    //               {item.descricao}
    //             </Text> 
    //             <Text style={styles.dateText}>{item.data}</Text>
    //             <Text style={styles.timeText}>{item.hora}</Text>
    //             <Text style={styles.companyText}>{item.empresa}</Text>
    //           </View>               
    //           <TouchableOpacity
    //             style={styles.deleteTask}
    //             onPress={() => {
    //               deleteTask(item.id);
    //             }}
    //           >
    //             <FontAwesome name="trash" size={23} color="red" />
    //           </TouchableOpacity>
    //         </View>
    //       );
    //     }}
    //   />
    //   <TouchableOpacity
    //     style={styles.buttonNewTask}
    //     onPress={() => navigation.navigate("New Task")}
    //   >
    //     <Text style={styles.iconButton}>+</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
