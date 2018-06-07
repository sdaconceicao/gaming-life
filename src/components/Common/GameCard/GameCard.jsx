import React from 'react';
import PropTypes from 'prop-types';
import MdCheckCircle from 'react-icons/lib/md/check-circle';

import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './GameCard.scss';

export const GameCard = (props) =>{
    const {className, title, image, aspect, completed} = props;
    return (
        <div className={`gamecard ${aspect} ${className}`}>
            <h4 className={'title'}>{title}</h4>
            <PlaceholderImage src={image} alt={title} />
            {completed && <span className={'completed'}><MdCheckCircle/></span> }
        </div>
    )

};

GameCard.propTypes = {
    /* game name */
    title: PropTypes.string.isRequired,
    /* game boxart */
    image: PropTypes.string,
    /* aspect ratio of boxart, portrait, landscape, or square */
    aspect: PropTypes.string.isRequired,
    /* game beaten */
    completed: PropTypes.bool.isRequired
};

GameCard.defaultProps = {
    aspect: 'portrait',
    played: false
};

export default GameCard;