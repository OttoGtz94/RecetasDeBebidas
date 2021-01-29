import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

// Inicio de código de material ui
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
// import { ModalConsumer } from '../context/ModalContext';
function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
// Fin de código de material ui

const Receta = ({ receta }) => {
	// Config del modal de material ui
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const { idDrink, strDrinkThumb, strDrink } = receta;

	const {
		informacionReceta,
		guardarIdReceta,
		guardarReceta,
	} = useContext(ModalContext);

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<h2 className='card-header'>{strDrink}</h2>

				<img
					className='card-img-top'
					src={strDrinkThumb}
					alt={`Imagen de ${strDrink}`}
				/>

				<div className='card-body'>
					<button
						type='button'
						className='btn btn-block btn-primary'
						onClick={() => {
							guardarIdReceta(idDrink);
							handleOpen();
						}}
					>
						Ver Receta
					</button>

					<Modal
						open={open}
						onClose={() => {
							handleClose();
							guardarIdReceta(null);
							guardarReceta({});
						}}
					>
						<div
							style={modalStyle}
							className={classes.paper}
						>
							<h2>{informacionReceta.strDrink}</h2>
							<h3 className='mt-4'>Instrucciones</h3>
							<p>{informacionReceta.strInstructions}</p>
							<img
								src={informacionReceta.strDrinkThumb}
								alt=''
								className='img-fluid my-4'
							/>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Receta;
