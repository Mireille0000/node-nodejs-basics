import { Worker } from 'worker_threads'
import { cpus } from 'os';

const performCalculations = async () => {
    const cores = cpus().length;
    const workerThreads = [...Array(cores)];
    try {
        const results = Array.from(({length: workerThreads.length}), (_, i) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js', {workerData: {data: 10 + i}});
                worker.on("message", (result) => {
                    resolve({status: 'resolved', data: result});
                })
            
                worker.on("error", () => {
                    reject(workerThreads.push({status: 'error', data: null}));
                });
            })
        });

        Promise.all(results).then((res) => console.log(res));
    } catch (err) {
        console.log(err);
    }
};

await performCalculations();