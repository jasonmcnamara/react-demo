import styles from './Characters.css';

import React from 'react';


function Characters(props) {
    
    return (
        <div onClick={props.show} name={props.name} className={styles.character}><img name={props.name} src={props.character} /></div>
    )
}

export default Characters;