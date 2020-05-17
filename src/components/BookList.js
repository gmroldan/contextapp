import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } =  useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={ { background: theme.bg, color: theme.syntax} }>
            <ul>
                <li style={ { background: theme.ui } }>the way of kings</li>
                <li style={ { background: theme.ui } }>then name of the wind</li>
                <li style={ { background: theme.ui } }>the empire</li>
            </ul>
        </div>
    )
}

export default BookList;

