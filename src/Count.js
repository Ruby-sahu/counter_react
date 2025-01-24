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
    <div className="col-md-4">
    <p>{counter}</p>
    <div>
    <div>
    <button type="button" className="btn btn-warning" onClick={Increment}>Increment</button>
    </div>
    <div className='mt-3'>
    <button type="button" className="btn btn-danger" onClick={Decrement}>Decrement</button>
    </div>
    <div className='mt-3'>
    <button type="button" className="btn btn-warning" onClick={() => IncrConterBy(5)}>Increment By 5</button>
    </div>
    <div className='mt-3'>
    <button type="button" className="btn btn-danger" onClick={() => DecCounterBy(5) }>Decrement By 5</button>
    </div>

    </div>
    </div>
    </div>
    </div>
  );
}

export default Count
