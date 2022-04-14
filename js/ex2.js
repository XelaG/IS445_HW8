function fetchData(githubUsername) {
    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(res => {
            return res.json();
        })
        .catch(e => console.error(e))
        .then(data => {
            console.log(data);
            var name = document.getElementById('name')
            while(name.firstChild) name.removeChild(name.firstChild)
            name.appendChild(document.createTextNode(data.name))
            var blog = document.getElementById('blog')
            while(blog.firstChild) blog.removeChild(blog.firstChild)
            blog.appendChild(document.createTextNode(data.blog))
            var created = document.getElementById('created')
            while(created.firstChild) created.removeChild(created.firstChild)
            created.appendChild(document.createTextNode(data.created_at))
            var profilePic = document.getElementById('profilePicture')
            profilePic.src = data.avatar_url
            console.log("🚀 ~ file: ex2.js ~ line 16 ~ fetchData ~ profilePic", profilePic.src)
        });
}

function getInfo() {
    var username = document.getElementById('githubUsername').value
    fetchData(username)
}