import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    // font-family: sans-serif, 'Segoe-UI';
    background-color: #FFFFFC;
    text-align: center;
    padding: 2em;
`;

function Header() {
    return(
        < HeaderStyle >
            <h2 className='display-2'><strong>k</strong>abdellah</h2>
            <small className='text-muted'>React.js web development, tools for learning, Python data visualization</small>
        </ HeaderStyle >
    );
}

export default Header;