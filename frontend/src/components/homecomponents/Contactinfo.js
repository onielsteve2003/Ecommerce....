import React from 'react'

const Contactinfo = () => {
  return (
    <div className='contactInfo container'>
        <div className='row'>
            <div className='col-12 col-md-4 contact-Box'>
                <div className='info-image'>
                    <i className='fas fa-phone-alt'></i>
                </div>
                <h5>
                    Call Us: 
                    <br></br>
                    0808 123 4567
                </h5>
            </div>
            <div className='col-12 col-md-4 contact-Box'>
                <div className="box-info">
                    <div className="info-image">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5>
                        HeadQuaters
                    </h5>
                    <p>
                        11, Dummy Avenue
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
                <div className='box-info'>
                    <div className="info-image">
                        <i className="fas fa-fax"></i>
                    </div>
                    <h5>
                        Fax
                    </h5>
                    <p>
                        0808 123 4567
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactinfo