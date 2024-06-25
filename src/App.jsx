import Card from './card.jsx'
import Score from './score.jsx'
import './App.css'

function App() {
  
  return(
    <div className='app'>
      <h1>Test Your Memory</h1>
      <Score></Score>
      <div className="cards">
        <Card></Card>
      </div>
    </div>
  )
}

export default App
