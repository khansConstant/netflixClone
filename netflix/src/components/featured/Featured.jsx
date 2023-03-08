import React from 'react'
import "./featured.scss"
import img from "../../assets/images/background.jpg"
import ball from "../../assets/images/dbz.png"
import { InfoOutlined, PlayArrow } from '@material-ui/icons'


const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={img} alt="" />
            <div className="info">
                <img src={ball} alt="" className="infImg" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam earum nisi nihil nam ut minus laboriosam ab. Pariatur eligendi quos cupiditate, totam odio consequatur maxime. Alias ipsa magni dolores labore?
                </span>
                <div className="button">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured