import React from 'react';
import Image from 'next/image';
import "./qrcode.css"

const qrcode = () => {
    return (
        <div className="container">
            <div className="body">
                <div className="image">
                    <Image src="/image-qr-code.png" alt="qrcode" width={200} height={400} priority />
                </div>
                <div className='text'>
                    <h1>Improve your frontend skills by building projects</h1>
                    <p>Scan the QR code to visit frontendmentor.io and take your codeing skills to next level</p>
                </div>
            </div>
        </div>
    )
}

export default qrcode
