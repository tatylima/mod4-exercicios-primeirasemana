"use strict";
/* Estamos começando uma pequena comunidade de usuários.
Por motivos de desempenho, decidimos armazenar todos os usuários diretamente no código. Dessa forma, podemos fornecer aos nossos desenvolvedores mais oportunidades de interação com o usuário.
Todos os problemas relacionados ao Regulamento Geral sobre a Proteção de Dados serão resolvidos algum outro dia. Esta seria a base para nossos futuros experimentos durante esses exercícios.
Dados os dados, defina a interface "User" e use-a de acordo.
 */
const users = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
function logPerson(users) {
    console.log(` - ${users.name}, ${users.age}`);
}
console.log('Users:');
users.forEach(logPerson);
