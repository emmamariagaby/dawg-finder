import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";
import ResultsContainer from '../ResultsContainer';


class Home extends React.Component {
render() {
    return(
        <>
        <Header />
        <Container>
        <ResultsContainer result="sällskapshund" />
            <Button to='/form'>Form</Button>
            <Button to='/dogscreen'>Dog Page</Button>
        </Container>
        <Footer />
        </>
    );
}
    

};

export default Home;