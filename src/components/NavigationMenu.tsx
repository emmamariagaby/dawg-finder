import React from "react";

export interface NavigationMenuState {
    showMenu?: boolean;
    transition: string;
}

export interface NavigationMenuProps {
    children: React.ReactNode;
}

// Web app menu 

class NavigationMenu extends React.Component<NavigationMenuProps, NavigationMenuState> {
    constructor(props: NavigationMenuProps) {
        super(props);
        this.state = {
            showMenu: false,
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

    /** Add event listener to nav bar on mount. */
    componentDidMount() {
        document.getElementsByClassName("MenuIcon")[0].addEventListener("click", this.handleClick);
    }

    /** Handles on click event and toggles classes to fade in/out menu links.  */
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

/**
 * Functional component only used here in NavigationMenu.
 */
export const MenuIcon = () => {
    return (
        <span className="MenuIcon">
            <img src="src/assets/icons/bone.svg" />
            <span>Menu</span>
        </span>
    )
}

export default NavigationMenu;