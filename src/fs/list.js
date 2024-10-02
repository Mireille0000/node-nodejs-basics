import { access, readdir } from 'node:fs';

const list = async () => {
    const error =  new Error('FS operation failed');
    try {
        access('src/fs/files', (err) => {
            if (err) {
                throw error;
            } else {
                readdir('src/fs/files', {withFileTypes: true, recursive: true }, (err, files) => {
                    if(err) throw err;
                    const listOfFiles = files.map((file) => file.name);
                    console.log(listOfFiles);
                } )
            }
        })
    } catch(err) {
        console.log(err);
    }
};

await list();