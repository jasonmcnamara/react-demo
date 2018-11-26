import React from 'react';
import styles from './Charactermodal.css';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Backdrop from '../../Backdrop/Backdrop';

const charactermodal = (props) => {

        console.log(props);
    
        if(props.pickedchar == 'charname')
        {
            console.log('from charactermodal null');
            return null;
        }
    
    return <Auxillary>
                <Backdrop show={props.showThis} clicked={props.modalClosed} />
                <div onClick={props.modalClosed} className={styles.charactermodal} 
                    style={{
                        opacity: props.showThis ? '1' : '0',
                        zIndex: props.showThis ? '500' : '-10'
                    }}>
                    {props.children}
                </div>
            </Auxillary>
};

export default charactermodal;