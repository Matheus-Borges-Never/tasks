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
    fontSize: 36,
    fontWeight: '800',
    color: '#000',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#007bff',
    borderLeftWidth: 5,
  },
  cardBody: {
    alignItems: 'flex-start',
    marginLeft: 40,
  },  
  cardEnd: {
    top: 20,
    alignItems: 'flex-start',
    borderTopWidth: 0.5,
    marginBottom: -16,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    marginLeft: 15,
    color: '#888'
  },
  cardText: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 40,
  },
  btnPrimary: {
    backgroundColor: '#007bff',
    width: 90,
    height: 20,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Tasks: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteTask: {
    bottom: 70,
    alignItems: 'flex-end',
  },
  checkTask: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    right: 30,
    borderRadius: 4
  },
  DescriptionTask: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 12,
    color: "#888",
  },
  timeText: {
    fontSize: 12,
    color: "#888",
  },
  companyText: {
    fontSize: 12,
    color: "#888",
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
  buttonNewTask: {    
    height: 50,
    width: 250,
    top: 20,
    backgroundColor: '#0054FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },  
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  save: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonFilterFinish: {    
    height: 30,
    width: 80,
    top: 20,
    backgroundColor: '#006064',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxFilterNot: {    
    marginLeft: 10
  }, 
  buttonFilterNot: {    
    height: 30,
    width: 80,
    top: 20,
    backgroundColor: '#FFF',
    borderColor: '#006064',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextNot: {
    color: '#006064',
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default styles;
