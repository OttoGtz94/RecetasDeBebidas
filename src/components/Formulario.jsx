import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
	// context
	const { categorias } = useContext(CategoriasContext);
	const { buscarRecetas, guardarConsultar } = useContext(
		RecetasContext
	);

	// states
	const [busqueda, guardarBusqueda] = useState({
		nombre: '',
		categoria: '',
	});
	const [error, guardarError] = useState(false);

	const { nombre, categoria } = busqueda;

	// funcion para leer los contenidos
	const obtenerDatosReceta = e => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const buscarReceta = e => {
		e.preventDefault();

		if (nombre.trim() === '' || categoria.trim() === '') {
			guardarError(true);
			return;
		}

		guardarError(false);
		buscarRecetas(busqueda);
		guardarConsultar(true);
	};

	return (
		<form className='col-12' onSubmit={buscarReceta}>
			{error ? (
				<p>Todos los campos son obligatorios</p>
			) : null}
			<fieldset className='text-center'>
				<legend>
					Busca bebidas por Categoría o Ingrediente
				</legend>
			</fieldset>

			<div className='row mt-4'>
				<div className='col-md-4'>
					<input
						name='nombre'
						className='form-control'
						type='text'
						placeholder='Buscar por Ingrediente'
						onChange={obtenerDatosReceta}
					/>
				</div>
				<div className='col-md-4'>
					<select
						className='form-control'
						name='categoria'
						onChange={obtenerDatosReceta}
					>
						<option value=''>
							-- Selecciona Categoría --
						</option>
						{categorias.map(categoria => (
							<option
								key={categoria.strCategory}
								value={categoria.strCategory}
							>
								{categoria.strCategory}
							</option>
						))}
					</select>
				</div>

				<div className='col-md-4'>
					<input
						type='submit'
						className='btn btn-block btn-primary'
						value='Buscar Bebidas'
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
