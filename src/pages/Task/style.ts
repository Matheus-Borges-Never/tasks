import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 46,
    fontWeight: '800',
    color: '#0054FF',
    textAlign: "center",
  },
  subTitle: {
      fontSize: 24,
      fontWeight: '500',
  },
  date: {
      fontSize: 20,
      fontWeight: '400',
      marginTop: 10,
  },  
  save: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputIcon: {
    marginRight: 10
  },
  button: {
    top: 10,
    width: '60%',
    backgroundColor: '#0054FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10, 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
  buttonNewTask: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    fontSize: 30,
    color: "#fff",
  }
  
});

export default styles;
