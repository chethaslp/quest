import { DocumentData } from "firebase-admin/firestore"
import { PartialWithFieldValue, QueryDocumentSnapshot } from "firebase-admin/firestore"

export class Question {

    id: string
    q: string
    flag: string
    hint: string

    constructor (id:string, q:string, flag:string, hint:string ="") {
        this.id = id;
        this.q = q;
        this.flag = flag;
        this.hint = hint
    }
    toString() {
        return this.id
    }
}

// Firestore data converter for Room Class
export const qsConv = {
    toFirestore (q:Question): DocumentData{
        return {
            id: q.id,
            q: q.q,
            flag: q.flag,
            hint: q.hint
            };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
        const data = snapshot.data();
        return new Question(data.id, data.q, data.flag, data.hint);
    }
};

/*
    Constructor Data class for `Room`
*/
export class Quest {

    metadata: {
        id: string
        name: string
        desc: string
        host: string
        img?: string

        startTime: Number
        endTime: Number
        active:boolean
    }
    qs: Question[]
    ts: Team[]

    constructor (metadata:{id: string, name: string, desc: string, host: string, img?: string, startTime: Number, endTime: Number, active:boolean }, qs:Question[] = [], ts:Team[] = []) {
        this.metadata = metadata;
        this.qs = qs
        this.ts = ts
    }
    toString() {
        return this.metadata.name
    }
}

// Firestore data converter for Room Class
export const qConv = {
    toFirestore (q:Quest): DocumentData{
        return {
            metadata: q.metadata,
            qs: q.qs,
            ts: q.ts
            };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
        const data = snapshot.data();
        return new Quest(data.metadata, data.qs, data.ts);
    }
};

/*
    Constructor Data class for `User`
*/
export class User {
    uid: string
    name: string
    email: string
    dname: string
    c_quest: string
    c_team: string
    constructor (uid:string, name:string, email:string, dname:string, c_quest:string = "", c_team:string = "") {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.dname = dname;
        this.c_quest = c_quest;
        this.c_team = c_team;
    }
    toString() {
        return this.uid
    }
}

// Firestore data converter for User Class
export const userConv = {
    toFirestore (user:User):DocumentData {
        return {
            uid: user.uid,
            name: user.name,
            email: user.email,
            dname: user.dname,
            c_quest: user.c_quest,
            c_team: user.c_team
            };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
        const data = snapshot.data();
        return new User(data.uid, data.name, data.email, data.dname, data.c_quest, data.c_team)
    }
};

/*
    Constructor Data class for `User`
*/
export class Team {
    id: string
    name: string
    lead: string
    members: string[]

    points: Number
    c_quest: Question | ""
    constructor (id:string, name:string, lead:string, members:string[] = [], points:Number = 0,c_quest:Question|"" = "") {
        this.id = id;
        this.name = name;
        this.lead = lead;
        this.members = members;
        this.points = points;
        this.c_quest = c_quest
    }
    toString() {
        return this.name
    }
    isMember(a:string){
        return this.members.includes(a)
    }
}

// Firestore data converter for User Class
export const teamConv = {
    toFirestore (team:Team): DocumentData {
        return {
            id: team.id,
            points: team.points,
            name: team.name,
            lead: team.lead,
            members: team.members,
            c_quest: team.c_quest
            };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
        const data = snapshot.data();
        return new Team(data.id, data.name, data.lead, data.members, data.points, data.c_quest)
    }
};

export const converter = <T>() => ({
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  });