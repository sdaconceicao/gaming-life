import React, {PropTypes} from 'react';
import {injectIntl} from 'react-intl';

export const I18nText = ({intl, type, id, props, value}) => {
    switch (type) {
        case 'label':
            return <label {...props}>{intl.formatMessage({id}, {value})}</label>;
        case 'h1':
            return <h1 {...props}>{intl.formatMessage({id}, {value})}</h1>;
        default:
            return <span {...props}>{intl.formatMessage({id}, {value})}</span>;
    }
};

I18nText.PropTypes = {
    intl: PropTypes.object.isRequired,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    props: PropTypes.object,
    value: PropTypes.object
};

export default injectIntl(I18nText);