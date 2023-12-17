"use client";

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

import Image from 'next/image'

export default function Home() {

  const { toast } = useToast()

  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <main className="flex flex-col h-full w-full">
        <div className='flex h-[80%] w-full justify-center items-center'>
          <Card>
            <CardHeader>
              <CardTitle>Lets begin the Quest!</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
    
  )
}
