const initialState = {
  todos: [
    {
      text:'something',
      completed:false,
    },{
      text:'something else',
      completed:false,
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
