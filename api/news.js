// api/news.js
export default async function handler(req, res) {
    const { category = 'general', q = '' } = req.query;
    // Use process.env for server-side security in Vercel
    const API_KEY = process.env.VITE_GNEWS_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: 'API Key missing on server' });
    }

    const url = q
        ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=es&apikey=${API_KEY}`
        : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=es&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Serverless Function Error:', error);
        res.status(500).json({ error: 'Error al conectar con GNews' });
    }
}
