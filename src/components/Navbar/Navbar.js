import './Navbar.css'
const Navbar = () => (
	<nav className='navbar'>
		<div className='center-container container-navbar'>
			<p className='company-name'>bricks & pieces</p>
			<div className='nav-links'>
				<a className='nav-link' href='#aboutUs'>
					o nas
				</a>
				<a className='nav-link' href='#offer'>
					oferta
				</a>
				<div className='nav-link disabled-link'>kontakt</div>
			</div>
		</div>
	</nav>
)

export default Navbar
