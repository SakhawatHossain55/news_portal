/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useHistory } from 'react-router';

const Sidebar = ({sidebarNews}) => {
    const history = useHistory()
    const {name, author, _id} = sidebarNews;

    const handleServiceClick = () => {
        history.push(`/singleSidebarNews/${_id}`)
    }

    return (
        <div onClick={handleServiceClick} className="sidebarNews border mb-4 rounded p-2">
            <img src={`data:image/jpeg;base64,${sidebarNews.image.img}`} />
            <div>
            <h6>{name}</h6>
            <p>Author: {author}</p>
            </div>
        </div>
    );
};

export default Sidebar;