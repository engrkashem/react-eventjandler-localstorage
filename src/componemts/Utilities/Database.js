//MAnage Local Storage or data base


const addToDb = (id) => {
    let friends = {};

    //get the friendlist
    const friendList = localStorage.getItem('friend-list');
    if (friendList) {
        friends = JSON.parse(friendList)
    }

    //add quentity
    const quentity = friends[id];
    if (quentity) {
        friends[id] = quentity + 1
    }
    else {
        friends[id] = 1
    }

    localStorage.setItem('friend-list', JSON.stringify(friends))
}

const removeFromDb = id => {
    const existFriendListStr = localStorage.getItem('friend-list');
    const existFriendList = JSON.parse(existFriendListStr);
    if (id in existFriendList) {
        delete existFriendList[id]
        localStorage.setItem('friend-list', JSON.stringify(existFriendList));
    }

}

const emptyDb = () => localStorage.removeItem('friend-list');


const getTotalFriends = () => {
    const totalFriend = localStorage.getItem('friend-list');
    if (totalFriend) {
        return JSON.parse(totalFriend);
    }
}


export {
    addToDb,
    removeFromDb,
    emptyDb,
    getTotalFriends
}