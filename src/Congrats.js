import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` props is null)
 */
export default (props) => {
    if(props.success){
        return(
            <div data-test="component-congrats">
            <span data-test="congrats-message">
                Congratulations! You have guessed the word!
            </span>
        </div>
        );
    }else{
        return(
            <div data-test="component-congrats"/>  
        );
    } 
}