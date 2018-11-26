import React from 'react';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Summaries from '../../Summaries/Summaries';

const charactersummary = (props) => {

    console.log(Summaries['Terra_Branford'].phrase);

    return(
            <Auxillary>
                {Summaries[props.children].phrase}
                {Summaries[props.children].summary}
            </Auxillary>
            )
        
}

export default charactersummary;