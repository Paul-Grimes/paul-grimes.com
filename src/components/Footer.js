import React from 'react';
import {Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr/>
                <Container>
                    <a href='https://www.facebook.com/paul.l.grimes'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='https://linkedin.com/in/paul-grimes-35959a11/'><FontAwesomeIcon icon={faLinkedin} /></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;
