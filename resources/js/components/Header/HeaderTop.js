import React, {Component} from "react";

class HeaderTop extends Component {
    render() {
        return(
            <div className="header-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-lg-flex justify-content-between">
                            <div className="header-top-text d-none d-md-block">Call Us: +92 (303) 5850 535</div>
                            <div className="header-top-text">Free Shipping on all orders worth Rs. 2000 & above</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;