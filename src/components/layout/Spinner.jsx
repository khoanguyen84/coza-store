import React from "react";
import loading from '../../assets/images/loading.gif'

export function Spinner() {
    return (
        <div className="loading">
            <img src={loading} alt="" />
        </div>
    )
}