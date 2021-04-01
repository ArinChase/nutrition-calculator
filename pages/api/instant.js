/* instant.js Api - Arin Chase - 2021 */

/* Api Usage - Retrieves nutritionix.com api data using /v2/search/instant endpoint, used for Autocomplete */

/* Imports */
import nextConnect from 'next-connect'
import fetch from 'isomorphic-unfetch'


const handler = nextConnect();

handler.get(async (req, res) => {
    
	let result = await fetch("https://trackapi.nutritionix.com/v2/search/instant", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.API_ID,
        'x-app-key': process.env.API_KEY
      },
      body: `{"query":"${req.query.query}"}`
    });

    const json = await result.json();
    res.json(json);
});

export default handler;