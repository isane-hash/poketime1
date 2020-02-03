const initState = {
  posts: [
    {id: '1', title: 'The first PokeTime post', body: 'PokeTime post'},
    {id: '2', title: 'The second PokeTime post', body: 'PokeTime post PokeTime post'},
    {id: '3', title: 'The third PokeTime post', body: 'PokeTime post PokeTime post PokeTime post'},
    {id: '4', title: 'The fourth PokeTime post', body: 'PokeTime post PokeTime post PokeTime post PokeTime post'}
  ]
}
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;
