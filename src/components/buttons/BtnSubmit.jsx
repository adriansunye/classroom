import React, {useState} from 'react';
const BtnSubmit = (props) => {

return(
    <button type ="submit" className="btn btn-success">{props.buttonText}</button>
)
};
export default BtnSubmit;