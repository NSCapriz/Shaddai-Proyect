
import '../../assets/css/metodos.css'

const MetodosPago = () => {
  return (
    <>
        <div className="container-metodos">
        <h2 className='text-center mt-5 pt-5'>Metodos de pago:</h2>
        <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-4">
                <p className='fw-bolder text-center'>Mercado pago:</p>
                <div className="d-flex justify-content-center">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/mercado-pago.png" alt="mercado-pago" className='mx-3 img-fluid'/>
                </div>  
            </div>
            <div className="col-md-4">
                <p className='fw-bolder text-center'>Transferencia Bancaria:</p>
                <div className="d-flex justify-content-center">
                <img width="48" height="48" src="https://img.icons8.com/color/48/merchant-account.png" alt="merchant-account" className='mx-3 img-fluid'/>
                </div>  
            </div>
            <div className="col-md-4">
                <p className='fw-bolder text-center'>Ualá:</p>
                <div className="d-flex justify-content-center">
                    <img width="48" height="48" src='data:image/jpeg;base64,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' alt="uala" className='mx-3 img-fluid'/>
                </div>  
            </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-5">
                <p className='fw-bolder text-center'>Efectivo:</p>
                <div className="d-flex justify-content-center">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/cash-in-hand.png" alt="cash-in-hand" className='mx-3 img-fluid'/>
                </div>  
            </div>
            <div className="col-md-5">
                <p className='fw-bolder text-center'>Tarjeta:</p>
                <div className="d-flex justify-content-center">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/bank-cards.png" alt="bank-cards" className='mx-3 img-fluid'/>
                </div>  
            </div>
        </div>
        </div>
    </>
  )
}

export default MetodosPago