import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu";
import { Separator } from "./separator";
import { Sun, Moon, User, UserCheck2 } from "lucide-react";
import { Button } from "./button";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useAuthContext, User as UserType } from "../context/auth";
import { usePathname } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { auth } from "../fb/config";
import { useToast } from "./use-toast";


export function Navbar({ qName }: {qName?:string}) {
    const { setTheme } = useTheme()
    const  user: UserType | null  = useAuthContext()
    const path = usePathname()
    const {toast} = useToast()
    // if(!user) redirect("/signin?c="+path)
    
    return <div className='w-full backdrop-blur pr-5 pt-3 pl-5 pb-3'>
                <div className="flex items-center justify-between gap-2 flex-row">
                    <div className="flex items-center flex-row gap-2">
                        <Link href={"/"}><Logo/></Link>
                        {qName && <span className="text-lg ml-2">/&nbsp;{qName}</span>}
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild> 
                                {(user)? <Avatar><AvatarImage height={30} referrerPolicy="no-referrer" width={30} src={user.photoURL || ""} alt={user.displayName || ""}/></Avatar>:
                                <Button variant="outline" size="icon"> <User/> </Button>}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => {
                                    if(!user) signInWithPopup(auth, new GoogleAuthProvider()).then((v)=>(v.user)?toast({title:"Signed in Successfully!", icon:<UserCheck2/>}):null);
                                    else signOut(auth);
                                }}>
                                    {(user)?"Signout":"Signin"}
                                    
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Separator className='mt-3 mb-4'/>
            </div>
    
}