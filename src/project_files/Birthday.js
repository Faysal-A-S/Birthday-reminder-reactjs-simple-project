import React,{useState} from 'react'
import {data} from '../data'
const Birthday=()=> {
    const [person,setPerson]=useState(data)
    for (var i=0;i<person.length;i++) {    
        i=i+1
    }
    console.log(i)
    const clearAll=()=>{
        setPerson([])
    }
    return (
       <>
            <div className='container-body'>
                <h3>Birthday Reminder</h3>
                <br/>
                <br/>
                {
                    person.map((singleperson)=>{
                        const {id,name,age,img}=singleperson
                        return(
                            <div key={id} style={{overflow:'hidden'}} className='row'>
                                <img src={img} alt="" className=' offset-md-2 col-md-3  avatar'/>
                                 <h5 className=' col-md-4 font-weight-bolder ' >{name} </h5>
                                 <p className='col-md-3'> </p>
                                <h6 className=' offset-1 col-md-9 margin-reduce mb-3'>{age}</h6>
                                <hr/>                           
                                 </div>
                        )
                    })
                }
                <p className='font-weight-bold'>Total Numbers of Birthday Today {i}</p>
                <button className='btn btn-primary' onClick={clearAll}>Clear</button>
            </div>
        </>
    )
}

export default Birthday
