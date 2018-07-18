//@flow
import React from 'react';
type TodoSearch = {
  onSearch: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
};
export default function searchTodo(props: TodoSearch) {
  return (
    <input
      onChange={(event: SyntheticKeyboardEvent<HTMLInputElement>) =>
        props.onSearch(event)
      }
    />
  );
}
