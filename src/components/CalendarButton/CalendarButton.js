import React from 'react';

export default function CalendarButton(props) {

    const textCalendar = (props.show) ? 'Hide Calendar' : 'Show Calendar';

    const style = {
        padding: '10px',
        margin: '10px'
    }

    return <><button style={style} onClick={props.clicked}>{textCalendar}</button></>;
}