
import './App.css'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import beachImage from './assets/pexels-maribernotti-1049298.jpg'


function App() {

  return (
    <>
      <Home />
      <Welcome beachImage={beachImage}/>
    </>
  )
}

export default App
