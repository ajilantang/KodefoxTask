//@flow
import React from 'react';
import type {Todo, Event} from '../types/State';
type TodoForm = {
  addItem: () => void,
  onTextChange: (text: string) => void,
  inputValue: string,
};
export default function todoForm(props: TodoForm) {
  let {addItem, onTextChange, inputValue} = props;
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event: Event) => {
          onTextChange(event.target.value);
        }}
      />
      <button onClick={() => addItem()}>save</button>
    </div>
  );
}
