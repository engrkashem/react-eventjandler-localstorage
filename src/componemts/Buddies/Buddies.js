import React, { useEffect, useState } from 'react';
import Buddy from '../Buddy/Buddy';
import './Buddies.css'

const Buddies = () => {
    const [buddies, setBuddies] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBuddies(data))
    }, []);
    return (
        <div className='buddies'>
            {
                buddies.map(buddy => <Buddy
                    buddy={buddy}
                    key={buddy.id}
                ></Buddy>)
            }
        </div>
    );
};

export default Buddies;