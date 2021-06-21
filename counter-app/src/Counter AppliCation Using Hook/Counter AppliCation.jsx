import React, {useState} from 'react'
import '../App.css'

function Counter_AppliCation() {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [status1,setStatus] = useState();

const status = () =>{

if(count < 0 || count1 < 0){
   setStatus("Negative Value...!")
}

else {
    setStatus("Positive Value...!")
 }
 
}


   const ON = () => {
    setCount(count1)
    }

   const Increament = () => {
    setCount(count+1)
    }

   const Decrement = () => {
    setCount(count-1)
    }

    const OFF = () => {
    setCount("")
    setStatus("")
    }

        return(
            <div>
                <div className="main">
              <div className="headdive">
                <h1 className="head">{count}</h1>
                <h1 >Status: {status1}</h1>
                               
              </div>
              <div className="back">
                  <button className={"btn"} onClick={ON}>ON</button>
                  <br/>
                  <button className={"btn"} onClick={Increament}>Increment</button>
                   
                  <button className={"btn"} onClick={Decrement}>Decrement</button>
                  <br/>
                  <button className={"btn"} onClick={OFF}>OFF</button>
                  <br/>
                  <button className={"btn"} onClick={status}>Check Status</button>
                  
              </div>
              </div>
            </div>
        )
}

export default Counter_AppliCation;