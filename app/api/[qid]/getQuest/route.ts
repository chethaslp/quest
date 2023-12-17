import { NextResponse } from "next/server";
import { Question, converter as GenericConverter, qConv, qsConv, userConv, teamConv } from "@/lib/models";
import { adminAuth, adminDb } from "../../fb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, {params}:{params:{ qid: string }}) {
  const token:string = req.body.token
  const tid:String = req.body.tid
  const qid:string = params.qid

  const qRef = adminDb.collection("quest");
  // const uRef = collection(adminDb, "users");

  if (!token || !tid) {
    return NextResponse.json(
      { error: 'Missing required arguments.' },
      { status: 400 }
    );
  }
  
  adminAuth.verifyIdToken(token)
  .then(async (decodedToken) => {
    const u = (await qRef.doc(decodedToken.uid).withConverter(userConv).get()).data()
    if(u){
      if (u.c_team == ("" ||undefined) || u.c_quest == ("" || undefined)) return NextResponse.json({ error: "Join a Quest/Team." },{ status: 400 })

      const d =  (await qRef.doc(qid+'/metadata').withConverter(qConv).get()).data()
      if(!d?.metadata.active) return NextResponse.json( { error: "Quest not started yet." },{ status: 401 })

      const t =  (await qRef.doc(qid+'/ts/'+tid).withConverter(teamConv).get()).data()
      if(!t) return NextResponse.json( { error: "Team not registered." },{ status: 401 })

      

      const q = d.qs[Math.floor(Math.random() * d.qs.length)]
      return NextResponse.json({ ...q });
      
    }else{
      return NextResponse.json(
        { error: "Unauthenticated." },
        { status: 401 }
      )
    }
  })
  .catch((error) => {
    return NextResponse.json(
      { error: "Unauthenticated." },
      { status: 401 }
    )
  });
}