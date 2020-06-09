import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import clsx from  'clsx';

const useStyles = makeStyles({
    card: {
        width: 275,
        height: 300,
        margin: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    success: {
        color: '#009688'
    },
    error: {
        color: '#f44336'
    },
    server: {
        fontSize: 40,
        margin: 10,
    }
});


const CardElement = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {( props.status && props.status === true) ? (
                <FontAwesomeIcon className={clsx(classes.server, classes.success)} icon={faServer}></FontAwesomeIcon>
            ) : ( 
                <FontAwesomeIcon className={clsx(classes.server, classes.error)} icon={faServer}></FontAwesomeIcon>
            )}
            <span>{props.name}</span>

            {( props.status && props.status === true) ? (
                <div>
                    <span>is online</span>
                </div>
            ) : (
                <div>
                    <span>is offline</span>
                </div>
            ) }
        </Card>
    );
};

export default CardElement;