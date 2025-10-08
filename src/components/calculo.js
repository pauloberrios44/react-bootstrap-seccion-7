import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneraciones() {
    

    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);
    const [bonoMovilizacion, setBonoMovilizacion] = useState(0);
    const [bonoColacion, setBonoColacion] = useState(0);
    const [viaticos, setViaticos] = useState(0);
    const [tipoPrevisionSalud, setTipoPrevisionSalud] = useState("");

    console.log(bonoColacion);
    console.log(tipoPrevisionSalud);

    // Porcentajes
    const porcentajeAFP = 0.1;
    const porcentajeComisionAFP = 0.005;
    const porcentajeSeguroIS = 0.014;
    const porcentajeSalud = tipoPrevisionSalud == 2 ? 0.07 : 0.1;
    const porcentajeSeguroCesantia = 0.006;

    console.log(porcentajeSalud);
  
    // variables auto-calculadas
    const sueldoImponible = parseInt(sueldoBruto) + parseInt(gratificacionLegal);
    const resultadoAFP = parseInt(sueldoImponible * porcentajeAFP);
    const resultadoComisionAFP = parseInt(sueldoImponible * porcentajeComisionAFP);
    const liquidoAPagar = parseInt(sueldoBruto) - parseInt(resultadoAFP) - parseInt(resultadoComisionAFP) + parseInt(bonoColacion) + parseInt(bonoMovilizacion) + parseInt(viaticos);
  
    return (
        <div className='row mt-3' id='demo'>
          <div className='col-lg-6'>
            <h4 className='text-center py-3'>Datos sueldo</h4>
            <div className='form-group'>
              <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
              <input id='sueldoBruto' name='sueldoBruto' placeholder='1000000' type='number' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>
            </div>

            <div className='form-group mt-3'>
              <label className='form-label' htmlFor='gratificacionLegal'>Gratificacion Legal</label>
              <input id='gratificacionLegal' name='gratificacionLegal' placeholder='200000' type='number' className='form-control' value={gratificacionLegal} onChange={(e) => setGratificacionLegal(e.target.value)}></input>
            </div>

            <div className='form-group mt-3'>
              <label className='form-label' htmlFor='tipoPrevisionSalud'>Salud</label>
              <select className='form-select' id='tipoPrevisionSalud' name='tipoPrevisionSalud' 
                onChange={(e) => setTipoPrevisionSalud(e.target.value)}>
                <option value=''>Seleccione previsión</option>
                <option value='1'>Isapre</option>
                <option value='2'>Fonasa</option>
              </select>
            </div>

            <h4 className='mt-3'>No imponibles</h4>
            <div className='form-group mt-3'>
              <label className='form-label' htmlFor='bonoMovilizacion'>Bono movilizacion</label>
              <input id='bonoMovilizacion' name='bonoMovilizacion' placeholder='200000' type='number' className='form-control' value={bonoMovilizacion} onChange={(e) => setBonoMovilizacion(e.target.value)}></input>
            </div>

            <div className='form-group mt-3'>
              <label className='form-label' htmlFor='bonoColacion'>Bono colación</label>
              <input id='bonoColacion' name='bonoColacion' placeholder='200000' type='number' className='form-control' value={bonoColacion} onChange={(e) => setBonoColacion(e.target.value)}></input>
            </div>

            <div className='form-group mt-3'>
              <label className='form-label' htmlFor='viaticos'>Viáticos</label>
              <input id='viaticos' name='viaticos' placeholder='200000' type='number' className='form-control' value={viaticos} onChange={(e) => setViaticos(e.target.value)}></input>
            </div>
          </div>

          <div className='col-lg-6'>
            <h4 className='text-center py-3'>Resultados</h4>
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
                  <td>(+) Sueldo imponible CLP</td>
                  <td>{parseInt(sueldoImponible).toLocaleString()}</td>
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
                  <td colSpan={2}>Líquido a pagar</td>
                  <td>{liquidoAPagar.toLocaleString()}</td>
                </tr>
              </tbody>
            </Table>
          </div>

        </div>
    );
}

export default CalculoRemuneraciones;