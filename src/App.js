import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Offer from './components/Offer'
import Footer from './components/Footer'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<main>
				<AboutUs />
				<Offer />
			</main>
			<Footer />
		</div>
	)
}

export default App
