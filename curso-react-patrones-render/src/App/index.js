import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';

function App() {
  const [state, setState] = React.useState('Estado Compartido');

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          <TodoItem state={state}/>
        </TodoList>
      </TodoHeader>
    </React.Fragment>
  );
}

function TodoHeader({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({children}) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
