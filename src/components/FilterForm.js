import React from 'react';
import {
    Form,
    Row,
    Col,
    Badge,
    Button,
    ButtonGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilterForm.css';

function FilterForm() {

    return (

        <Form className="filterform">
            <Form.Text className="filterform_text"> Filter Wheel Control </Form.Text>
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
                        <ButtonGroup vertical>
                            <Button variant="outline-primary" size="sm">V</Button>
                            <Button variant="outline-primary" size="sm">R</Button>
                            <Button variant="outline-primary" size="sm">B</Button>
                            <Button variant="outline-primary" size="sm">U</Button>
                            <Button variant="outline-primary" size="sm">I</Button>
                            <Button variant="outline-primary" size="sm">Slone-z</Button>
                            <Button variant="outline-primary" size="sm">Yish</Button>
                            <Button variant="outline-primary" size="sm">CN</Button>
                            <Button variant="outline-primary" size="sm">OH</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
                <Col style={{ border: 2 }} className="buttoncolumn2" lg={{ span: 2, offset: 2 }}>

                    <Row>
                        <Badge bg="dark">disconnected</Badge>
                    </Row>
                    <p />
                    <Row>
                        <Badge bg="dark">settled</Badge>
                    </Row>
                    <p />
                    <Row>
                        <Form.Text className="filterform_text2">
                            Current Filter
                        </Form.Text>
                    </Row>
                    <Row>
                        <Badge bg="dark">R</Badge>
                    </Row>
                </Col>
            </Row>
        </Form >
    )
}

export default FilterForm;