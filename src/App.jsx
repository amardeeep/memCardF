import Card from './card.jsx'
import Score from './score.jsx'
import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const [dataUrl,setDataUrl]=useState([]);
  const [score,setScore]=useState(0);
 
  useEffect(()=>{
      let data=[];
      fetch('https://api.giphy.com/v1/gifs/search?api_key=D1l9PZ7kq8sawELXpNiiGdU13DjQjC9F&q=dogs&limit=10',{mode:'cors'}).then(
        function(response){
          return response.json()
        }).then(function(response){
          for(let entry of response.data){
            data.push({key:entry.id,url:entry.images.original.url,isHit:false})
          }
          setDataUrl(data)
        })
    },[])
    
  return(
    <div className='app'>
      <h1>Test Your Memory</h1>
      <Score></Score>
      <div className="cards">
        {dataUrl.map(entry=>{
          return (
            <Card key={entry.key} data={entry.url} onClick={()=>{
              if(!entry.isHit){
                setScore(score+1);
                entry.isHit=true
              }
              else if(entry.isHit){
                console.log("Game Over !")
                setScore(0)
              }
            }}></Card>
          )
        })}
        <Score score={score}></Score>
      </div>
    </div>
  )
}

export default App
