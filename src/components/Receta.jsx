import React from 'react';

const Receta = () => {
	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<h2 className='card-header'></h2>

				<img className='card-img-top' />

				<div className='card-body'>
					<button
						type='button'
						className='btn btn-block btn-primary'
					>
						Ver Receta
					</button>

					<div>
						<h2></h2>
						<h3 className='mt-4'>Instrucciones</h3>

						<img className='img-fluid my-4' />

						<h3>Ingredientes y cantidades</h3>
						<ul></ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Receta;
