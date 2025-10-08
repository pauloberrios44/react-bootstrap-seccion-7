import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneraciones() {
    const [sueldoBruto, setSueldoBruto] = useState(0);
    const porcentajeAFP = 0.1;
    const porcentajeComisionAFP = 0.005;
    const porcentajeSeguroIS = 0.014;
    const porcentajeSalud = 0.07;
    const porcentajeSeguroCesantia = 0.006;
  
    // variables auto-calculadas
    const resultadoAFP = parseInt(sueldoBruto * porcentajeAFP);
    const resultadoComisionAFP = parseInt(sueldoBruto * porcentajeComisionAFP);
  
    return (
        <div className='row mt-3'>
          <div className='col-lg-6'>
            <h4>Datos sueldo</h4>
            <div className='form-group'>
              <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
              <input id='sueldoBruto' name='sueldoBruto' placeholder='1000000' type='text' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>
            </div>
          </div>

          <div className='col-lg-6'>
            <h4>Resultados</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>1</td>
                  <td>(+) Sueldo Bruto CLP</td>
                  <td>{parseInt(sueldoBruto).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className='text-center'>2</td>
                  <td>(-) AFP <small><i>(10,0%)</i></small></td>
                  <td>{resultadoAFP.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className='text-center'>3</td>
                  <td>(-) Comisión AFP <small><i>({parseFloat(porcentajeComisionAFP * 100).toLocaleString()}%)</i></small></td>
                  <td>{resultadoComisionAFP.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className='text-center'>4</td>
                  <td>(-) Seguro invalidez y sobrevivencia <small><i>({parseFloat(porcentajeSeguroIS * 100).toLocaleString()}%)</i></small></td>
                  <td>{parseInt(sueldoBruto * porcentajeSeguroIS).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className='text-center'>5</td>
                  <td>(-) Salud <small><i>({parseFloat(porcentajeSalud * 100).toLocaleString()}%)</i></small></td>
                  <td>{parseInt(sueldoBruto * porcentajeSalud).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className='text-center'>6</td>
                  <td>(-) Seguro cesantía <small><i>({parseFloat(porcentajeSeguroCesantia * 100).toLocaleString()}%)</i></small></td>
                  <td>{parseInt(sueldoBruto * porcentajeSeguroCesantia).toLocaleString()}</td>
                </tr>
                <tr style={{fontSize: '24px'}}>
                  <td colSpan={2}>Total</td>
                  <td>{parseInt(sueldoBruto - resultadoAFP - resultadoComisionAFP).toLocaleString()}</td>
                </tr>
              </tbody>
            </Table>
          </div>

        </div>
    );
}

export default CalculoRemuneraciones;