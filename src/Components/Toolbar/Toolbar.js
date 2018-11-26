import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Toolbar.css';

class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            links: [
                {name: "FF4", active: false},
                {name: "FF6", active: false},
                {name: "FF7", active: false},
                {name: "FF9", active: false}
            ]
        }
    }

    // componentDidMount(){
    //     const currentlink = window.location.pathname.split('/')[1];
    //     let thelinks = this.state.links.map((el, index) => {
    //         if(currentlink === el.name.toLowerCase()){
    //             console.log('hey');
    //             el.active = true;
    //         }

    //         return el;
    //     });

        
    // }

    

    render() {

        const currentlink = window.location.pathname.split('/')[2];
        console.log(currentlink);
        let thelinks = this.state.links.map((el, index) => {
            if(currentlink === el.name.toLowerCase()){
                el.active = true;
            } else {
                el.active = false;
            }

            return el;
        });

        let links = null;

        if(this.state.links){
            links = this.state.links.map((link, index) => {
                let slashlink = link.name;
                return <li key={index}>
                            <Link key={index} className={ link.active ? styles.active: null } to={slashlink.toLowerCase()}>
                                {link.name}
                            </Link>
                        </li>
            })
        }

        return (
            <div id="toolbar" className={styles.toolbar}>
                <div id='logo' className={styles.logo}><Link to='/' className={styles.homelogolink}>Logo</Link></div>
                <div id='links' className={styles.links}>
                    <ul>
                        {links}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Toolbar;