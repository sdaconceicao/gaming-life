import React, {PropTypes} from 'react';
import {PlaceholderImage} from '../PlaceholderImage/PlaceholderImage';
import './ProfileIcon.scss';


export const ProfileIcon = ({account, className, onClick}) => {
    return (
        <div className={`profile-image-container ${className}`} onClick={onClick}>
            <PlaceholderImage src={account.image} className="profile-image" alt={`${account.firstname} ${account.lastname}`}/>
        </div>

    );
};

ProfileIcon.propTypes = {
    account: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default ProfileIcon;