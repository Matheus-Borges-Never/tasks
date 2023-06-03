import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, PlatForm } from "react-native";
import database from "../../config/firebaseconfig.ts";
import styles from "./style.ts";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [company, setCompany] = useState("");
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [deadlineTime, setDeadlineTime] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate || deadlineDate;
      setDeadlineDate(currentDate);
  
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };
  
  const confirmIOSDate = () => {
    setDateOFBirth(deadlineDate.toLocaleDateString("pt-BR"));
    toggleDatePicker();
  };

  const handleDeadlineTimeChange = (text) => {
    if (text.length <= 5) {
      if (text.length > 3) {
        // Verificar limites de caracteres para cada posição
        const firstChar = text[0];
        const secondChar = text[1];
        const thirdChar = text[2];
        const fourthChar = text[3];
  
        let formattedText = "";
  
        if (parseInt(firstChar) <= 2) {
          formattedText += firstChar;
        } else {
          formattedText += "2";
        }
  
        if (parseInt(firstChar) === 2) {
          if (parseInt(secondChar) <= 3) {
            formattedText += secondChar;
          } else {
            formattedText += "3";
          }
        } else {
          if (parseInt(secondChar) <= 9) {
            formattedText += secondChar;
          } else {
            formattedText += "9";
          }
        }
  
        formattedText += ":";
  
        if (parseInt(thirdChar) <= 5) {
          formattedText += thirdChar;
        } else {
          formattedText += "5";
        }
  
        if (parseInt(thirdChar) === 5) {
          if (parseInt(fourthChar) <= 9) {
            formattedText += fourthChar;
          } else {
            formattedText += "9";
          }
        } else {
          if (parseInt(fourthChar) <= 9) {
            formattedText += fourthChar;
          } else {
            formattedText += "9";
          }
        }
  
        setDeadlineTime(formattedText);
      } else {
        setDeadlineTime(text);
      }
    }
  };
  
  function addTask() {
    database.collection("TB_Tasks").add({
      descricao: description,
      prazo: `${deadlineDate.toLocaleDateString("pt-BR")} ${deadlineTime}`,
      empresa: company,
      status: false,
    });
    navigation.navigate("Task");
  }

  const filterTask = async () => {
    try {
      const snapshot = await firebase
        .firestore()
        .collection("TB_Tasks")
        .where("empresa", "==", company)
        .get();
  
      // O snapshot contém os documentos correspondentes à empresa filtrada
      // Faça o tratamento dos dados conforme necessário
      const filteredTasks = snapshot.docs.map((doc) => doc.data());
  
      console.log(filteredTasks);
    } catch (error) {
      console.error("Erro ao filtrar as tarefas:", error);
    }
  
    navigation.navigate('Task');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task
      </Text>

      <Text>{'\n'}</Text>

      <Text style={styles.description}>
        Crie uma tarefa!
      </Text> 

      <Text style={styles.description2}>
        Descreva brevemente a sua tarefa e adicione um prazo. {'\n'}
      </Text>


      <Text style={styles.label}>Dê um título para sua tarefa</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="clipboard" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Descrição Tarefas"
          onChangeText={setDescription}
          value={description}
          placeholderTextColor="#888"
        />
      </View>

      <Text>{'\n'}</Text>
      
      <Text style={styles.label}>Horário Limite</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="clock-o" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          keyboardType="numeric"
          onChangeText={handleDeadlineTimeChange}
          value={deadlineTime}
        />
      </View>

      <Text>{'\n'}</Text>

      <Text style={styles.label}>Data limite</Text>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={deadlineDate}
          onChange={onChange}
          style={styles.datePicker}
        />      
      )}

      {showPicker && Platform.OS === "ios" && (
        <View style={styles.ios}>
          <TouchableOpacity style={styles.buttonCancelar} onPress={toggleDatePicker}>
            <Text style={styles.buttonTextCancelar}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={confirmIOSDate}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}

      {!showPicker && (
      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={20} color="#888" style={styles.inputIcon} />
        <Pressable onPress={toggleDatePicker} style={styles.input}>
          <TextInput   
            style={styles.input}         
            placeholder="DD/MM/AAAA"
            onChangeText={setDeadlineDate}
            value={deadlineDate.toLocaleDateString("pt-BR")}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>    
      </View>
      )}

      <Text>{'\n'}</Text>

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

      <View style={styles.save}>
        <TouchableOpacity
          style={styles.buttonNewTask}
          onPress={addTask}
        >
          <Text style={styles.iconButton}>
            <FontAwesome name="save" size={23} color="#FFF" style={styles.saveIcon} />
            <Text style={styles.saveText}>  Salvar Tarefa</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}