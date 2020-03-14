import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
// import DogImages from "../DogImages";
import Button from "../Button";
import Footer from "../Footer";
import ErrorBoundary from '../ErrorBoundary';

/** 
* 
*/
class DogScreen extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <ErrorBoundary>
                        {/* <DogImages /> */}
                        <Button to="/">Home</Button>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </>
        );
    }


};

export default DogScreen;