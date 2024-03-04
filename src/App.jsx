import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const code = process.env.COMPANY_CODE;

  const Header = lazy(() => import(`./Company/${code}/components/Header`));
  const Footer = lazy(() => import(`./Company/${code}/components/Footer`));

  const Home = lazy(() => import(`./Company/${code}/pages/Home`));
  const About = lazy(() => import(`./Company/${code}/pages/About`));
  const Contact = lazy(() => import(`./Company/${code}/pages/Contact`));
  return (
    <>
      <div className="App"> 
        {/* <Suspense fallback={<p><i>Loading...</i></p>}>
          <Home />
        </Suspense> */}
        <Suspense fallback={<p><i>Loading...</i></p>}>
          <Header />
        </Suspense>
        
          <Routes> 
            <Route 
              path="/" 
              element={(
                <Suspense fallback={<>...</>}>
                  <Home />
                </Suspense>
              )}
            />
            <Route 
              path="/about" 
              element={(
                <Suspense fallback={<>...</>}>
                  <About />
                </Suspense>
              )}
            />
            <Route 
              path="/contact" 
              element={(
                <Suspense fallback={<>...</>}>
                  <Contact />
                </Suspense>
              )}
            />
          </Routes> 
        <Suspense fallback={<p><i>Loading...</i></p>}>
          <Footer />
        </Suspense>
      </div> 
    </>
  )
}

export default App
