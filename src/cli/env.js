const parseEnv = () => {
    const names = Object.keys(process.env);
    const values = Object.values(process.env);
    return names.map((name, i) => {
        if (name.includes('RSS_')) {
            console.log(`${name}=${values[i]}`);
        }
    });
};

parseEnv();