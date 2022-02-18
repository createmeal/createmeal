# Publish Steps

1 - make a pull request of changes to release branch;

2 - update package.json version according to [semver](https://semver.org/):

        "version": "1.3.0"

3 - commit the change and make a pull request to master branch

4 - Draft a new release tag on Github with name like "v1.3.0" and auto-generate release notes;

5 - A Github action will fire to complete the Release to Github and NPM registries.
