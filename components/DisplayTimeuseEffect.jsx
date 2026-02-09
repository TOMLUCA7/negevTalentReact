import React , {useEffect, useState}from 'react'

const DisplayTimeuseEffect = () => {
    const [time, setTime] = useState(new Date()) 
    
    useEffect(() => {
        const newDate = setInterval(() => {
            setTime(time)
        }, 1000)

        return () => {
            clearInterval(newDate)
        }
    }, [])

    


  return ( 
    <div>
       <h1>display time</h1>
       <h3>{time.toLocaleTimeString()}</h3>
    </div>
  )
}

export default DisplayTimeuseEffect