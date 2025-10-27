import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import TaskContainer, { Task } from './Task';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function List() {


    const [active, setActive] = useState<boolean>(true)
    const [tasks, setTasks] = useState<Task[]>([]);


    const isNewTask = () => {
        return Alert.alert("Nova Task")
    }


    async function findTasksByJsonPlaceHolder() {
        try {
            console.log("PLaceHolder Incrivel")
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?completed=false')
            const res: Task[] = await response.json()

            setTasks(

                prev => {
                    // if (prev.length < res.length) { isNewTask() }
                    // return res
                    if (prev.length > 1) {
                        const ids = prev.map((task) => task.id)
                        const idsNovos = res.map((task) => task.id)

                        idsNovos.forEach((id) => { if (!ids.includes(id)) isNewTask() })


                    }

                    return res

                }
            )

        } catch (e) {
            console.log("Erro ao carregar informações ", e)
        }
    }


    useEffect(() => {
        findTasksByJsonPlaceHolder()
    }, [])



    useEffect(() => {
        // findTasksByJsonPlaceHolder() //carrega imediatamente (sem ter q esperar 10 segundos) mas so 1 vez quando iniciar.

        const interval = setInterval(async () => { { active ? findTasksByJsonPlaceHolder() : null } }, 10000)

        return () => clearInterval(interval)
    })

    return (

        <View className='flex-col justify-center   ' >

            <View className='m-10 mt-20'>
                <Text className='font-semibold text-3xl'>TASK MANAGER</Text>
                <View className='mt-6'>
                    <TouchableOpacity
                        onPress={() => setActive(prev => !prev)}
                        className=' justify-center items-center rounded-md flex-row bg-blue-400 '>
                        <Text className='text-white font-bold p-2 '>
                            {active ? "Desativar update " : "Ativar update "}
                        </Text>
                        <Ionicons
                            name="sync"
                            size={23}
                            color="white"
                        />

                    </TouchableOpacity>
                </View>
            </View>


            <FlatList data={tasks}
                keyExtractor={(task) => task.id.toString()}
                renderItem={({ item, index }) => (
                    <TaskContainer task={item} />
                )}
       
           


            >

            </FlatList>
        </View>
    );
}

