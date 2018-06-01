import {Db, MongoClient} from 'mongodb'

export class DbClient {
    private db : Db
    private host: string
    private port: Number
    private dbName: string

    private collection = 'users';
    
    constructor(host?: string, port?: Number, dbName?: string) {
        this. host = host ? host  :'mongodb://localhost' ;
        this.port = port ? port : 27017 ;
        this.dbName = dbName ? dbName : 'user';
    }

    public async connection() {
        console.log("DB connection attempt");
        
        this.db = await MongoClient.connect(`${this.host}:${this.port}`).then(client => client.db(this.dbName));

    }

    public async getUserById(id : string){
        if(!this.db)await this.connection();
        return this.db.collection(this.collection).findOne({"userId" : id});
    }

    public async insertUser(user : User){
        this.db.collection(this.collection).insertOne(user);
    }    
}

export interface User {
    userId: string,
    userName: string,
    userRoles : string
}


