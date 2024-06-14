import OfferList from '../OfferList/OfferList'
import './Offer.css'
const Offer = () => (
	<section id='offer' className='offer'>
		<div className='center-container'>
			<h2 className='section-title offer-title'>Czym zajmuje się nasza firma?</h2>
			<OfferList />
		</div>
	</section>
)

export default Offer
