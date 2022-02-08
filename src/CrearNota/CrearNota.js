import './CrearNota.scss';
import React, { useState } from 'react';
import $ from 'jquery';
let notas = [];

function displayAddNote() {
	$('.AddNote').toggle();
	$('.newNote').toggle();
}

function CN() {
	const [value, setValue] = useState('Título');
	const [valueTA, setValueTA] = useState('Nota');

	function closeNote() {
		displayAddNote();
		setValue('Título');
		setValueTA('Nota');
	}
	function handleFocusInput(e) {
		if (e.target.value === 'Título') setValue('');
		if (e.target.value === 'Nota') setValueTA('');
	}

	const handleChangeInput = (e) => setValue(e.target.value);
	const handleChangeTA = (e) => setValueTA(e.target.value);

	function saveNote() {
		const Nota = {
			title: $('.inputTitle').val(),
			text: $('.inputNote').val(),
		};
		notas.push(Nota);
	}

	return (
		<div className="CN">
			<div className="newNote">
				<button onClick={displayAddNote}>Nueva nota</button>
			</div>
			<div className="AddNote">
				<button onClick={closeNote}>X</button>
				<form>
					<input
						type="text"
						onChange={handleChangeInput}
						onFocus={handleFocusInput}
						value={value}
						className="inputTitle"
					/>
					<textarea
						name="inputNote"
						onChange={handleChangeTA}
						onFocus={handleFocusInput}
						className="inputNote"
						value={valueTA}
					></textarea>
				</form>
				<button className="Save" onClick={saveNote}>
					Guardar Nota
				</button>
			</div>
		</div>
	);
}

export default CN;
