import { useNavigate } from "react-router-dom";

function AdminPanel({ setEsAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setEsAdmin(false);
    navigate("/login");
  };

  return (
    <div style={{
      textAlign: "center",
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    }}>
      <h2>Panel de Administración</h2>
      <p>Bienvenido, Admin.</p>

      <button
        style={{
          padding: "12px 28px",
          borderRadius: "8px",
          border: "none",
          background: "#41a6ed",
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={() => navigate("/dashboard")}
      >
        Modificar inventario
      </button>

      <button
        style={{
          padding: "8px 20px",
          borderRadius: "8px",
          border: "1.5px solid #ef4444",
          background: "none",
          color: "#ef4444",
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default AdminPanel;