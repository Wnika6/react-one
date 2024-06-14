import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Offer from './components/Offer/Offer'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<AboutUs />
				<Offer />
			</main>
			<Footer />
		</>
	)
}

export default App
