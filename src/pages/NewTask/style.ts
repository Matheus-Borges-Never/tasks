import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    bottom: 60,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    fontSize: 46,
    fontWeight: '800',
    color: '#0054FF',
    textAlign: "center",
  },
  description: {
      fontSize: 20,
      fontWeight: '500',
  },
  description2: {
      fontSize: 16,
      fontWeight: '400',
  },
  label: {
    color: "#000",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  datePicker: {
    height: 120,
    marginTop: -10
  },
  ios: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
      top: 20,
      width: '30%',
      backgroundColor: '#0054FF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
  },
  buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  buttonCancelar: {
      top: 20,
      width: '30%',
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
  },
  buttonTextCancelar: {
      color: '#0054FF',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  save: {    
    justifyContent: "center",
    alignItems: "center",
  },
  saveIcon: {
    marginRight: 10,
  },
  saveText: {
    marginLeft: 10,
  },
  
  buttonNewTask: {    
    height: 50,
    width: 150,
    top: 20,
    backgroundColor: '#0054FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
