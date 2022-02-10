import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to='/login' className="btn btn-primary btn-sm px-4 me-md-2">Login</Link>
                                <button type="button" className="btn btn-primary btn-sm px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-sm px-4">Default</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;