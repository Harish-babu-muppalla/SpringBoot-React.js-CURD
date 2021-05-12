import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state={

        }

    }
    render() {
        return (
            <div>
                <footer className="footer bg-dark text-center text-white">
                <div className="container p-1">
                <span className="text-muted">SpringBoot and react CRUD Application</span>
                </div>
                </footer>
                
            </div>
        );
    }
}

export default FooterComponent;