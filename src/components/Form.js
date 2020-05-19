import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Form = ({createAppointment}) => {

  const [appointment, setAppointment] = useState({
    pet:'',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  })

  const [error, setError] = useState(false);

  const handleChange = e =>{
    setAppointment({
      ...appointment,
      [e.target.name] : e.target.value
    })
  }

  const { pet,owner,date,time,symptoms } = appointment;

  const handleSubmit = e =>{
    e.preventDefault();

    if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
      setError(true);
      return;
    }

    setError(false);
    appointment.id = uuidv4(); //Generate an ID
    
    createAppointment(appointment);

    setAppointment({
      pet:'',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    });
  }
  return ( 
    <Fragment>
      <h2 className="heading heading--secondary">Crear Cita</h2>

      {error ? <p className="c-alert c-alert--error">Todos los Campos son obligatorios</p> : null }

      <form
        className="c-form"
        onSubmit={handleSubmit}
      >
        <label className="c-form__label" htmlFor="pet">Nombre de la Mascota</label>
        <input 
          type="text"
          name="pet"
          className="c-form__input"
          placeholder="Mascota"
          onChange={handleChange}
          value={pet}
        />

        <label className="c-form__label" htmlFor="owner">Nombre del Dueño</label>
        <input 
          type="text"
          name="owner"
          className="c-form__input"
          placeholder="Dueño"
          onChange={handleChange}
          value={owner}
        />

        <label className="c-form__label" htmlFor="date">Fecha</label>
        <input 
          type="date" 
          name="date" 
          id="date"
          className="c-form__input"
          onChange={handleChange}
          value={date}
        />

        <label className="c-form__label" htmlFor="time">Hora</label>
        <input 
          type="time" 
          name="time" 
          id="time"
          className="c-form__input"
          onChange={handleChange}
          value={time}
        />

        <label className="c-form__label" htmlFor="symptoms">Sintomas</label>
        <textarea 
          name="symptoms" 
          id="symptoms" 
          rows="10"
          className="c-form__input"
          onChange={handleChange}
          value={symptoms}
        >
        </textarea>

        <button 
          type="submit"
          className="c-btn c-btn--block c-btn__primary"
        >Agregar Cita
        </button>

      </form>
    </Fragment>

  );
}

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
}
 
export default Form;