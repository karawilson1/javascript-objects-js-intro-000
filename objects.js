var playlist = { PhilOchs: 'SlowDive' };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'Phil Ochs': [My Bloody Valentine']})
}
