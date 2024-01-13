import {name} from '../data';


function Footer(props) {
    return (
        <footer className="footer py-4 text-center">
            <div className="container">
                <p>&copy;<span className="ms-1">{`Created by ${name}`}</span></p>
            </div>
        </footer>
    )
}

export default Footer;