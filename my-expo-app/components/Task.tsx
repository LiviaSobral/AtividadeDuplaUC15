import { View, Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';


export type Task = {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface TaskProps {
    task: Task
}


export default function TaskContainer({task}: TaskProps) {


    return (
        <View className="w-[100%]   p-7 gap-2 text-black" >
            <View className="gap-4 justify-between  flex-row" >

            <Text className="font-bold justify-center items-center" > < Ionicons name="person-circle-outline" size={25} ></Ionicons> ID DE USUARIO: {task.userId}</Text>
            <Text className="font-semibold bg-red-400 p-1 gap-10 flex-row rounded-md color-white"> 
                <Ionicons name="alert-circle-outline" size={17} ></Ionicons>
                {!task.completed ? "PENDENTE" : "COMPLETO" }</Text>
            </View>
            
            <Text>{task.title}</Text>

            <Text className="text-sm font-semibold text-black/50 mt-5"><Ionicons name= "document-text-outline" size={18}/>  ID DA TASK: {task.id}</Text>
          
        </View>
    )




}