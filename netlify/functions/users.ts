import { Handler } from "@netlify/functions";
var faunadb = require('faunadb')
var q = faunadb.query;


const handler: Handler = async (event, context) => {
    let users;
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
