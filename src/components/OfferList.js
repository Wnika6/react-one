import OfferItem from './OfferItem'
import { services } from '../data/dataItems'

const OfferList = () => (
	<div className='services'>
		{services.map(service => (
			<OfferItem key={service.id} className={service.className} name={service.name} isNew={service.isNew} />
		))}
	</div>
)

export default OfferList
