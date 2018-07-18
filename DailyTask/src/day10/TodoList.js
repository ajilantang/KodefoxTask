//@flow
import React from 'react';
type Todo = {
  isDone: boolean,
  content: string,
  id: number,
};
type Props = {
  item: Todo,
  onToggleDone: (id: number) => void,
  isSelected: boolean,
};
const selectedStyle = {
  backgroundColor: '#090a',
};

export default function todoList(props: Props) {
  let {onToggleDone, item, isSelected} = props;
  let {id, content, isDone} = item;
  let style = isSelected ? selectedStyle : null;
  return (
    <li
      style={style}
      onClick={() => {
        onToggleDone(id);
      }}
    >
      {isDone ? content : <s key={id}>{content}</s>}
    </li>
  );
}
