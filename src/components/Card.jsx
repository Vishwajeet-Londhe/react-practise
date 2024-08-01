import React from 'react';

function Card(){

    const data = [
        {name:"mahiya", description:"tere mathe zoomar chamke tere hatho chudiya baje"},
        {name:"junoon", description:"kaisa ye junoon hai khuda jane cahin ekk pal nahi sa"},
    ]

    const handleClickDownload = ()=>{alert("Download ho raha hai")}

    return(
        <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
            {data.map((item, index)=>(
                <div className='w-90 px-3 py-2 bg-zinc-100 rounded'>
                <h3 className='font-semibold text-xl'>{item.name}</h3>
                <p className='text-xs mt-2'>{item.description}</p>
                <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
            </div>
            ))}
        </div>
    )
}

export default Card