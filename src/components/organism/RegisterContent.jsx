import Input from "../atoms/Input";
import IconLogin from "../../assets/img/iconLogin.svg";
import LinkForm from "../atoms/LinkForm";
import ButtonForm from "../atoms/ButtonForm";

function RegisterContent() {
  return (
    <div className="login-container">
      <div className="box-form">
        <form className="form">
          {/* <img src={IconLogin} alt="" className="icon-login"/> */}
          <Input type={"text"} name={"name"} label={"Nombre (s)"} />
          <Input type={"text"} name={"lastname"} label={"Apellidos"} />
          <Input type={"tel"} name={"phone"} label={"Número de Teléfono"} />
          <Input type={"email"} name={"email"} label={"Correo Electronico"} />
          <Input type={"password"} name={"password"} label={"Contraseña"} />
          <Input type={"date"} name={"birth"} label={"Fecha de nacimiento"} />
          
          <label className="label-form">Género</label>
          <div className="radiobuttons">
            <label htmlFor="feme" className="option">
                Femenino
                <input type="radio" name="gender" value="femenino" id="feme" />
            </label>
            <label htmlFor="masc" className="option">
                Masculino
                <input type="radio" name="gender" value="masculino" id="masc" />
            </label>
          </div>
          
          <ButtonForm text={"Registrarse"} />
          <LinkForm label={"¿Ya tienes una cuenta?"} path={"/login"} />
        </form>
      </div>
    </div>
  );
}

export default RegisterContent;
