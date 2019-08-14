import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';

/** Internationalization component to render text in a chosen language via the IntlProvider */
export const I18nText = (props) => {
    const {intl, type, textId, values, ...elProps} = props;
    switch (type) {
        case 'label':
            return <label {...elProps}>{intl.formatMessage({id: textId}, values)}</label>;
        case 'h1':
            return <h1 {...elProps}>{intl.formatMessage({id: textId}, values)}</h1>;
        case 'option':
            return <option {...elProps}>{intl.formatMessage({id: textId}, values)}</option>;
        default:
            return <span {...elProps}>{intl.formatMessage({id: textId}, values)}</span>;
    }
};

I18nText.propTypes = {
    id: PropTypes.string,
    intl: PropTypes.object,
    type: PropTypes.string,
    /** Id of text property to use */
    textId: PropTypes.string.isRequired,
    /** Additional name/value pares that are part of a translation */
    values: PropTypes.object
};

export default injectIntl(I18nText);