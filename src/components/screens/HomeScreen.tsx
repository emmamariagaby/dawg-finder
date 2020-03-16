import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';

class HomeScreen extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <ErrorBoundary>
                        <Button to='/find-your-dog'>Find your dog!</Button>
                        <Button to='/dogs'>Dog breeds</Button>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default HomeScreen;