import './App.css';
import CreditComponent from './component/CreditComponent';
import Todo from './component/Todo';
function App() {
  return (
    <div className="App">
      {/* <TodoComponent></TodoComponent> */}
      <Todo></Todo>
      <CreditComponent/>
    </div>
  );
}

export default App;
