var playlist = { 'Phil Ochs': 'Love Me Im A Liberal', 'Slowdive': 'Star Roving'  };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'My Bloody Valentine': ['OnlyShallow']})
}

  delete playlist.artistName('Slowdive')
