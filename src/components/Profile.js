import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Experience from './Experience';
import Education from './Education';
import AboutMe from './AboutMe';
import profile from '../profile.json';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 'About'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }



    render() {
        return (
            <div>

                <Jumbotron>
                    <Container>
                        <h1 className='display-3'>{profile.title}</h1>
                        <p className="lead">{profile.summary}</p>
                    </Container>
                </Jumbotron>

                <Container>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({active: this.state.activeTab === 'About'})}
                                onClick={() => {this.toggle('About');}}>
                                About Me
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className={classnames({active: this.state.activeTab === 'Experience'})}
                                onClick={() => {this.toggle('Experience');}}>
                                Experience
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink Key={'EducationTab'} className={classnames({active: this.state.activeTab === 'Education'})}
                                onClick={() => {this.toggle('Education');}}>
                                Education
                            </NavLink>
                        </NavItem>

                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId='About'>
                            <AboutMe />
                        </TabPane>
                        <TabPane tabId='Experience'>
                            <Experience />
                        </TabPane>
                        <TabPane tabId='Education'>
                            <Education />
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        )
    }
}

export default Profile;