import React, { useState } from "react";
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
  ScrollView,
} from "react-native";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [tasks, setTasks] = useState<Todo[]>([
    {
      id: 1,
      text: "Task 1",
      completed: true,
    },
    {
      id: 2,
      text: "Task 2",
      completed: false,
    },
  ]);
  const [text, setText] = useState<Todo["text"]>("");

  const addTask = () => {
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id: Todo["id"]) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id: Todo["id"]) => {
    setTasks((prev) =>
      prev.map((item) =>
        item?.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleTextChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setText(e.nativeEvent.text);
  };
  return (
      <ScrollView style={{ flexDirection: "column",  paddingHorizontal: 20}} contentContainerStyle={{paddingBottom: 20}}>
      {tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
          />
        );
      })}
          <TextInput value={text} onChange={handleTextChange} style={{     borderStyle: "solid",
            borderColor: "#111",
            borderWidth: 0.5, marginBottom: 10}} />
          <Button title="Add" onPress={addTask} />
    </ScrollView>
  );
};

export default Todo;
