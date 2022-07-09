import pg from 'pg';

const getLocations = async () => {
    const client = new pg.Client();
    await client.connect();

    const res = await client.query('SELECT * FROM public.locations');
    await client.end();

    return res;
};

export {
    getLocations
};
