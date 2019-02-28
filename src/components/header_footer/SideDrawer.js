import React from 'react';
import {scroller} from 'react-scroll'; 

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {

    const scrollToElement = (elements) => {
            scroller.scrollTo(elements,{
                duration:1500,
                delay:100,
                smooth: true,
                offset: -150
            })
            props.onClose(false)
    }



    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose= {()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('event')}>
                    Event Starts In
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('venue')}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('price')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;