import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardElement from './CardElement';
import { apiCall } from './../utils/utils';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
});

const Main = () => {
    const classes = useStyles();
    const [statuses, setStatuses] = useState({'mongo':false, 'redis': false});

    useEffect(() => {
        fetchValues();
    }, []);

    const fetchValues = async () => {

        apiCall('/api/redis', 'redis', setStatuses);
        apiCall('/api/mongo', 'mongo', setStatuses);

    }

    return (
        <div className={classes.container}>
            {Object.keys(statuses).map(key => 
                <CardElement
                    key={key}
                    name={key}
                    status= {statuses[key]}
                >
                </CardElement>
            )}
        </div>
    );
};

export default Main;