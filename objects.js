var playlist = { 'Phil Ochs': 'LoveMeImALiberal', 'Slowdive': 'StarRoving'  };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'My Bloody Valentine': ['OnlyShallow']})
}

function removeFromPlaylist(playlist, artistName) {
  //delete playlist.artistName('PhilOchs')
  return playlist
}
