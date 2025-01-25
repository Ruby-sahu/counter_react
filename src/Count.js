import React, { useState } from 'react'


function Count() {

    let [counter,setCounter] = useState(0)

    function Increment() {
       setCounter((preValue)=>{
        return preValue+1;
       }); 
    }

    function IncrConterBy(value) {
        setCounter((preValue)=>{
         return preValue+value;
        }); 
     }

    function Decrement() {
        setCounter((preValue)=>{
         return preValue-1;
        });  
     }

     function DecCounterBy(value) {
        setCounter((preValue)=>{
         return preValue-value;
        });  
     }
   

  return (
  
    <div className="container">
    <div className="row">
    <div className="col-lg-5">
    <p>{counter}</p>
    <div className='d-flex flex-wrap gap-3'>
    <button type="button" className="btn btn-warning" onClick={Increment}>Increment</button>
    <button type="button" className="btn btn-danger" onClick={Decrement}>Decrement</button>
    <button type="button" className="btn btn-warning" onClick={() => IncrConterBy(5)}>Increment By 5</button>
    <button type="button" className="btn btn-danger" onClick={() => DecCounterBy(5) }>Decrement By 5</button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Count
