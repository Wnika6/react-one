const Employee = ({ name, position, description, image }) => (
	<div className='employee-box'>
		<div className={`employee-box__image ${image}`}></div>
		<div className='employee-box__text'>
			<div className='employee-box__text--name'>
				{name} [ {position} ]
			</div>
			<p>{description}</p>
		</div>
	</div>
)

export default Employee
