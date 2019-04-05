import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import profile from "../profile.json";

class Education extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                            profile.education.map(function (edu, index) {
                                return(
                                    <div key={index}>
                                        <Media>
                                            <Media href={edu.url}>
                                                <Media object src={edu.logo} alt={edu.institue} />
                                            </Media>
                                            <Media body>
                                                <Media heading>
                                                    <a href={edu.url}>{edu.institue}</a>
                                                    <span className="subtle">Year Graduated: {edu.graduationYear}</span>
                                                </Media>
                                                <span className="description">Degree: {edu.degree}</span>
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

export default Education;