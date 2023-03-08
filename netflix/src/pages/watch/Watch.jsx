import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video src='https://player.vimeo.com/progressive_redirect/playback/741503591/rendition/360p/file.mp4?loc=external&oauth2_token_id=1027659655&signature=d2247c4f58165a160dc33ef99dc0bd094866a505acd6666bb658a20a77f87d6d' className="video" autoPlay progress controls />
        </div>
    )
}

export default Watch