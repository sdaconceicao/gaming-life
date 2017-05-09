import React from 'react';
import './InlineRadioBtn.scss';

export const InlineRadioBtn = (props) => {
    const {label, checked, name, clickHandler, children} = props;
    return (
        <fieldset className="form-check form-check-inline">
            <label className="form-check-label">
                <input className="form-input-radio" type="radio" defaultChecked={checked} name={name} onClick={clickHandler}/>
                {label}
                {children}
            </label>
        </fieldset>
    );
};

export default InlineRadioBtn;