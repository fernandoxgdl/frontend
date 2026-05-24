import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setEsAdmin }) {
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje("");

    try {
      const respuesta = await fetch(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setEsAdmin(true);
        navigate("/admin");
      } else {
        setMensaje(data.err || "credenciale incorrectas");
      }
    } catch (err) {
      setMensaje("Error de conexión");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        minHeight: "70vh",
        width: "60vw",
        position: "relative",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <h2>Login del Sistema</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Ingresar</button>
      </form>

      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
