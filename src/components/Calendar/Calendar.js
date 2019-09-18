import React from 'react';

export default function Calendar(props) {

    return (props.show) ? <div>{props.value}</div> : null;

}