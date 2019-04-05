import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import profile from "../profile.json";
import moment from "moment";

function GetDuration(duration) {

    const years = parseInt(duration / 12);
    const months = (duration > 12) ? duration % 12 : duration;

    return (years > 1 ? years + " year" + (years > 1 ? "s" : "") + (months > 0 ? " and " : "") : "")
        + (months > 0 ? months + " month" + (months > 1 ? "s" : "") : "");
}

class Experience extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                            profile.experience.map(function (job, index) {

                                moment.locale('en');

                                const startDate = moment(job.startDate);
                                const endDate = moment(job.current ? new Date() : new Date(job.endDate));
                                const duration = Number(moment.duration(endDate.diff(startDate)).asMonths().toPrecision(1));

                                return (
                                    <div key={index}>
                                        <Media>
                                            <Media object src={job.logo} alt={job.companyName} />
                                            <Media body>
                                                <Media heading>
                                                    <a href={job.url}>{job.companyName}</a>
                                                    <span className="subtle">{GetDuration(duration)}</span>
                                                </Media>
                                                <Media heading>
                                                    <span className="subtle">{job.position}</span>
                                                </Media>
                                                <span className="description">{job.description}</span>
                                            </Media>
                                        </Media>
                                    </div>
                                );

                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experience;