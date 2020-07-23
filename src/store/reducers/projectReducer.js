const initState = {
  projects: [
    {id: '1', title: 'Help Me', content: 'blah blah blah'},
    {id: '2', title: 'To Learn', content: 'blah blah blah'},
    {id: '3', title: 'React Js', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) =>{
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer