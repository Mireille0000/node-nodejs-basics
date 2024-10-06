import { Transform } from 'node:stream';


const transform = async () => {
    try {
        const reverseDataStream = () => new Transform({transform(chunk, encoding = 'utf8', callback) {
            const reverseChunk = chunk.toString().split('').reverse().join('');
            callback(null, reverseChunk);
        }});

        const reverseFn = reverseDataStream();
        process.stdin.pipe(reverseFn).pipe(process.stdout);
    } catch (err) {
        console.log(err);
    }

    // Write your code here 
};

await transform();