import React from 'react'
import OfferItem from './OfferItem'
import { services } from '../data'

const OfferList = () => (
	<div className='services'>
		{services.map(service => (
			<OfferItem key={service.id} className={service.className} name={service.name} isNew={service.isNew} />
		))}
	</div>
)

export default OfferList
