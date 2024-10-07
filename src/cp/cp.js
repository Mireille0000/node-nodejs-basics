import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const spawnFn = spawn('node', ['src/cp/files/script.js', ...args]);

    process.stdin.pipe(spawnFn.stdin);

    spawnFn.stdout.on('data', (data) => {
        console.log(`${data}\n`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/*[someArgument1, someArgument2, ...]*/);
