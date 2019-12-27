import React from 'react';
import 'components/Tick.scss';

const Tick = (props) => {
    const { label, style } = props;

    return (
        <div className='tick' style={style}>{label}</div>
    );
}

export default Tick;