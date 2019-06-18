export const state = () => ({
  menuIsActive: false,
  post: {},
  players: {},
  playerList: {}
})

export const mutations = {
  toggleMenuState (state) {
    state.menuIsActive = !state.menuIsActive
  },

  setCurrentPost (state, post) {
    state.post = post
  },

  setPlayers (state, players) {
    state.players = players
  },

  setPlayerList (state, players) {
    state.playerList = players
  }
}

export const getters = {
  currentPost: state => state.post,
  players: state => state.players,
  playerList: state => state.playerList
}
