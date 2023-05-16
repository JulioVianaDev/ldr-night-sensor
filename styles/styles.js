import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex' ,
    backgroundColor: '#f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  view1:{
    backgroundColor: '#ff6',
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  view2:{
    backgroundColor: '#5ff',
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  view3:{
    margin:10,
    marginBottom:40,
  }
});

export const textos = StyleSheet.create({
  Titulo:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  description:{
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
})