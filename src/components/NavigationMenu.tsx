import React from "react";

export interface NavigationMenuState {
    showMenu?: boolean;
    transition: string;
}

export interface NavigationMenuProps {
    children: React.ReactNode;
}

class NavigationMenu extends React.Component<NavigationMenuProps, NavigationMenuState> {
    constructor(props: NavigationMenuProps) {
        super(props);
        this.state = {
            showMenu: true,
            transition: "fadeOut"
        }
    }

    render() {
        return (
            <>
                <MenuIcon />
                {this.state.showMenu ?
                    <div className={this.state.transition}>
                        {this.props.children}
                    </div> : null}
            </>
        )
    }

    componentDidMount() {
        document.getElementsByClassName("MenuIcon")[0].addEventListener("click", this.handleClick);
    }

    handleClick = () => {
        this.state.showMenu ?
            (this.setState({ transition: "fadeOut" }),
                setTimeout(() => {
                    this.setState({
                        showMenu: false
                    })
                }, 500)) : this.setState({ showMenu: true, transition: "fadeIn" })
    }
}

export const MenuIcon = () => {
    console.log(onclick)
    return (
        <span className="MenuIcon">
            <img src="src/assets/icons/bone.svg" />
            <span>Menu</span>
        </span>
    )
}

export default NavigationMenu;