import React from 'react'
import "./qrcode.css"
const qrcode = () => {
    return (
        <div className="container">
            <div className="body">
                <div className="image">
                    <img src="./images/image-qr-code.png" placeholder="qr code" alt="qrcode" />
                </div>
                <h4>Improve your frontend skills by building projects</h4>
                <p>Scan the QR code to visit frontendmentor.io and take your codeinh skills to next level</p>
            </div>
        </div>
    )
}

export default qrcode
