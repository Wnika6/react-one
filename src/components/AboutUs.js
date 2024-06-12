// AboutUs.js
import React from 'react'
import { employees } from '../data'
import Employee from './Employee'

const AboutUs = () => (
	<section id='aboutUs' className='aboutUs'>
		<div className='center-container'>
			<h3 className='section-title'>Nasi specjaliści</h3>
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
