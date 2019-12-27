import React from 'react';
import 'components/DashComponent.scss';

const DashComponent = (props) => {
    const { name, label, children } = props;
    let { classes } = props;

    // If no classes given, initialize empty array so the reduce function still
    // works
    if (!classes) { classes = []; }

    return (
        <p className={`dash-component ${name}${classes.reduce((str, cls) => { return str + ' ' + cls; }, '')}`}>
            <span className='title'>{label}:</span>
            {' '}
            <span className='value'>
                {children}
            </span>
        </p>
    );
};

export default DashComponent;