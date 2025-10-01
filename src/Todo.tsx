import { TodoType } from "./types/Todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) =>
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
  };
