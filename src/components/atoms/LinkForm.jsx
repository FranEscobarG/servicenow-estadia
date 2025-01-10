import { NavLink } from "react-router-dom";

function LinkForm({label, path}) {
  return (
    <NavLink className="link-form" to={path}>
      {label}
    </NavLink>
  );
}

export default LinkForm;
