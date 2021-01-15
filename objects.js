var playlist = { 'Phil Ochs': 'SlowDive' };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'Phil Ochs': ['myBloodyValentine']})
}
