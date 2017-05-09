import React from 'react';
import {injectIntl} from 'react-intl';

const TextInput = (props) => {
    const {intl, name, type, onChange, placeholder, value} = props;
    return (
        <input
            type={type || 'text'}
            name={name}
            className="form-control"
            placeholder={placeholder ? intl.formatMessage(placeholder.def, placeholder.values) : ''}
            value={value}
            onChange={onChange}/>
    );
};

export default injectIntl(TextInput);
