import * as React from "react";

import "../styles/main.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    Repository <a href="https://github.com/emmamariagaby/dawg-finder">link</a>. Icons made by Freepik @ flaticon.com.
                </p>
                <p>
                    Created by <a href="https://github.com/AVLarsson">AVLarsson</a>
                    , <a href="https://github.com/emmamariagaby">emmamariagaby</a>
                    , <a href="https://github.com/boggzer">boggzer</a> @ github.
                </p>
            </div>
        );
    }
}

export default Footer;