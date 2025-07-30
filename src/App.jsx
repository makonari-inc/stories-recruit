import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'
import './styles/main.css'

// Import eyecatch image
import eyecatchImage from './assets/RECRUIT.png'

function App() {
  
  return (
    <div className="app">
      <Header />
      <Hero eyecatchImage={eyecatchImage} />
      <Content />
      <Footer />
    </div>
  )
}

export default App
