//import redux and create store
const redux = require('redux')
const createStore = redux.createStore



// Actions and Actions TYPE
const CHANGE_USER = "CHANGE_USER"
const LOGOUT = "LOGOUT"

//Actions
function changeUser(user){
    return {
        type: CHANGE_USER,
        info: "change the current user",
        payload: user
    }
}


function logout(params) {
    return {
        type: LOGOUT,
        info: "logout the current user",
    }
}

//initial state
const initialState = {
    user: '',
    isLogged: false,
    count: 0
}

//Reducers

function userReducer(prevState = initialState, action) {
    switch (action.type){
        case CHANGE_USER: 
            return {
               ...prevState,
                user: action.payload,
                isLogged: true,
                count: prevState.count+1
            }
        case LOGOUT:
            return {
               ...prevState,
                user: '',
                isLogged: false,
                count: prevState.count
            }
        default:
            return prevState
    }
}

//store
const store = createStore(userReducer)

console.log('initial state:', store.getState());
store.dispatch(changeUser('Wallace Nascimento'))
console.log('initial state:', store.getState());
store.dispatch(logout())
console.log('initial state:', store.getState());
//export

module.exports = store