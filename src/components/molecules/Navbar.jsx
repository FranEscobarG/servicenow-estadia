import "../../assets/style/navbar.css";
import Logo from "../../assets/img/logoServiceNow.png";
import IconLocation from "../../assets/img/iconLocation.svg";
import { useState } from "react";

function Navbar({ type, username = "Usuario" }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    alert(`Buscando: ${searchValue}`);
  };

  return (
    <div className="navbar-container">
      {type === 1 && (
        <>
          <div className="navbar-section location">
            <img src={IconLocation} alt="" />
            <span className="navbar-text">Ubicación</span>
          </div>
          <div className="navbar-section logo">
            <img src={Logo} alt="Service Now Logo" className="navbar-logo" />
          </div>
          <div className="navbar-section buttons">
            <button className="navbar-button" onClick={() => (window.location.href = "/login")}>
              Iniciar Sesión
            </button>
            <button className="navbar-button register" onClick={() => (window.location.href = "/register")}>
              Registrarse
            </button>
          </div>
        </>
      )}

      {/* Type 2: Solo Logo */}
      {type === 2 && (
        <div className="navbar-section logo-center">
            <img src={Logo} alt="Service Now Logo" className="navbar-logo" />
        </div>
      )}

      {/* Type 3: Logo, Búsqueda, Nombre de Usuario */}
      {type === 3 && (
        <>
          <div className="navbar-section logo">
            <img src={Logo} alt="Service Now Logo" className="navbar-logo" />
          </div>
          <div className="navbar-section search">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="navbar-search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="navbar-search-button" onClick={handleSearch}>
              🔍
            </button>
          </div>
          <div className="navbar-section user">
            <i className="navbar-user-icon">👤</i>
            <span className="navbar-username">{username}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
