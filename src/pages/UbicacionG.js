import "./maps.css";

function Vision() {
  return (
    <div className="mapa">
      <div className="ubicacion">
        <iframe
          title="Mapa Moda Mx"
          width="100%"
          height="350"
          style={{ border: "1px solid #080808", borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4070.0036527424195!2d-103.37902844497623!3d20.701703263680272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae36cd492c0d%3A0x32f3c48a45392ef8!2sPunto%20Sao%20Paulo!5e0!3m2!1ses-419!2smx!4v1779344296519!5m2!1ses-419!2smx
"
        ></iframe>
      </div>

      <div className="info-ubicacion">

        <div>
          <h2>Direccion</h2>
          <p>Av. de las Américas 1545-Piso 7, Providencia, 44630 Guadalajara, Jal.</p>
        </div>

        <div>
          <h2>Horario de atención</h2>
          <p>Lunes a Viernes: 10:00 AM - 8:00 PM</p>
        </div>

        <div>
          <h2>Llamada</h2>
          <p>Telefono: 123 456 7890</p>
          <p>Email: info@modamx.com</p>
        </div>

      </div>

    </div>
  );
}

export default Vision;
