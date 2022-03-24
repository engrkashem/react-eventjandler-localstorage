const getTotalFriends = friends => {
    if (friends) {
        const numberFrnd = Object.values(friends)
        const total = numberFrnd.reduce((previous, current) => previous + current, 0)
        return total;
    }
}


export { getTotalFriends as allFriend }