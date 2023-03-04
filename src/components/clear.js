import React from "react";
import '../stylesheets/clear.css'

const Clear = (props) => (
    <div className='button-clear' onClick={props.doClear}>
        {props.children}
    </div>
);

export default Clear;