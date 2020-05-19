import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment,deleteAppointment}) => {

  const { pet,owner,date,time,symptoms } = appointment;

  return ( 
    <div className="c-appointment">
      <p>Mascota: <span>{pet}</span></p>
      <p>Propietario: <span>{owner}</span></p>
      <p>Fecha: <span>{date}</span></p>
      <p>Hora: <span>{time}</span></p>
      <p>Sintomas: <span>{symptoms}</span></p>

      <button
        className="c-btn c-btn--block c-btn__delete"
        onClick={()=> deleteAppointment(appointment.id)}
      >Eliminar &times;
      </button>
    </div>
  );
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;