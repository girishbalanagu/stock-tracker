import { Handler } from "@netlify/functions";
import { Any } from "faunadb";
var faunadb = require('faunadb')
var q = faunadb.query;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
		'X-RapidAPI-Key': '65ddd9a78amsh99fc5102bfb5ce8p1218f5jsn387acd7f103f'
	}
};

import fetch from "node-fetch";

const API_ENDPOINT = 'https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=U';

const handler: Handler = async (event, context) => {
  
    const response = await fetch(API_ENDPOINT, options);
    let faunaRes = '';
    const data = await response.json();
    clientDB.query(
    q.Create(
      q.Collection("StockInfo"),
      {
        data: data
      }
    )
    ).then(function() {
      clientDB.query(
        q.Map(
        q.Paginate(
            q.Documents(q.Collection('StockInfo'))
        ),
        q.Lambda((x: any) => q.Get(x))
        )

      ).then(function(res: { data: any; }) {
        faunaRes = JSON.stringify(res.data);
        console.log("Fetched from doc"+ JSON.stringify(res.data));
        
      })
    })
    return { statusCode: 200, body: faunaRes };
};


var clientDB = new faunadb.Client({
  secret: "fnAEmyPtKIACVCfYRr_OgrKDnZoTJ0Nx_PcvYKsd",
  domain: "db.fauna.com"
});

// const handler: Handler = async (event, context) => {
//   await fetch('https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// //   clientDB.query(
// //     q.Create(
// //         q.Collection("user"),
// //         {
// //             data: req.body
// //         }
// //     )
// // ).then(function() {
// //    clientDB.query(
// //        q.Map(
// //            q.Paginate(
// //                q.Documents(q.Collection('user'))
// //             ),
// //             q.Lambda(x => q.Get(x))
// //         )

// //     ).then(function(res) {
// //         response.status(200).json({"response": res.data})
// //     })
// // })
// return {
//   statusCode: 200,
//   body: JSON.stringify(
//       [
//           {
//               email: "ananthakrishnancse@gmail.com",
//               role: "admin"
//           },

//           {
//               email: "ananthakrishnanm@live.com",
//               role: "analyst"
//           }
//       ]
//   ),
// };
// };

export { handler };
