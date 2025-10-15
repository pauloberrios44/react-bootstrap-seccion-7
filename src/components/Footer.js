import React from 'react';

function FooterPrincipal() {

    return (
        <div className='row mt-5 bg-success'>
            <div className='col-lg-12 text-center pt-2 text-white'>
                <p>Industrias Stark S.A.</p>
                <p>Avenida Concha y Toro 123, Puente Alto, Santiago</p>
                <a className='btn btn-secondary' href='https://wa.me/56912345678/?text=Hola'><i class="fa-brands fa-whatsapp"></i> Contáctanos por Whatsapp</a>
            </div>
        </div>
    );
}

export default FooterPrincipal;