import React from 'react'
import './components/album.css';
/*import data from './data.json' */

/*console.log(data)
console.log(data.album.items[1])*/

/*const divStyle = {
    color: 'blue'
    backgroundImage: 'url(' + data.albums.items[1].images[0].url + ')',
    backgroundSize: 'cover',
    height: '200px',
    width: '200px',
};*/

/*export const Album = (props) => {
    return (
        <div className="album">
            <img src={props.image} />
            <div>
                {props.name}
            </div>
            <div>
                {props.artists}
            </div>
        </div>
    )
}*/

export const Album = (props) => {
    return (

        <div>
            <div className="album-cover">
                <img className="album-img" src={props.image} alt="Album" />
                {/* { <div className="icons">
                    <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
                    <img className="icon-play" src="icons/play.svg" alt="Play" />
                    <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
                </div> } */}
            </div>

            <div className="album-info">
                <div className="album-title">
                    <a href={props.albumURL}>{props.albumTitle}</a>
                </div>
            </div>
        </div>
    )

}

