import { employees } from '../../data/dataItems'
import Employee from '../Employee/Employee'
import './AboutUs.css'

const AboutUs = () => (
	<section id='aboutUs' className='aboutUs'>
		<div className='center-container'>
			<h2 className='section-title'>Nasi specjaliści</h2>
			<div className='section-employees'>
				{employees.map(employee => (
					<Employee
						key={employee.id}
						name={employee.name}
						position={employee.position}
						description={employee.description}
						image={employee.image}
					/>
				))}
			</div>
		</div>
	</section>
)

export default AboutUs
