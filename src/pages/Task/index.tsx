import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import database from "../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

export default function Task({ navigation }) {
  const [task, setTask] = useState([]);

  function deleteTask(id) {
    database.collection("TB_Tasks").doc(id).delete();
  }

  function toggleCompletion(id, isCompleted) {
    database.collection("TB_Tasks").doc(id).update({
      isCompleted: !isCompleted,
    });
    schedulePushNotificationCheck();
  }

  async function schedulePushNotificationCheck() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Tarefa Concluida",
        body: "Parabéns",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  }

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Você tem Task com o prazo terminando",
        body: "Corre porque ainda dá",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  }

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    database.collection("TB_Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        const prazo = doc.data().prazo;
        const hora = prazo.slice(-5);
        const data = prazo.slice(0, 10);

        // Calcular a diferença entre a hora atual e a hora da tarefa
        const [taskHour, taskMinute] = hora.split(":").map(Number);
        const hourDiff = taskHour - currentHour;
        const minuteDiff = taskMinute - currentMinute;

        if (hourDiff < 2 && (hourDiff !== 1 || minuteDiff < 0)) {
            schedulePushNotification();
        }

        list.push({ ...doc.data(), id: doc.id, hora, data });
      });
      setTask(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>

      <Text>{"\n"}</Text>

      <Text style={styles.subTitle}>Tarefas de hoje</Text>

      <Text style={styles.date}>
        {new Date()
          .toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
          .replace(/^\w/, (c) => c.toUpperCase())}
      </Text>

      <Text>{"\n"}</Text>

      <View style={styles.save}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Filtrar")}
        >
          <FontAwesome
            name="filter"
            size={16}
            color="#FFF"
            style={styles.inputIcon}
          />
          <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <Text>{"\n"}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <TouchableOpacity
                  style={[
                    styles.checkTask,
                    { backgroundColor: item.isCompleted ? "#43C46D" : "#fff" },
                  ]}
                  onPress={() => {
                    toggleCompletion(item.id, item.isCompleted);
                  }}
                >
                  {item.isCompleted && (
                    <FontAwesome name="check" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
                <View style={styles.cardRow}>
                  <Text style={styles.cardTitle}>{item.descricao}</Text>
                </View>
              </View>
              <View style={styles.cardEnd}>
                <Text style={styles.cardText}>
                  <FontAwesome
                    name="calendar"
                    size={16}
                    color="#888"
                    style={styles.inputIcon}
                  />
                  <Text> {item.data} </Text>

                  <FontAwesome
                    name="clock-o"
                    size={16}
                    color="#888"
                    style={styles.inputIcon}
                  />
                  <Text> {item.hora} </Text>

                  <TouchableOpacity style={styles.btnPrimary}>
                    <Text style={styles.btnText}>{item.empresa}</Text>
                  </TouchableOpacity>
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => {
                    deleteTask(item.id);
                  }}
                >
                  <FontAwesome name="trash" size={30} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
