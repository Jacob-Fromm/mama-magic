import React from 'react'
import Image from 'next/image'

export default function Logo() {
    return(
        <div className="flex ml-20 justify-end items-center content-center">
            <div className='flex-1 ml-10 my-10'>
                <h2 className="text-amethyst-smoke-DEFAULT">We want mamas to feel inspired by their own strength and connected to all the other mamas of the world. Early motherhood brings joyful moments, but also physical and emotional challenges. Through it all, we want to remind every mama just how full of magic she is.
                </h2>
            <div className="flex-1 my-5"></div>
                <h2 className="text-amethyst-smoke-DEFAULT">May you courageously channel the mamas who came before you and all the other mamas who are doing this <em>right now</em>. Your experience is unique to you, but you’re not doing this alone. You’ve got something special in you that binds us all. It’s mama magic.
                </h2>
            </div>
            <div className="flex-1 mx-0">
                <Image 
                src='/logo.png'
                alt='Mama Magic logo'
                priotity='true'
                width={421}
                height={297.5}
                layout='responsive'
                />
            </div>
        </div>
    )
}