import React from 'react';

function PresentacionPrincipal() {

    return (
        <div className='row mt-3'>
            <div className='col-lg-6 text-center'>
                <img src='/assets/images/logo192.png' style={{width: '50%'}}></img>
            </div>
            <div className='col-lg-6'>
                <p>dsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud saodsau dosauidpoasiud sao</p>
                <a href='/assets/documents/CALENDARIO-ACADEMICO-2025.pdf' className='btn btn-success' target='_blank'><i className="fa-solid fa-download"></i> Descargar Brochure</a>
            </div>
        </div>
    );
}

export default PresentacionPrincipal;