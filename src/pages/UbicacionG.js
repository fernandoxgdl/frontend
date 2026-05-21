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
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCq_gUE1Ln1pA8Tl3e2fETMxDqR_zTHr4c&q=Punto+Sao+Paulo+Zapopan&zoom=15">

          </iframe>
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
