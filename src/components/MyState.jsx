import React,{useState} from 'react';
import{Link} from 'react-router-dom'
function MyState(){
    const [counter,setCounter]=useState(0);
    const Increment=()=>{
        setCounter(counter + 1);
    }
    const Decrement = () => {
        if(counter===0){
            return null;
        }else{
            setCounter(counter - 1);
        }
        
    };
    const Reset = () => {
        setCounter((counter)=>counter=0);
    };
    const [val,setVal]=useState('');
    const handleChange=(e)=>{
        setVal(e.target.value)
    }
    const SetValue = () => {
        console.log(val);
        setCounter((counter) => counter = +val);
    };
    return (
      <div>
          <div>
              <Link to='reductor'>reductor</Link>
          </div>
        Count:{counter}
        <button type="" onClick={Increment}>
          Increase
        </button>
        <button type="" onClick={Decrement}>
          Decrease
        </button>
        <button type="" onClick={Reset}>
          Reset
        </button>
        <input id="put" onChange={handleChange}/>
        <button type="" onClick={SetValue}>
          SetValue
        </button>
      </div>
    );
}
export default MyState;