
import './App.css'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import { styled } from 'styled-components'

function App() {

  const Container = styled.div`
   background-image: linear-gradient(#333399 , #FF00CC);
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  `
  return (
    <Container className='text-white'>
     <Hero/>
     <Project/>
     <About/>
     <Contact/>
    </Container>
  )
}

export default App
