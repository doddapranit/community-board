import React from 'react';


function AlbumCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img className = "image" src={props.cover} alt={props.title} />
                <div className= "info">{props.title}</div>
                <div className= "info">{props.artist}</div>
            </div>
        </div>
    );
}

export default AlbumCard;