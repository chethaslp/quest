"use client"
import { Logo } from '@/components/ui/logo';
import { Loader2 } from "lucide-react";


export default function Loading({msg}:{msg: string}) {
    return (
        <div className={`flex gap-3  h-screen w-screen flex-col z-50`}>
            <div className="flex text-4xl justify-center items-center h-full w-full animate-pulse transition-all drop-shadow-xl">
                <Logo/>
            </div> 
            <div className="flex justify-center items-center mb-10 flex-row gap-2 text-gray-100 text-muted text-center">
                <Loader2 className="animate-spin"/>
                <small>{msg}</small>
            </div>
        </div>
    )
  }

  