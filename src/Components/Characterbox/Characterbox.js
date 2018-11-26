import styles from './Characterbox.css';

import React, { Component } from 'react';
import Charactermodal from './Charactermodal/Charactermodal';
import Characters from './Characters/Characters';
import Charactersummary from './Charactersummary/Charactersummary';
import * as Images from './Characters/Images';


class Characterbox extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            game: props.location.pathname.split('/')[1],
            showmodal: false,
            charpicked: 'charname'
        }
        console.log('constructor running');
        this.characters = null;
        this.characterarray = [];
        this.characterarray['ff4'] = [];
        this.characterarray['ff7'] = [];
        this.characterarray['ff9'] = [];
        this.characterarray['ff6'] = ['Terra_Branford', 'Locke_Cole', 'Celes_Chere', 'Edgar_Figaro', 'Sabin_Figaro', 'Cyan_Garamonde', 'Shadow', 'Gau', 'Setzer_Gabbiani', 'Strago_Magus', 'Relm_Arrowny', 'Mog', 'Gogo', 'Umaro', 'Kefka_Palazzo',
        'Ultros', 'Chupon', 'Leo_Christophe',
        'Banon', 'Cid_Marquez', 'Emperor_Gestahl','Maduin', 'Madonna', 'The_Warring_Triad'];
 
    }

    showModal = (event) => {
        console.log('showModal clicked');
        console.log(event.target.getAttribute('name'));
        this.setState({charpicked: event.target.getAttribute('name')});
        this.setState({showmodal: true});
    }

    closeModal = () => {
        this.setState({showmodal: false});
    }

    // componentWillReceiveProps(){
    //     let newState = {...this.state, game: this.props.history.location.pathname.split('/')[1]};
    //     this.setState({game: newState.game});
    // }
    
    

    static getDerivedStateFromProps(nextProps,prevProps) {
        console.log(nextProps);
        console.log(prevProps);
        return {game: nextProps.location.pathname.split('/')[1]};
    }

    componentDidMount(){
        console.log('did mount');
    }

    render() {
        
        this.characters = this.characterarray[this.state.game].map((element, index) => {
            return <Characters name={element} show={this.showModal} key={index} character={Images[element]} /> 
        })

        return (

            
            <div className={styles.content}>
                <Charactermodal pickedchar={this.state.charpicked} showThis={this.state.showmodal} modalClosed={this.closeModal}>
                    <h2>{this.state.charpicked.replace(/_/g, ' ')}</h2>
                    <Charactersummary>{this.state.charpicked}</Charactersummary>
                </Charactermodal>
                <p>{this.state.game.toUpperCase()}</p>
                <div className={styles.characterbox} >
                    {this.characters}
                </div>
            </div>
        );
    }
}

export default Characterbox;