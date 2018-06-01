import {DbClient, User} from '../dbConnection/dbConnection'

const userDb = new DbClient();

class UserAPI {

    constructor() {
        
    }

    public async get(id:string){
        return userDb.getUserById(id);
    }

    public async post(user :User ){
        return userDb.insertUser(user);
    }
}

export default new UserAPI();
