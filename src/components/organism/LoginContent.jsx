import Input from "../atoms/Input";
import IconLogin from '../../assets/img/iconLogin.svg'
import LinkForm from "../atoms/LinkForm";
import ButtonForm from "../atoms/ButtonForm";

function LoginContent() {
    return ( 
        <div className="login-container">
            <div className="box-form">
                <form className="form">
                    <img src={IconLogin} alt="" className="icon-login"/>
                    <Input type={'email'} name={'email'} label={'Correo Electronico'} />
                    <Input type={'password'} name={'password'} label={'Contraseña'} />

                    <LinkForm label={"¿Aun no tienes una cuenta?"} path={"/register"} />
                    <ButtonForm text={"Iniciar Sesión"} />
                </form>
            </div>
        </div>
     );
}

export default LoginContent;