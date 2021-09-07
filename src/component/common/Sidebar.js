/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Sidebar = ({sidebarNews}) => {
    const {name, author} = sidebarNews;
    return (
        <div className="sidebarNews border mb-3 rounded p-2">
            <img src={`data:image/jpeg;base64,${sidebarNews.image.img}`} />
            <div>
            <h6>{name}</h6>
            <p>Author: {author}</p>
            </div>
        </div>
    );
};

export default Sidebar;