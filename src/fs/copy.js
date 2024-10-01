import { cp } from 'node:fs';
import { access } from 'node:fs';

const copy = async () => {
    const error = new Error('FS operation failed');
    try {
        access('src/fs/files_copy', (err) => {
            if(err) {
                cp('src/fs/files', 'src/fs/files_copy', {recursive: true}, (err) => {
                    if (err) throw error;
                    console.log('copied');
                })
            } else {
              throw error;
            }
        });

        access('src/fs/files', (err) => {
            if (err) {
                throw error;
            } else {
                console.log('Files folder exists');
            }
        })
    } catch (err) {
        console.log(err);
    }
};

await copy();
