var playlist = { 'Phil Ochs': 'SlowDive' };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'Phil Ochs': ['myBloodyValentine']})
}

function removeFromPlaylist(playlist, artistName) {
  delete (playlist.songTitle)
  return playlist
}
