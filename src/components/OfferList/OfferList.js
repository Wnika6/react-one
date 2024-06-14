import OfferItem from '../OfferItem/OfferItem'
import { services } from '../../data/dataItems'
import './OfferList.css'

const OfferList = () => (
	<div className='services'>
		{services.map(service => (
			<OfferItem key={service.id} className={service.className} name={service.name} isNew={service.isNew} />
		))}
	</div>
)

export default OfferList
