/* Como já temos algumas das informações adicionais sobre nossos usuários, é uma boa ideia produzi-las de uma maneira agradável.
Corrija os erros de tipo na função logPerson. 
A função logPerson deve aceitar tanto User quanto Admin, 
ela também deve gerar informações relevantes de acordo com a occupation para User e a role para o Admin.
 */

interface User {
    name: string;
    age: number;
    occupation: string;
    role?: never;
}

interface Admin {
    name: string;
    age: number;
    role: string;
    occupation?: never;
}

type Person = User | Admin ;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(person: Person) {
    let additionalInformation: string | undefined;
    if (person.ronle) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);