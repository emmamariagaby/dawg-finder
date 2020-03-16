import * as React from "react";

import { HeaderProps } from "./Header";

export interface ContainerState {
	windowWidth: number;
	windowHeight: number;
	fadeOut: boolean;
}

export interface ContainerProps extends HeaderProps {
	children: React.ReactNode;
}

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
			<div className={`container 
				${this.getClassName()} 
				${this.props.cssClass ? this.props.cssClass : ""}`}>
				{this.props.children}
			</div>
		);
	}

	/**
	 * Update screen size and add event listener for window resize.
	 */
	componentDidMount() {
		this.updateScreenSize();
		window.addEventListener("resize", this.updateScreenSize);

	}

	/**
	 * Updates screen size in state.
	 */
	updateScreenSize() {
		this.setState({
			windowWidth: (window.innerWidth != undefined) ? window.innerWidth : 0,
			windowHeight: (window.innerHeight != undefined) ? window.innerHeight : 0,
		});
	}

	/**
	 * Adds class name depending on window width in state.
	 */
	getClassName() {
		if (this.state.windowWidth < 640) {
			return "minScreen";
		}
		else {
			return "medScreen";
		}
	}

	/**
	 * Fades out component and removes event listener on unmount.
	 */
	componentWillUnmount() {
		this.setState({
			fadeOut: true
		})
		window.removeEventListener("resize", this.updateScreenSize);
	}
}

export default Container;