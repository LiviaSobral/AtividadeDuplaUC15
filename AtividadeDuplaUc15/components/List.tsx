import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function List() {

  const [active, setActive] = useState<boolean>(true)

  async function funcao(){
    try{
        console.log("PLaceHolder Incrivel")
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?completed=false')
        const info = await response.json()
        console.log(info)
      }catch(e){
        console.log("Erro ao carregar informações ", e)
      }
  } 
  useEffect(() => {
    funcao() //carrega imediatamente (sem ter q esperar 10 segundos) mas so 1 vez quando iniciar.

    const interval = setInterval( async () => {
      funcao()
    }, 10000)
    
    return () => clearInterval(interval);
    },[active])

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});