import React from "react";

export interface ErrorBoundaryState {
    error: Error | null
    errorInfo: React.ErrorInfo | null
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    render() {
        return (
            this.state.errorInfo !== null ?
                <div>
                    <h2>Woof! Woof? Something went wrong...</h2>
                </div> :
                this.props.children
        )
    }

    /**
     * Catches errors and logs in the console.
     * @param error The error that occured.
     * @param errorInfo Info on said error.
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.log(error, errorInfo, errorInfo.componentStack);
    }
}