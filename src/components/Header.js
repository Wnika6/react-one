import React from 'react'

const Header = () => (
	<header>
		<div className='header-img'>
			<div className='header-shadow'></div>
			<div className='center-container'>
				<div className='header-text'>
					<h1 className='header-title'>Nasza firma oferuje najwyższej jakości produkty.</h1>
					<p>Nie wierz nam na słowo - sprawdź</p>
					<a className='header-btn' href='#offer'>
						oferta
					</a>
				</div>
			</div>
		</div>
	</header>
)

export default Header
