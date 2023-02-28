import {React,useState} from 'react';
export default function Tudo(){
    const[item,setitem]=useState("");
    const[arr,setarray]=useState(["orange","banana"])
   
    const myitem =(e)=> {
   
        setitem(
            e.target.value
        )
        console.log(item)
    }
   const handleSubmit=(e)=>{
     setarray(
        
        arr.concat(item)

    );
   }
   const removeItem =(id)=>{
   
   }
    return(
        <div>
            <input type="text" value={item} onChange={myitem} />
            <button type='submit' onClick={handleSubmit}>add</button>
            <ul>
                {arr.map((ac,bs)=>{
                    return <li key={ac}>{ac}<button type="button" onClick={()=>removeItem(ac.id)}>X</button></li> 

                })}
              
            </ul>
        </div>
    )
}