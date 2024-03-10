import { useEffect, useState } from "react";

function Friends({ username, token }) {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [FriendsList, setFriendList] = useState([]);
    const [PendingList, setPendingList] = useState([]);

    const sendToServer = async (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);
            let friend = e.target.value;
            const res = await fetch('http://localhost:5000/api/Users/' + friend + "/friends", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': "bearer " + token,
                }
            });
            const data = await res.json();
            if (data === null) {
                console.log("error");
            } else {
                setFriendList(data.FriendList);
                setPendingList(data.PendingList);
                e.target.value = ''; // Clear the input field
            }
        }
    }

    const accept = async (friendName) => {
        const res = await fetch('http://localhost:5000/api/Users/' + username + "/friends/" + friendName, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': "bearer " + token,
            }
        });
        const data = await res.json();
        if (data === null) {
            console.log("error");
        } else {
            setFriendList(data.FriendList);
            setPendingList(data.PendingList);
        }
        // Logic to accept friend request
        console.log("Accepted:", friendName);
    };

    const decline = async (friendName) => {
        const res = await fetch('http://localhost:5000/api/Users/' + username + "/friends/" + friendName, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': "bearer " + token,
            }
        });
        const data = await res.json();
        if (data === null) {
            console.log("error");
        } else {
            // Check if the friend is in the FriendsList, if so, remove it
            if (FriendsList.includes(friendName)) {
                const updatedFriendsList = FriendsList.filter(friend => friend !== friendName);
                setFriendList(updatedFriendsList);
            }
            setPendingList(data.PendingList);
        }
        // Logic to decline friend request or remove a friend
        console.log("Declined:", friendName);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:5000/api/Users/' + username, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': "bearer " + token,
                    }
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const json = await res.json();
                setUserData(json);
                setFriendList(json.friends.FriendList.map(friend => (
                    <div key={friend} style={{ display: 'flex', alignItems: 'center' }}>
                        <div className={"name"}>{friend}</div>
                        <button className={"nameBtn"} onClick={()=> decline(friend)}>x</button>
                    </div>
                )));
                setPendingList(json.friends.PendingList.map(pending => (
                    <div key={pending} style={{ display: 'flex', alignItems: 'center' }}>
                        <div className={"name"}>{pending}</div>
                        <button className={"nameBtn"} onClick={() => accept(pending)}>v</button>
                        <button className={"nameBtn"} onClick={() => decline(pending)}>x</button>
                    </div>
                )));
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();
    }, [username, token, FriendsList]); // Added FriendsList to dependency array to trigger useEffect when FriendsList changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <input className={"search"} placeholder="Find friends" onKeyPress={sendToServer}></input>
            <h3>Friends</h3>
            {FriendsList.length > 0 ? FriendsList : <p>No friends</p>}
            <h3>Pending</h3>
            {PendingList.length > 0 ? PendingList : <p>No pending requests</p>}
        </div>
    );
}

export default Friends;
