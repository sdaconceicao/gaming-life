import React from 'react';
import {injectIntl} from 'react-intl';

const Button = (props) => {
    const {intl, className, name, text, onClick, type} = props;
    return (
        <button
            type={type || 'button'}
            name={name}
            className={ `${className} btn`}
            onClick={onClick}>
            {intl.formatMessage(text.def, text.values)}
        </button>
    );
};

export default injectIntl(Button);
