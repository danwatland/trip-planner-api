import pg from 'pg';

const getLocations = async () => {
    const client = new pg.Client();
    await client.connect();

    const res = await client.query(`
        SELECT  
            id,
            label,
            lat,
            lng,
            startdate as "startDate",
            enddate as "endDate"
        FROM public.locations
        ORDER BY startdate ASC
    `);
    await client.end();

    return res;
};

const updateLocation = async (location) => {
    const client = new pg.Client();
    await client.connect();

    const res = await client.query('UPDATE public.locations SET label = $1, lat = $2, lng = $3, startDate = $4, endDate = $5 WHERE id = $6', [
        location.label,
        location.lat,
        location.lng,
        location.startDate,
        location.endDate,
        location.id
    ]);
    await client.end();

    return res;
}

export {
    getLocations,
    updateLocation
};
