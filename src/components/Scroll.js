import React, {useState, useEffect } from 'react';
import { makeStyles  } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

//Styling
const useStyles = makeStyles((theme) => ({
    scrollTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#31EBE7',
        color: 'black',
        "$:hover, $.Mui-focusVisible": {
            transition: '0.3s',
            color: '#D231EB',
            backgroundColor:'#31EBE7'
        },
        right: '5%',
    }
}));


const Scroll = (showBelow) => {
    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if(!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    });


    
    
    return (
        <div>
            
            <IconButton onClick={handleClick} className={classes.scrollTop} >
                <ExpandLess />
            </IconButton>
            
        </div>
    )
}

export default Scroll;
