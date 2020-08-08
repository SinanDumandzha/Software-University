function followersData(input) {
    let followersData = {};
    let followersCount = 0;
    let actions = input.slice();
    let action = actions.shift();

    while (action !== 'Log out') {
        let [notification, username, count] = action.split(': ');
        count = Number(count);

        switch (notification) {
            case 'New follower':
                if (!followersData.hasOwnProperty(username)) {
                    followersData[username] = {
                        likes: 0,
                        comments: 0
                    }
                    followersCount++;
                }
                break;

            case 'Like':
                if (followersData.hasOwnProperty(username)) {
                    followersData[username].likes += count;
                } else {
                    followersData[username] = {
                        likes: count,
                        comments: 0
                    }
                    followersCount++;
                }
                break;

            case 'Comment':
                if (followersData.hasOwnProperty(username)) {
                    followersData[username].comments += 1;
                } else {
                    followersData[username] = {
                        likes: 0,
                        comments: 1
                    }
                    followersCount++;
                }
                break;

            case 'Blocked':
                if (followersData.hasOwnProperty(username)) {
                    delete followersData[username];
                    followersCount--;
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
        action = actions.shift();
    }

    console.log(`${followersCount} followers`);

    let sortedFollowersData = Object.entries(followersData).sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));

    for (let follower of sortedFollowersData) {
        console.log(`${follower[0]}: ${follower[1].likes + follower[1].comments}`);
    }
}

followersData(['New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]);