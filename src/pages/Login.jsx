import Navbar from "../components/molecules/navbar";
import LoginContent from "../components/organism/LoginContent";
import '../assets/style/login.css'

function Login() {
    return ( 
        <div>
            <Navbar type={2} />
            <LoginContent/>
        </div>
     );
}

export default Login;