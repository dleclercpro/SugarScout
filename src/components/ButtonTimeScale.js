import React from 'react';
import 'components/ButtonTimeScale.scss';

const ButtonTimeScale = (props) => {
    const { updateTimescale } = props.actions;
    const { value, timeScale } = props;

    return (
        <button
            className={`button-timescale scale-${value}-h ${value === timeScale ? 'is-active' : ''}`}
            onClick={() => updateTimescale(value)}
        >
            {value}h
        </button>
    );
};

export default ButtonTimeScale;