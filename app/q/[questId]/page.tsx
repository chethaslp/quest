"use client";

import { Navbar } from "@/components/ui/navbar"

export default function Home({ params }: {params: Object}) {

    const qid = params.questId

    return <div className="flex w-full h-full flex-col">
        <Navbar qName={qid} />
        <main className="flex items-center justify-center">
            {qid}
        </main>
    </div>


}