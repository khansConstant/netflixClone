import React, { useState } from 'react'
import "./listItem.scss"
import ball from "../../assets/images/poster.jpg"
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@material-ui/icons'

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/progressive_redirect/playback/741503591/rendition/360p/file.mp4?loc=external&oauth2_token_id=1027659655&signature=d2247c4f58165a160dc33ef99dc0bd094866a505acd6666bb658a20a77f87d6d"
    const item = {

    }
    return (


        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={ball} alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14min </span>
                            <span className='limit'>+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolor veniam consequatur at optio commodi,
                        </div>


                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
