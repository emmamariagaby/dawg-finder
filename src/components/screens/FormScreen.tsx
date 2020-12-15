import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Form from "../Form";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';

/*
FormScreen is holding everything related to form
*/
class FormScreen extends React.Component {
    render() {
        return (
            <>
                <Header cssClass="formScreen" />
                <Container>
                    <ErrorBoundary>
                        <Form>
                            <Button className="secondaryButton" to="/">Home</Button>
                        </Form>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default FormScreen;