import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';
import ResultsContainer from '../ResultsContainer';

/** 
* 
*/
class DogScreen extends React.Component {
    render() {
        return (
            <>
                <Header cssClass="dogScreen" />
                <Container>
                    <ErrorBoundary>
                        <ResultsContainer result="hundraser" />
                        <Button to="/">Home</Button>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default DogScreen;