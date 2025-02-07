import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutMe" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
