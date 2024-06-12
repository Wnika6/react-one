const OfferItem = ({ className, name, isNew }) => (
	<div className={className || 'service-box'}>
		{isNew && <div className='service-circle'></div>}
		<p className='service-name'>{name}</p>
		{isNew && <p className='service-status'>(nowość)</p>}
	</div>
)

export default OfferItem
