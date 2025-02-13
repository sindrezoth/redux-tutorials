import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    const trimmedText = text.trim();
    console.log(trimmedText)
    if((e.type === 'click' || e.key === 'Enter') && trimmedText.length > 0) {
      dispatch({type: 'todos/todoAdded', payload: trimmedText});
      setText('');
    }
  }
  return (
    <>
      <div></div>
      <input 
        className="todo-input" 
        placeholder="What needs to be done?"
        type="text"
        value={text}
        autoFocus={true}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleKeyDown}> ADD NEW </button>
    </>
  );
}

export default TodoInput;
