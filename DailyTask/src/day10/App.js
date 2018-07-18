//@flow

import React, {Component} from 'react';
import type {Todo} from '../types/State';
import TodoForm from './TodoForm';
import SearchTodo from './SearchTodo';
import TodoList from './TodoList';
type Props = {};
export type State = {
  todoItems: Array<Todo>,
  selectedIndex: number,
  searchValue: string,
  inputValue: string,
};
type EventKey = {
  key: string,
};
export class App extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      selectedIndex: 0,
      searchValue: '',
      inputValue: '',
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', (event: EventKey) =>
      this._onKeyBoardKey(event),
    );
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', (event: EventKey) =>
      this._onKeyBoardKey(event),
    );
  }
  _onKeyBoardKey(event: EventKey) {
    let {selectedIndex, todoItems} = this.state;
    let index = selectedIndex;
    let maxIndex = todoItems.length - 1;
    let newIndex = index;
    if (event.key === 'ArrowUp') {
      newIndex = Math.max(0, index - 1);
      this.setState({
        selectedIndex: newIndex,
      });
    } else if (event.key === 'ArrowDown') {
      newIndex = Math.min(maxIndex, index + 1);
      this.setState({
        selectedIndex: newIndex,
      });
    } else if (event.key === ' ' && document.activeElement === document.body) {
      let selectedIndex = todoItems[index];
      this._onToggleDone(selectedIndex.id);
    } else if (
      event.key === 'Enter' &&
      document.activeElement !== document.body
    ) {
      this._addItem();
    }
  }
  _onToggleDone = (id: number) => {
    let todoList = this.state.todoItems.map(
      (item) => (item.id === id ? {...item, isDone: !item.isDone} : item),
    );
    this.setState({todoItems: todoList});
  };
  _onTextChange = (text: string) => {
    this.setState({inputValue: text});
  };
  _addItem = () => {
    let {inputValue, todoItems} = this.state;
    if (inputValue.trim() !== '') {
      let newItem = {
        id: todoItems.length,
        content: inputValue,
        isDone: false,
      };
      this.setState({
        todoItems: [...todoItems, newItem],
        inputValue: '',
      });
    }
  };

  _onSearchChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: event.currentTarget.value,
    });
  };
  render() {
    let {todoItems, inputValue, searchValue, selectedIndex} = this.state;
    let todoOnSearch;
    if (searchValue === '') {
      todoOnSearch = todoItems;
    } else {
      todoOnSearch = todoItems.filter((todo) =>
        todo.content.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    let todoList = todoOnSearch.map((item, index) => {
      let {id, content, isDone} = item;
      return (
        <TodoList
          key={id}
          onToggleDone={(id) => this._onToggleDone(id)}
          item={item}
          isSelected={index === selectedIndex}
        />
      );
    });
    let result = (
      <div>
        <SearchTodo
          onSearch={(event: SyntheticKeyboardEvent<HTMLInputElement>) =>
            this._onSearchChange(event)
          }
        />
        <ul>{todoList}</ul>
        <TodoForm
          onTextChange={(text: string) => this._onTextChange(text)}
          addItem={() => this._addItem()}
          inputValue={inputValue}
        />
      </div>
    );
    return result;
  }
}

export default App;
