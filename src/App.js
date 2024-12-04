import './App.css';
import { TodoProvider } from './contexts/TodoContext';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoWrapper />
      </TodoProvider>
    </div>
  );
}

export default App;
