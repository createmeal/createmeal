import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname,"./dist");

const legacyConfig = {
    mode: 'production',
    target: "web",
    entry: './src/index.js',
    output: {
        path: DIST_PATH,
        filename: 'createmeal-legacy.js',
        library: {
            name: "createmeal",
            type: "umd",
            umdNamedDefine: true
        },
        globalObject: "this"
    }
}

const esmConfig = {
    mode: 'production',
    target: "web",
    entry: './src/index.js',
    output: {
        path: DIST_PATH,
        filename: 'createmeal.js',
        library: {
            type: "module"
        },
        globalObject: "this"
    },
    experiments: {
        outputModule: true
    }
}
export default [legacyConfig,esmConfig];