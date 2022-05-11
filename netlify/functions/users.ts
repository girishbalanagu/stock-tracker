import { Handler } from "@netlify/functions";
var faunadb = require('faunadb')
var q = faunadb.query;


const handler: Handler = async (event, context) => {
    let users;
    var client = new faunadb.Client({
        secret: "fnAElzkEBUAAxOG3WACgDG-8bozh6pDTUvBYookw",
        domain: "db.eu.fauna.com"
    });

    // client.query(
    //     q.Get(q.Ref(q.Collection('users'), '330795440817569989'))
    // )
    client.query(
        q.Get(
            q.Match(q.Index('usersIndex'))
        )
    ).then((ret: any) => {
        console.log(ret);
        users = ret
    }).catch((err: any) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))

    return {
        statusCode: 200,
        body: JSON.stringify(
            [
                {
                    email: "ananthakrishnancse@gmail.com",
                    role: "admin"
                },
  
                {
                    email: "ananthakrishnanm@live.com",
                    role: "analyst"
                }
            ]
        ),
    };
};

export { handler };
