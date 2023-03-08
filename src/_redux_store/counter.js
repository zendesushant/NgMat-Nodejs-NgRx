import { useDispatch, useSelector } from "react-redux";
import {counterActions} from './store'


export default function Counter(){
    let counter = useSelector((state)=>state.counter.counter)
    let dispatch = useDispatch();
    let onIncrement = ()=>{
      //dispatch({type:'inc'})
      dispatch(counterActions.increment())
    }
    let onDecrement = ()=>{
      //dispatch({type:'dec'})
      dispatch(counterActions.decrement())
    }

    return(
        <>
                <h1>Redux State Management Counter Example</h1>
                <p>Counter Value: {counter}</p>
              <button type='button' onClick={onIncrement}>Increment</button>
              <button type='button' onClick={onDecrement}>Decrement</button>
        </>
    )
}