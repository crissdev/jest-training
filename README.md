# jest-training

[![Build Status](https://travis-ci.org/crissdev/jest-training.svg?branch=master)](https://travis-ci.org/crissdev/jest-training)

Learn Jest and unit testing through code challenges - each test represents a challenge. The challenges are taken from various sources (see Bibliography).

Just clone this repository and write your tests using Typescript.

```sh
$ git clone https://github.com/crissdev/jest-training
```

The project is by default configured to:

- format files with Prettier (through vscode workspace configuration)
- check files with eslint (through vscode workspace configuration)
- automatically save and format files on editor focus change (through vscode workspace configuration)
- run tests with Jest

## Development

Put your test suites in `__tests__` directory, tested features in `src` directory and run `npm test`. If you want Jest to continuousely run the tests then run `npm run watch` command. Note that tests must be written in Typescript.

## Continuous Integration

Continuous Integration configuration has been provided for Travis (.travis.yml), AppVeyor (appveyor.yml) and Bitbucket (bitbucket-pipelines.yml). Please refer to their documentation site for how to configure them.

## Bibliography

Add sources as necessary.

## License

MIT © [Cristian Trifan](https://crissdev.com)
