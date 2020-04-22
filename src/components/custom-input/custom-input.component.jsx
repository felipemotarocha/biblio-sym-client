import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        ></input>
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? "shrink" : ""
                } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default CustomInput;
