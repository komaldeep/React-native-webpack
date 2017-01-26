import * as Action from '../Action/Index';

export function fetchuserdetails (){
    console.log('it reaches fetchuserdetails');
    return {
        type:"USERDETAILS",
        payload:{
            name: "komaldeep13",
        }
    }
}

export default Action;