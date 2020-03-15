import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';


class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <ErrorBoundary>
                        <Button to='/form'>Form</Button>
                        <Button to='/dogscreen'>Dog Page</Button>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default Home;