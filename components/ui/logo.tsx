"use client"

import { Bebas_Neue } from 'next/font/google'

const font = Bebas_Neue({ subsets: ['latin'], weight: ['400']})
export function Logo(){
    return <div className={`${font.className} text-4xl`}>Quest.</div>
}
