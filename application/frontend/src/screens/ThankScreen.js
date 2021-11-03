import { Link } from 'react-router-dom';
import './ThankScreen.css';


const ThankScreen = () => {

    return (

        <div class="thank_box">
            <div class="box_body">
                <h1> Thank you for your order! </h1>
                <p> Click here to go <Link to='/'> Home </Link> </p>
            </div>
        </div>


    );
};

export default ThankScreen;

