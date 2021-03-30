/* Meal.js Api - Arin Chase - 2021 - Currently file is not in use */

/* Api Usage - retrieves data from mongodb atlas account */

/* Imports */
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('meal').findOne()
    res.json(doc);
});

export default handler;