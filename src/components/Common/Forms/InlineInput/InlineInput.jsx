import React from 'react';
import TextInput from '../TextInput';
import I18nText from '../../I18nText/I18nText';
import './InlineInput.scss';

const InlineInput = (props) => {
    const {edit, className, value, type, name, label, onChange} = props;
    return (
        <div className={`${className || ''} inline-edit`}>
            {label && <I18nText type="label" id={label} />}
            {!edit && <div className="inline-edit-value">{value}</div>}
            {edit && <TextInput name={name}
                           className="form-control"
                           type={type}
                           value={value}
                           onChange={onChange}/>}
        </div>
    );
};

export default InlineInput;
