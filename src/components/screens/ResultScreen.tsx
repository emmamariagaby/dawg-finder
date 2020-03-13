import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import ResultsContainer from "../ResultsContainer";
import Button from "../Button";
import Footer from "../Footer";

 /** 
 * 
 */
class ResultScreen extends React.Component {
render() {
    return(
        <>
        <Header />
        <Container>
            <ResultsContainer result="jakt" />
            <Button to='/form'>Do the test again!</Button>
            <Button to='/dogscreen'>Dog Page</Button>
        </Container>
        <Footer />
        </>
    );
}
    

};

export default ResultScreen;