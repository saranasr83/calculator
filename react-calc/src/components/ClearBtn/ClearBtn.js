import React from "react";
import "./ClearBtn.css"

const ClearBtn = props => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ClearBtn;