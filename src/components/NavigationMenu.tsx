import React from "react";

export interface NavigationMenuState {
    showMenu: boolean
}

export interface NavigationMenuProps {
    children: React.ReactNode;
}

class NavigationMenu extends React.Component<NavigationMenuProps, NavigationMenuState> {
    constructor(props: NavigationMenuProps) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    render() {
        return (
            <nav>
                <Circle />
                {this.state.showMenu ? this.props.children : null}
            </nav>
        )
    }

    componentDidMount() {
        document.getElementsByClassName("circle")[0].addEventListener("click", () => {
            this.setState(currentState => ({
                showMenu: !currentState.showMenu
            }));
        });
    }

    componentWillUnmount() {
        document.getElementsByClassName("circle")[0].removeEventListener("click", () => {
            this.setState(currentState => ({
                showMenu: !currentState.showMenu
            }));
        });
    }
}

export const Circle = () => {
    return (
        <svg className="circle">
            <ellipse ry="8" rx="8" id="svg_1" cy="10" cx="10" strokeWidth="1.5" stroke="#000" fill="#fff" />
        </svg>
    )
}

export default NavigationMenu;