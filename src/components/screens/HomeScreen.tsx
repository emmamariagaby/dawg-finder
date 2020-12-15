import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';

/*
First page for webapp
 */

class HomeScreen extends React.Component {
    render() {
        return (
            <>
                <Header cssClass="homeScreen" />
                <Container cssClass="homeScreen">
                    <p>Looking for a dog friend?</p>
                    <p>Take the test to find out which breed suits you best!</p>
                    <ErrorBoundary>
                        <div className="rowButtons">
                            <Button to='/find-your-dog'>Find your dog!</Button>
                            <Button to='/dogs'>Dog breeds</Button>
                        </div>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default HomeScreen;
