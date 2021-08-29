import React from "react";
import Clsx from 'clsx';

type User = {
    avatar: string;
    name: string;
}

function Avatar ({ avatar, name }: User){
    return (
        <>
            <div className={
                Clsx(
                    "border-gray-200",
                    "rounded-full border-4 overflow-hidden",
                    "inline-block w-10 h-10"
                )}
            >
                <img 
                    className="w-full h-full" 
                    src={avatar}
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2>{name}</h2>
                <p className="text-light-gray">Verified Graduate</p>
            </div>
        </>
    )
}

function Card (
    { user, className, ...props}:
    {   
        user: User,
        className: string
    }
    ){
    return (
        <article 
            className={Clsx(
                    'p-8 space-y-6',
                    'shadow-offset rounded-2xl',
                    className
                )}
        >
            <header className="flex items-center space-x-4">
                <Avatar {...user} />
            </header>
            <main className="space-y-6">
                <h3 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt aut, ipsa repellat magni aliquam nobis commodi officiis saepe error, provident cumque quo praesentium libero, harum minus et magnam itaque.</h3>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt aut, ipsa repellat magni aliquam nobis commodi officiis saepe error, provident cumque quo praesentium libero, harum minus et magnam itaque.</p>
            </main>
        </article>
    )
}

function App() {
    const user: User = {
        name: 'Daniel Clifford',
        avatar: '/src/images/image-daniel.jpg',
    }
    const twColors: string[] = [
        "bg-moderate-violet",
        "bg-very-dark-grayish-blue",
        "bg-very-dark-blackish-blue",
        "bg-light-gray",
        "bg-light-grayish-blue",
    ]
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex space-x-2 p-4">
                {
                    twColors.map(color => {
                        return (
                            <div 
                                className={Clsx(
                                    "p-2",
                                    color
                                )}
                            >
                                {color}
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <Card 
                    className="col-span-2 bg-white"
                    user={user}
                />
                <div>3</div>
                <div>4</div>
                <div>1</div>
                <div className="col-span-2">2</div>
                <div>4</div>
            </div>
        </section>
    );
}

export default App;
