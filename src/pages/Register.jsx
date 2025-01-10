import Navbar from "../components/molecules/navbar";
import RegisterContent from "../components/organism/RegisterContent";
import '../assets/style/login.css'

function Register() {
    return ( 
        <div>
            <Navbar type={2} />
            <RegisterContent />
        </div>
     );
}

export default Register;