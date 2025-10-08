import React from 'react';
import logo from '../assets/images/imagen_rrhh_1.png';
import logo2 from '../assets/images/imagen2.png';

function BannerPrincipal() {
    return (
        <div className='row mt-5' id='caracteristicas'>
            <div className='col-lg-6'>
                <h2>Multiples características</h2>
                <p className='mt-3'>Automatiza y controla todo el ciclo de vida laboral: desde el cálculo de sueldos, cotizaciones previsionales, vacaciones y finiquitos, hasta la gestión documental electrónica y la firma digital de contratos válidos ante la Dirección del Trabajo y el SII.
                </p>
                <ul>
                    <li>Asistente de Nómina Inteligente, que detecta automáticamente errores o diferencias en las liquidaciones antes de emitirlas.</li>
                    <li>Panel Predictivo de Costos Laborales, que proyecta gastos en remuneraciones y cotizaciones según distintos escenarios de contratación.</li>
                    <li>Integración con bancos y sistemas contables, para generar pagos masivos y asientos automáticos con conciliación en tiempo real.</li>
                    <li>Módulo de Asistencia con Geolocalización, ideal para equipos en terreno o en modalidad híbrida.</li>
                    <li>Analítica de Clima Laboral y Desempeño, con dashboards dinámicos que miden productividad, satisfacción y rotación.</li>
                    <li>Gestor de Cumplimiento Legal, que emite alertas sobre contratos por vencer, vacaciones acumuladas y topes previsionales.</li>
                    <li>Portal del Colaborador 360°, donde cada trabajador puede acceder a sus liquidaciones, certificados y vacaciones desde cualquier dispositivo.</li>
                    <li>Centraliza toda la información de tu equipo, potencia la eficiencia del área de RR.HH. y toma decisiones estratégicas basadas en datos reales.</li>
                    <li>Lleva la administración de tu equipo al siguiente nivel con una solución tecnológica hecha en Chile, para empresas chilenas.</li>
                </ul>
                <a target='_blank' rel="noopener noreferrer" href='/documents/brochure.pdf' className='btn btn-primary'>Descargar brochure</a>
            </div>
            <div className='col-lg-6'>
                <img className='rounded' src={logo2} style={{ width: '100%' }}></img>
            </div>
        </div>
    );
}

export default BannerPrincipal;