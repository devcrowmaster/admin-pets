import React, { useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  const [appointments, setAppointments] = useState([]);


  const createAppointment = appointment =>{
    setAppointments([
      ...appointments,
      appointment
    ])
  }
  const deleteAppointment = id =>{
    const apoint = appointments.filter(appointment => appointment.id !== id);
    setAppointments(apoint);
  }
  
  const title = appointments.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

  return (
    <div className="o-container">
      <main>
        <h1 className="heading heading--primary">Administrador de Pacientes</h1>
        <div className="o-row">
          <div className="c-form">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="appointment">
            <h2 className="heading heading--secondary">{title}</h2>
            {appointments.map(appointment =>(
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
