import { View, Text, TouchableOpacity, Image } from "react-native";
import Checkbox from "expo-checkbox";
import trash from "../../assets/trash.png";

import { styles } from "./styles";

type Props = {
  data: {
    id: string;
    title: string;
    done: boolean;
  };
  removeTask: (id: string) => void;
  finishTask: (id: string) => void;
};

export function Task({ data, removeTask, finishTask }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={data.done}
        color="#5E60CE"
        onValueChange={() => finishTask(data.id)}
      />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            data.done && {
              textDecorationLine: "line-through",
              color: "#808080",
            },
          ]}
        >
          {data.title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => removeTask(data.id)}>
        <Image source={trash} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
