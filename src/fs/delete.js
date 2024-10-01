import { access } from 'node:fs';
import { rm } from 'node:fs';

const remove = async () => {
    const error =  new Error('FS operation failed');
    try {
        access('src/fs/files/fileToRemove.txt', (err) => {
            if (err) {
                throw error;
            } else {
                rm('src/fs/files/fileToRemove.txt', (err) => {
                    if (err) throw error;
                    console.log('Removed!');
                })
            }
        })
    } catch (err) {
        console.log(err);
    }
};

await remove();