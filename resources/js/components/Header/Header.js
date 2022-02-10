import React, {Component} from "react";
import {Link} from 'react-router-dom';
import HeaderTop from "./HeaderTop";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            isLoggedIn: false
        };

        this.logOutAction = this.logOutAction.bind(this);
    }

    logOutAction() {
        this.setState((state) => {
            this.isLoggedIn = !state.isLoggedIn,
            this.user = {}
        });

        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <HeaderTop />
                <nav className="navbar navbar-expand-sm navbar-light bg-white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Logo</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;