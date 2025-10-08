import React from 'react';
import logo from '../assets/images/imagen_rrhh_1.png';

function BannerPrincipal() {
    return (
        <div className='row mt-3'>
          <div className='col-lg-6'>
            <img className='rounded' src={logo} style={{width: '100%'}}></img>
          </div>
          <div className='col-lg-6'>
            <h2>Transforma la gestión de tu equipo con el software de RR.HH. y Remuneraciones líder en Chile</h2>
            <p className='mt-3'>Optimiza la gestión de tu empresa con nuestro innovador software de Recursos Humanos y Remuneraciones, diseñado especialmente para el contexto laboral chileno. Automatiza procesos como el cálculo de sueldos, cotizaciones previsionales, vacaciones y finiquitos, cumpliendo al 100% con la normativa vigente de la Dirección del Trabajo y la normativa tributaria del SII. Además, centraliza la información de tus colaboradores en una plataforma moderna, segura y fácil de usar, que mejora la eficiencia del área de RR.HH. y te permite tomar decisiones estratégicas basadas en datos reales. ¡Lleva la administración de tu equipo al siguiente nivel con una solución tecnológica hecha en Chile para empresas chilenas!</p>
            <a href='#' className='btn btn-primary'>Más información</a>
          </div>
        </div>
    );
}

export default BannerPrincipal;