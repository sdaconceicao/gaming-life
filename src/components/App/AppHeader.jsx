import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export class AppHeader extends Component {

    render() {

        return (
            <AppBar title="My Gaming Life"
                    iconElementRight={<AppHeaderMenu/>}
                    />
        );
    }
}


export class AppHeaderMenu extends Component{


    render(){
        return (
        <IconMenu
            {...this.props}
            iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

            <MenuItem primaryText="Sign out" />
        </IconMenu>
        )
    }
}