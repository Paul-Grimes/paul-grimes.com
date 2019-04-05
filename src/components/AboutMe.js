import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import profile from "../profile.json";

class AboutMe extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                            profile.about.map(function (about, index) {
                                return(
                                    <div key={index}>
                                        <Media>
                                            <Media body>
                                                <Media heading>
                                                    Mission Statement
                                                </Media>
                                                <span className="description">{about.mission}</span>
                                                <Media heading>
                                                    Contact Information
                                                    <span className="subtle"><FontAwesomeIcon icon={faEnvelopeSquare} /> <a data-rel="external" href={"mailto:" + about.email}>{about.email}</a></span>
                                                    <span className="subtle"><FontAwesomeIcon icon={faPhoneSquare} /> <a data-rel="external" href={"tel:" + about.phone}>{about.phone}</a></span>
                                                </Media>
                                                <span className="description">{about.objective}</span>
                                            </Media>
                                        </Media>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutMe;