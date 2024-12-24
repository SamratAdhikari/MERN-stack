interface UserType {
    firstName: string;
    lastName: string;
    age: number;
    isMarried?: boolean;
    hobbies: string[];
    favBook: [string];
}

interface UserType {
    hasChildren: boolean;
}

const user: UserType = {
    firstName: "Subham",
    lastName: "Chapagain",
    age: 25,
    isMarried: true,

    hobbies: ["music", "sports"],
    favBook: ["Karnali Blues"],
    hasChildren: false,
};

const user2: UserType = {
    firstName: "Subham",
    lastName: "Baidhya",
    age: 25,
    isMarried: true,
    hobbies: ["music", "sports"],
    favBook: ["Harry Potter"],
    hasChildren: true,
};

interface EmailAndPassword {
    email: string;
    password: string;
}

interface User extends EmailAndPassword {
    id: string;
    fullName: string;
    gender?: "male" | "female" | "other";
}

let user1: User = {
    id: "1",
    email: "arun@gmail.com",
    password: "1234",
    fullName: "Arun",
    gender: "male",
};
