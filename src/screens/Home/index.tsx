import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

import { Task } from "../../components/Task";

import logo from "../../assets/logo.png";
import plus from "../../assets/plus.png";

type TaskListProp = {
  id: string;
  title: string;
  done: boolean;
};

export default function Home() {
  const [newTask, setNewTask] = React.useState("");
  const [taskList, setTaskList] = React.useState<TaskListProp[]>([]);
  const taskListFinished = taskList.filter((item) => item.done).length;

  const removeTask = (id: string) => {
    setTaskList((oldState) => oldState.filter((item) => item.id !== id));
  };

  const addTask = () => {
    if (!newTask) return;

    const data = {
      id: new Date().getTime().toString(),
      title: newTask,
      done: false,
    };

    setTaskList((oldState) => [...oldState, data]);
    setNewTask("");
  };

  const finishTask = (id: string) => {
    const newTaskList = taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setTaskList(newTaskList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage} />
      </View>

      <View style={styles.formNewTask}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Image source={plus} style={styles.plusImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <View style={styles.created}>
            <Text style={styles.createdTask}>Criadas</Text>

            <Text style={styles.createdCounter}>{taskList.length}</Text>
          </View>

          <View style={styles.finished}>
            <Text style={styles.finishedTask}>Concluídas</Text>

            <Text style={styles.finishedCounter}>{taskListFinished}</Text>
          </View>
        </View>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task data={item} removeTask={removeTask} finishTask={finishTask} />
          )}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image source={require("../../assets/clipboard.png")} />
              <Text style={styles.emptyListTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
