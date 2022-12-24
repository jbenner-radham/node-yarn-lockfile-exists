import fs from 'node:fs';
import path from 'node:path';

export default function yarnLockfileExists(config = {}) {
    const cwd = config.cwd ?? process.cwd();

    try {
        return fs.statSync(path.join(cwd, 'yarn.lock')).isFile();
    } catch (_) {
        return false;
    }
}
