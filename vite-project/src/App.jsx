import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Videoplayer from './Videoplayer'
import ApiComponent from './ApiComponent'
function App() {

  const [fetchedData, setFetchedData] = useState([]); 
  const onDataFetched = (data) => {
    setFetchedData(data); // Set the fetched data in the App component's state
  };
  const vids = fetchedData.map((video)=>{
    return <Videoplayer videoSrc={video.video}/>
  })

  return (
    <>
    <ApiComponent  onDataFetched={onDataFetched} />
     {vids}
    </>
  )
}

export default App
