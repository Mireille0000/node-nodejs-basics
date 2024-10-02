const parseArgs = () => {
    const commandLineArgs = process.argv.slice(2, process.argv.length);
    
    return commandLineArgs.map((_, i, arr) => {
        if( i % 2 === 0) {
            console.log(`${arr[i]} ${arr[i+1]}`);
        }
        return null;
    })
};

parseArgs();