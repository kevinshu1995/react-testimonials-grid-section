import React, { useState, useEffect } from "react";
import Clsx from "clsx";

type Person = {
    img: string;
    name: string;
};
type User = {
    person: Person;
    quote: string;
    content: string;
};

function Avatar({ img, name }: Person) {
    return (
        <>
            <div
                className={Clsx(
                    "border-gray-200",
                    "rounded-full border-4 overflow-hidden",
                    "inline-block w-10 h-10"
                )}
            >
                <img className="w-full h-full" src={img} />
            </div>
            <div className="flex flex-col justify-center">
                <h2>{name}</h2>
                <p className="text-light-gray">Verified Graduate</p>
            </div>
        </>
    );
}

function Card({ user, className, ...props }: { user: User; className: string }) {
    return (
        <article className={Clsx("p-8 space-y-6", "shadow-offset rounded-2xl", className)}>
            <header className="flex items-center space-x-4">
                <Avatar {...user.person} />
            </header>
            <main className="space-y-6">
                <h3 className="text-2xl">{user.quote}</h3>
                <p className="text-lg">{user.content}</p>
            </main>
        </article>
    );
}

function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then(res => res.json() as Promise<User[]>)
            .then(setUsers);
    }, [setUsers]);

    const twColors: string[] = [
        "bg-moderate-violet",
        "bg-very-dark-grayish-blue",
        "bg-very-dark-blackish-blue",
        "bg-light-gray",
        "bg-light-grayish-blue",
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex space-x-2 p-4">
                {twColors.map(color => {
                    return (
                        <div key={color} className={Clsx("p-2", color)}>
                            {color}
                        </div>
                    );
                })}
            </div>
            <div
                className="flex flex-col lg:grid gap-4"
                style={{
                    gridTemplateAreas: `
                        'A A B E'
                        'C D D E'
                    `,
                }}
            >
                {users.map(user => (
                    <Card key={user.person.name} className="" user={user} />
                ))}
            </div>
        </section>
    );
}

export default App;
