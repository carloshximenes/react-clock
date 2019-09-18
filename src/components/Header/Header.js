import React from 'react';

export default function Header(props) {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px'
    };
    return <div style={style}> {props.title} </div>;
}