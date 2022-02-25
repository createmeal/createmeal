# Publish Steps

1 - make a pull request of changes to release branch;

2 - make a custom named pull request of changes from release to master branch. The pull request name must start with one of these options:

- "release_patch" - update from 1.0.0 to 1.0.1
- "release_minor" - update from 1.0.0 to 1.1.0
- "release_major" - update from 1.0.0 to 2.0.0
- "no_release_version" - update something in the repository without change the library version

3 - A Github Action will run these activities:

- build the dist package
- update the version matching the pull request name to [semver](https://semver.org/)
- send the package to NPM
- generate a git tag
- push the changes to master branch (package.json and git tag)

4 - OPTIONAL - Draft a new release tag on Github with name like "v1.3.0" and auto-generate release notes;
