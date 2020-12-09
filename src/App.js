import React,{useState, useEffect} from 'react';
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
const fetchData= async()=>{
  try{
    const response = await fetch(url)
    const tours = await response.json()
  
setTours(tours)
  }catch(error){
    console.log(error);
  }
    console.log(tours);
}
   useEffect(()=>{
    fetchData()
  },[])
return(
<Tours tours={tours}  />
)
  
  
}

export default App;
