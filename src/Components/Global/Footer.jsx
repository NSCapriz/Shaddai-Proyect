import '../../assets/css/footer.css'

const Footer = () => {
  return (
    <>
    <footer className="container-footer mt-5 pt-3 py-3">
        <h2 className="text-center mb-2">Seguinos en nuestras redes:</h2>
        <div className="d-flex justify-content-center align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/000000/instagram-new--v1.png" alt="instagram-new--v1" className="img-fluid"/>
            <img width="48" height="48" src="https://img.icons8.com/parakeet-line/48/000000/facebook-new.png" alt="facebook-new" className="img-fluid mx-3"/>
            <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/whatsapp--v1.png" alt="whatsapp--v1" className="img-fluid"/>
        </div>
    </footer>
    </>
  )
}

export default Footer