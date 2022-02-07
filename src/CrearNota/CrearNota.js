import './CrearNota.scss';
import React from 'react';
import $ from 'jquery';

function displayAddNote() {
	$('.inputNote').toggle();
}

function CN() {
	return (
		<div className="CN">
			<div>
				<button onClick={displayAddNote}>Añadir nota</button>
			</div>
			<div>
				<input className="inputNote" type="text" value="" />
			</div>
		</div>
	);
}

export default CN;
