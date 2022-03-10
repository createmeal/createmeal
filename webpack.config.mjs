import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname,"./dist");

const legacyConfig = {
    mode: 'production',
    target: "web",
    entry: './src/index.mjs',
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
const legacyNodeConfig = {
    mode: 'production',
    entry: './src/index.mjs',
    output: {
        path: DIST_PATH,
        filename: 'createmeal-legacy-node.js',
        chunkFormat: 'commonjs',
        library: {
            name: "createmeal",
            type: "commonjs"
        }
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                "targets":{
                    "node": "current",
                    "esmodules": false
                },                  
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}

const esmConfig = {
    mode: 'production',
    target: "web",
    entry: './src/index.mjs',
    output: {
        path: DIST_PATH,
        filename: 'createmeal.mjs',
        library: {
            type: "module"
        },
        globalObject: "this"
    },
    experiments: {
        outputModule: true
    }
}
const nodeEsmConfig = {
    mode: 'production',
    target: "web",
    entry: './src/index.mjs',
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
export default [legacyConfig,legacyNodeConfig,esmConfig,nodeEsmConfig];