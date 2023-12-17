import { db } from "@/components/fb/db";
import { doc, getDoc, collection, setDoc, getDocs, query, where, getFirestore} from "firebase/firestore";
import { Room, roomConv } from '../../../../components/models'
import { NextResponse } from "next/server";
import { qConv } from "@/lib/models";


export async function GET(req) {
  const roomId = req.nextUrl.searchParams.get("rid");
  const uid = req.nextUrl.searchParams.get("uid");
  const dname = req.nextUrl.searchParams.get("name");
  const userImg = req.nextUrl.searchParams.get("img");

  const roomRef = collection(db, "rooms");

  if (!roomId) {
    return NextResponse.json(
      { error: 'Missing "roomId".' },
      { status: 400 }
    );
  } else if (!uid) {
    return NextResponse.json(
      { error: 'Missing "uid".' },
      { status: 400 }
    );
  } else if (!dname) {
    return NextResponse.json(
      { error: 'Missing "name".' },
      { status: 400 }
    );
  } else if (!userImg) {
    return NextResponse.json(
      { error: 'Missing "userImg".' },
      { status: 400 }
    );
  }

  const d = await getDoc(doc(roomRef, roomId).withConverter(qConv))
  if (d.exists()) {
    
    return NextResponse.json({ token: at.toJwt(), room: JSON.stringify(data) });
  } else {
      return NextResponse.json(
        { error: "Room doesn't exist." },
        { status: 404 }
      )
  }
}