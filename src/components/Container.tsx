import * as React from "react";

import "../styles/main.css"

export interface ContainerState {
	windowWidth: number
	windowHeight: number
	fadeOut: boolean
}

export interface ContainerProps { }

class Container extends React.Component<ContainerProps, ContainerState> {
	constructor(props: ContainerProps) {
		super(props);
		this.state = {
			windowWidth: 0,
			windowHeight: 0,
			fadeOut: false,
		}

		this.updateScreenSize = this.updateScreenSize.bind(this);
	}

	render() {
		return (
			<div className={`container ${this.getClassName()}`}>
				{this.props.children}
			</div>
		);
	}

	componentDidMount() {
		this.updateScreenSize();
		window.addEventListener("resize", this.updateScreenSize);

	}

	updateScreenSize() {
		this.setState({
			windowWidth: (window.innerWidth != undefined) ? window.innerWidth : 0,
			windowHeight: (window.innerHeight != undefined) ? window.innerHeight : 0,
		})
	}

	getClassName() {
		if (this.state.windowWidth < 640) {
			return "minScreen";
		}
		else {
			return "medScreen";
		}
	}

	componentWillUnmount() {
		console.log("unmount");
		
		this.setState({
			fadeOut: true
		})
		window.removeEventListener("resize", this.updateScreenSize);
	}
}

export default Container;