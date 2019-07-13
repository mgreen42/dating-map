import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, name }) =>  (
    <div>
        <Link to={`/play/${id}`}>
            <h3>{name}</h3>
        </Link>
    </div>
);
