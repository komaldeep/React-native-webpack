export default function AppReducers(state={

    fetchuserdetails:false,

}, action){
    console.log('value of action type is', action.type);
    switch (action.type){

        case "USERDETAILS":
        {
            return {...state, fetchuserdetails: action.payload}
        }

        default: return state;
    }

    return state;

}
