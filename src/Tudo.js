import {React,useState} from 'react';
export default function Tudo(){
    const[item,setitem]=useState("");
    const[arr,setarray]=useState(["orange","banana"])
   
    const myitem =(e)=> {
   
        setitem(
            e.target.value
        )
        console.log(item)
        console.log(arr)
    }
   const handleSubmit=(e)=>{
  
     setarray(
    [...arr,item]
        
       

    );
   
   }
   const removeItem =(id)=> {
   console.log(id)
   console.log(arr)

    setarray((arr)=>arr.filter((a,b)=>{ return  b!== id }))
    
  
   }
    return(
        <div>
            <input type="text" value={item} onChange={myitem} />
            <button type='submit' onClick={handleSubmit}>add</button>
            <ul>
                {arr.map((ac,bs)=>{
                    return <li key={ac}>{ac}<button type="button" onClick={()=>removeItem(bs)}>X</button></li> 

                })}
              
            </ul>
        </div>
    )
}