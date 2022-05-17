import { Handler } from "@netlify/functions";
import { Any } from "faunadb";
var faunadb = require('faunadb')
var q = faunadb.query;
var clientDB = new faunadb.Client({
  secret: "fnAEmyPtKIACVCfYRr_OgrKDnZoTJ0Nx_PcvYKsd",
  domain: "db.fauna.com"
});
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
        q.Collection('StockInfo'),
        {
          data: data
        },
      )
    )
    .then((ret: any) => { faunaRes = JSON.stringify(ret);})
    .catch((err: any) => console.error(
      'Error: [%s] %s: %s',
      err.name,
      err.message,
      err.errors()[0].description,
    ));

    return await clientDB.query(
      q.Map(
      q.Paginate(
          q.Documents(q.Collection('StockInfo'))
      ),
      q.Lambda((x: any) => q.Get(x))
      )

    ).then(function(res: { data: any; }) {
      faunaRes = JSON.stringify(res.data);
      return { statusCode: 200, body: faunaRes };
    })
};

export { handler };
