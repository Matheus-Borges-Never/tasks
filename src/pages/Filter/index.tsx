import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";

export default function Filter({ navigation }) {
  const [company, setCompany] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("TB_Tasks").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const prazo = doc.data().prazo;
        const hora = prazo.slice(-5);
        const data = prazo.slice(0, 10);

        list.push({ ...doc.data(), id: doc.id, hora, data });
      });
      setTasks(list);
    });

    return () => unsubscribe();
  }, []);

  function toggleCompletion(id, isCompleted) {
    database.collection("TB_Tasks").doc(id).update({
      isCompleted: !isCompleted,
    });
  }

  function deleteTask(id) {
    const deleteTasks = database.collection("TB_Tasks").doc(id).delete();
    setFilteredTasks(deleteTasks);
  }

  const filterTask = () => {
    const filteredTasks = tasks.filter((task) => task.empresa === company);

    // Atualizar o estado com as tarefas filtradas
    setFilteredTasks(filteredTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtro</Text>

      <Text>{"\n"}</Text>

      <Text style={styles.label}>Selecione uma empresa</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="briefcase" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Ex: Task Inc."
          onChangeText={setCompany}
          value={company}
        />
      </View>

      <Text>{"\n"}</Text>
      
      <View style={styles.save}>
        <TouchableOpacity style={styles.buttonNewTask} onPress={filterTask}>
          <Text style={styles.iconButton}>
            <Text style={styles.btnText}>Filtrar</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <Text>{"\n","\n"}</Text>

      {/* Renderizar as tarefas filtradas */}
      {filteredTasks.length > 0 && (
        <View>
          <Text style={styles.label}>Tarefas filtradas:</Text>
          {filteredTasks.map((task, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardBody}>
                <TouchableOpacity
                  style={[
                    styles.checkTask,
                    { backgroundColor: task.isCompleted ? "#43C46D" : "#fff" },
                  ]}
                  onPress={() => {
                    toggleCompletion(task.id, task.isCompleted);
                  }}
                >
                  {task.isCompleted && (
                    <FontAwesome name="check" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
                <View style={styles.cardRow}>
                  <Text style={styles.cardTitle}>
                    {task.descricao}
                  </Text>
                </View>
              </View>
              <View style={styles.cardEnd}>
                <Text style={styles.cardText}>
                  <FontAwesome name="calendar" size={16} color="#888" style={styles.inputIcon} />
                  <Text> {task.data}     </Text>
                    
                  <FontAwesome name="clock-o" size={16} color="#888" style={styles.inputIcon} />
                  <Text> {task.hora}     </Text>
                    
                  <TouchableOpacity style={styles.btnPrimary}>
                    <Text style={styles.btnText}>{task.empresa}</Text>
                  </TouchableOpacity>
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => {
                    deleteTask(task.id);
                  }}
                >
                  <FontAwesome name="trash" size={30} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
