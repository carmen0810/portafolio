import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Principal
      </NavLink>
      <NavLink
        to="/about"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        Acerca de mi
      </NavLink>
      <NavLink
        to="/portfolio"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        Portafolio
      </NavLink>
      <NavLink
        to="/contact"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        Contacto
      </NavLink>
    </section>
  );
};

export default NavigationMenu;