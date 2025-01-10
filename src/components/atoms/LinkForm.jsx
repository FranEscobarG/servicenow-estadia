import { NavLink } from "react-router-dom";

function LinkForm({label}) {
  return (
    <NavLink className="link" to="/">
      {label}
    </NavLink>
  );
}

export default LinkForm;
