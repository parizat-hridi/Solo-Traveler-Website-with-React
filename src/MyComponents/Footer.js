import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "90vh",
        width: "100%",
        
    }
    return (
        <div className= "bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; SoloTravelerbyHridi.com
            </p>
            
        </div>
    )
}
