
/*
    Constructor Data class for `Room`
*/
class Quest {

    id: String
    name: String
    desc: String
    img: String
    host: String

    constructor (id:String, name:String, desc:String, host:String, img:String) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.img = img

        this.host = host
    }
    toString() {
        return this.name
    }

    isHost(a){
        return this.host.includes(a)
    }
}

// Firestore data converter for Room Class
const qConv = {
    toFirestore: (q:Quest) => {
        return {
            id: q.id,
            name: q.name,
            desc: q.desc,
            img: q.img,
            host: q.host
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Quest(data.id, data.name, data.desc, data.host, data.img);
    }
};

/*
    Constructor Data class for `User`
*/
class User {
    uid: String
    name: String
    email: String
    dname: String
    constructor (uid, name, email, dname) {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.dname = dname;
    }
    toString() {
        return this.uid
    }
}

// Firestore data converter for User Class
const userConv = {
    toFirestore: (user:User) => {
        return {
            uid: user.uid,
            name: user.name,
            email: user.email,
            dname: user.dname
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.uid, data.name, data.email, data.dname)
    }
};


export {Quest, qConv, User, userConv}