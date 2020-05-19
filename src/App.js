import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const [appointments, setAppointments] = useState([]);


  const createAppointment = appointment =>{
    setAppointments({
      ...appointments,
      appointment
    })
  }
  

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
          <div className="c-appointment">

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
