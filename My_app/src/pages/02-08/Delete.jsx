import React from "react";


const Delete = ({ onConfirm, onCancel }) => {
    return (
        <div
            style={{
                margin: "auto",
                height: "200px",
                width: "400px",
                backgroundColor: "white",
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
        >
            <h2 style={{ color: "black" }}>Are you sure you want to delete this todo?</h2>
            <button onClick={onConfirm} style={{ margin: "10px", padding: "10px" }}>
                Yes
            </button>
            <button onClick={onCancel} style={{ margin: "10px", padding: "10px" }}>
                NO
            </button>
        </div>
    );
};

export default Delete;