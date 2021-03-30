function submitPlaylist(){
    let listPlaylist = document.getElementById('playlistLink')
    let playlist = listPlaylist.value    

    
    if (playlist.startsWith('https://open.spotify.com/playlist/')){
        displayPlaylist(playlist)
    } else {
        alert('Use a spotify playlist!')
    }

    listPlaylist.value = ""
}

function displayPlaylist(playlist){
    let display = document.getElementById('display')
    let adressPlaylist = playlist.substr(34,)

    console.log(display)
    display.innerHTML = `
    <iframe src="https://open.spotify.com/embed/playlist/${adressPlaylist}="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
    `
    console.log(display)
}