document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const userName = document.getElementById('userName');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const profileLink = document.getElementById('profileLink');
    const endPoint = 'https://api.github.com/users/MickaelDutra'

    fetch(endPoint)
    .then(res => {
        return res.json()
    })
    .then(json => {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = json.login;
        repositories.querySelector('.value').innerText = json.public_repos;
        followers.querySelector('.value').innerText = json.followers;
        following.querySelector('.value').innerText = json.following;
        profileLink.href = json.html_url;

    })
    .catch(err => { 
        console.error(`Erro ao buscar dados: `, err);
    })
})