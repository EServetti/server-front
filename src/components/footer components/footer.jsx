import "../../style/footer/footer.css"

function Footer() {
  return (
    <div className="main-footer">
      <section className="contact-section">
        <span>Contact us:</span>
        <span>Phone: +34 123 456 789 </span>
        <span>Email: everithingforyourhome@gmail.com</span>
        <span>Address: Avenida Hipólito Yrigoyen, 123, Córdoba, Argentina</span>
      </section>
      <section className="about-us-section">
        <span>Info:</span>
        <span><a>Privacy Policies</a></span>
        <span><a>Terms and conditions</a></span>
        <span><a>About us</a></span>
      </section>
      <span className="rights">© 2024 Everithing for your home. All rights reserved.</span>
    </div>
  )
}

export default Footer