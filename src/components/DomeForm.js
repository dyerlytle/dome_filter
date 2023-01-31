import React from 'react';
import {
    Form,
    Row,
    Col,
    Button,
    Badge
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DomeForm.css';

function DomeForm() {

    return (

        <Form className="domeform">
            <Form.Text className="domeform_text"> Dome Control </Form.Text>
            <p />
            <p />
            <Row className="align-items-top">
                <Col className="buttoncolumn" lg={{ span: 2, offset: 1 }}>
                    <Row>
                        <Button size="sm">Connect/Disconnect</Button>
                    </Row>
                    <p />
                    <Row>
                        <Button size="sm">Home</Button>
                    </Row>
                    <p />
                    <Row>
                        <Button size="sm">Open</Button>
                    </Row>
                    <p />
                    <Row>
                        <Button size="sm">Close</Button>
                    </Row>
                    <p />
                    <Row>
                        <Button size="sm">Follow</Button>
                    </Row>
                    <p />
                    <Row>
                        <Button size="sm">Unfollow</Button>
                    </Row>
                    <p />

                </Col>
                <Col style={{ border: 2 }} className="buttoncolumn2" lg={{ span: 2, offset: 2 }}>
                    <Row className="statlab">
                        <div className="connection">
                            State: Unconnected
                        </div>
                    </Row>
                    <p />
                    <Row className="statlab">
                        <div className="home">
                            Home: true
                        </div>
                    </Row>
                    <p />
                    <Row className="statlab">
                        <div className="shutter">
                            Shutter: closed
                        </div>
                    </Row>
                    <p />
                    <Row className="statlab">
                        <div className="rotation">
                            Rotation: settled
                        </div>
                    </Row>
                    <p />
                    <Row className="statlab">
                        <div className="azimuth">
                            Azimuth: 127
                        </div>
                    </Row>
                </Col>
            </Row>
        </Form>

    )
}

export default DomeForm;