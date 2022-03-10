import process from "process";
import fs from "fs";
import semver from "semver";

const releaseVersion = process.argv.includes("minor") ? "minor" : process.argv.includes("major") ? "major" : "patch";
const packageJson = JSON.parse(fs.readFileSync("package.json"));
packageJson.version = semver.inc(packageJson.version,releaseVersion);
fs.writeFileSync("package.json",JSON.stringify(packageJson,null,2));