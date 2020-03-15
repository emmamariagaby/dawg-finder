import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Form from "../Form";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';

/** 
* 
*
*/
class FormScreen extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <ErrorBoundary>
                        <Form />
                        <Button to="/">Home</Button>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default FormScreen;