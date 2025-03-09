import React from "react";
import { Todo } from "./Todo";
import { Button, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

interface TodoItemProps {
  task: Todo;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  toggleCompleted,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
        <Checkbox
          value={task.completed}
          onValueChange={() => toggleCompleted(task.id)}
        />
        <Text
          style={{
            color: "#111",
            textDecorationLine: task.completed ? "line-through" : "none",
             marginLeft: 10,
          }}
        >
          {task.text}
        </Text>
      </View>

      <Button title="X" onPress={() => deleteTask(task.id)} />
    </View>
  );
};

export default TodoItem;
