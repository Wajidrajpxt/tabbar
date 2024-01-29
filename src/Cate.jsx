import React from 'react'

export default function Cate(data) {

  console.log(data.data,"");








  return (
    <>
    
    
    
    {
        data.data.map((items)=>{

          // console.log(items,'itttbtbt');
    
          return(
    
              <div>
                 <h1 className='text-[40px] font-mono'>{items.name}</h1> 
                 <h2 className='text-[35px] font-mono' >{items.education}</h2> 
                 <p className="text-[30px] font-mono">{items.post}</p>
                 <p className="text-[23px]  font-mono pt-10 ">{items.des}</p>

              </div>
    
    
    
          )  
    
    
    
    
      })
    }
    
    
    </>
  )
}
