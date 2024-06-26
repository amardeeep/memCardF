import Card from './card.jsx'
import Score from './score.jsx'
import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const [dataUrl,setDataUrl]=useState([]);
  useEffect(()=>{
    console.log("hello");
    ()=>{
      console.log("KK")
      let data=[];
      fetch('https://api.giphy.com/v1/gifs/search?api_key=D1l9PZ7kq8sawELXpNiiGdU13DjQjC9F&q=cats&limit=10').then(
        function(response){
          console.log(response.json())
          return response.json()
        }).then(function(response){
          for(let entry of response.data){
            data.push({key:entry.id,url:entry.url})
          }
          console.log(data)
          setDataUrl(data)
        })
      }
    },[])
  return(
    <div className='app'>
      <h1>Test Your Memory</h1>
      <Score></Score>
      <div className="cards">
        {dataUrl.map(entry=>{
          return (
            <Card key={entry.id} data={entry.url}></Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
