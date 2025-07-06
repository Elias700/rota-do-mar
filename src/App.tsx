
import './App.css'
import Header from './components/Header'
import BeachCard from './components/BeachCard'

function App() {
  

  return (
    <>
      <Header />
      <BeachCard
          name="Praia de Boa Viagem"
          district="Boa Viagem"
          type="Urbana"
          weather="☀️ 29ºC, Sem chuva"
          tide="Cheia agora (⬆️)"
          mapLink="https://maps.google.com/?q=Boa+Viagem"
          detailLink="/praias/boa-viagem"
      />
    </>
  )
}

export default App
