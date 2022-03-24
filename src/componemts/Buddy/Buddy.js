import React from 'react';
// import { allFriend } from '../Calculate/Calculate';
import { addToDb, emptyDb, /*getTotalFriends,*/ removeFromDb } from '../Utilities/Database';
import './Buddy.css'

const Buddy = props => {
    const { id, name, phone, address, age, company, email, gender } = props.buddy;

    const addFriend = (id) => {

        addToDb(id);

    }

    const removeFriend = id => {
        removeFromDb(id)
    }

    const removeFriendList = () => emptyDb();


    /* const friends = getTotalFriends()
    const friendNumber = allFriend(friends) */


    return (
        <div className='buddy'>
            <h2>{name}</h2>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>ID: {id}</p>
            {/* <p>Total Number Friend: {friendNumber}</p> */}
            <button onClick={() => addFriend(id)} className='btn btn-primary'>Add to Friend</button>
            <button onClick={() => removeFriend(id)} className='btn btn-warning ms-2'>Remove Friend</button>
            <button onClick={removeFriendList} className='btn btn-danger mt-2'>Remove Friend List</button>
        </div>
    );
};

export default Buddy;