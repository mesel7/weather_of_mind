import React from "react";
import "./LoginModal.css";

const LoginModal = ({ onClose, children }) => {
    return (
        <div className="LoginModal" onClick={onClose}>
            <div className="content_section" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default LoginModal;