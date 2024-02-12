import { useState  } from "react";
export default function Input({ onAdd }){
   const [enteredValue, setEnteredValue] = useState('');
//   let count = 0;

   function handleChange(event) {
    setEnteredValue(event.target.value);
   }
   function handleClick(e) {
    e.preventDefault();
    if(enteredValue.trim() ===''){
        return;
    }
    onAdd(enteredValue);
    setEnteredValue('');
   }

    return(
        <form onSubmit={handleClick} >
            <input type="text"
            onChange={handleChange}
            value={enteredValue}
            placeholder='Create a todo'
            />
        </form>

    );
}