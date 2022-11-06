import React,{useReducer,} from 'react';
import{Link} from 'react-router-dom'
    const initialState={
        counter:0
    }
    
    const reducer=(
        state=initialState,
        action:{
            type:string; payload?:any
        }
    )=>{
 switch (action.type) {
         case "increment":
           return { counter: state.counter + 1 };
           
         case "decrement":
          if(state.counter===0){
            return { counter: state.counter  };
          }else{
           return { counter: state.counter- 1 };
          }
         case "reset":
           return { counter: 0 };
           
         case "setValue":
          console.log(document.getElementById('put').value)
           return { counter: Number(document.getElementById("put").value) };
         default:
           return {
             counter: new Error("Wrong") ? <div>{new Error("Wrong").toString()}</div> : 0,
           };
           throw new Error("Wrong");
       }
     
    }
function MyReductor(){

    const [state,dispatch]=useReducer(reducer,initialState)
const Increment=()=>{
  dispatch({type:'increment'})
}
const Decrement=()=>{
  dispatch({type:'decrement'})
}
const Reset = () => {
  dispatch({ type: "reset" });
};


// const handleChange=(e)=>{
 
//       setVal(e.target.value)
//       console.log(val)
// }

const SetValue=()=>{
   dispatch({ type: "setValue"});
}
const valv=()=>{
   dispatch({ type: "valv"});
}
    return (

      
      <div style={{backgroundColor:'grey', display:'flex', flexDirection:'column'}}>
           <div>
              <Link to ='/'>MyState</Link>
          </div>
        Count:{state.counter}
        <div style={{display:'flex', flexDirection:'row'}}>
        <button type="" onClick={Increment}>
          Increase
        </button>
        <button type="" onClick={Decrement}>
          Decrease
        </button>
        <button type="" onClick={Reset}>
          Reset
        </button>
        <input id='put' /> 
        <button type="" onClick={SetValue}>setValue</button>
        <button type="" onClick={valv}>
          valv
        </button>
        </div>
      </div>
    
    );

}
export default MyReductor;