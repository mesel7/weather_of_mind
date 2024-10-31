import React from "react";
import "./LoginForm.css";
import Button from "../common/Button";

const LoginForm = ({ type, value, onChange, placeholder, maxLength, btnText, onSubmit }) => {
    return (
        <div className="LoginForm">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
            />
            <Button text={btnText} onClick={onSubmit} />
        </div>
    )
};

export default React.memo(LoginForm);