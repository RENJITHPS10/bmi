import React from 'react'
import coverMale from '../assets/cover.png';
import coverFemale from '../assets/cover4.png';

function Cover({gender}) {
    const imageUrl = gender === 'male' ? coverMale : coverFemale
    return (
        <>
            <div className="position-relative" >
                <img src={imageUrl} alt="" width="100%" height="630px" className='position-relative' style={{ zIndex: 2 }} />
                <div
                    className="bgrect  position-absolute"
                    style={{ top: 0, left: '30%', height: '628px', zIndex: 1, width: '40%' }}
                ></div>
            </div>
        </>
    )
}

export default Cover
