import React from 'react';
import PropTypes from 'prop-types';
import MdCheckCircle from 'react-icons/lib/md/check-circle';

import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import styles from './GameCard.scss';

export const GameCard = (props) =>{
    const {className, title, image, aspect, completed} = props;
    return (
        <div className={`${styles[aspect]} ${className}`}>
            <h4 className={styles.title}>{title}</h4>
            <PlaceholderImage src={image} alt={title} />
            {completed && <span className={styles.completed}><MdCheckCircle/></span> }
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