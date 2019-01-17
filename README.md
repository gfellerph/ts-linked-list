# ts-linked-list
Yet another yet another doubly linked list, written in TypeScript.

## Installation
Use `npm` or `yarn` or add the library as a script from the unpkg CDN.

```shell
npm install ts-linked-list
```
or
```html
<script src="https://unpkg.com/ts-linked-list/dist/index.min.js"></script>
```

## Usage
```ts
import LinkedList from 'ts-linked-list';

// Create a list with however many arguments of whatever type you like
const list = new LinkedList(1, 'two', { n: 3 }, () => 4);

// Create a list from an array alternatively
const listFromArray = LinkedList.fromArray([1, 2, 3, 'whatever']);

// Do something with it
list.forEach(data => doSomethingUseful(data));
```

## Documentation
Detailed documentation is available at https://tuelsch.github.io/ts-linked-list/.

This is automatically generated from jsDoc-like comments by TypeDoc, a documentation generator specifically written for TypeScript.

## Code quality
This library was created to explore automated tools related to code quality control, so here's what I've come up with.

### Dependencies
![Dependencies](https://david-dm.org/tuelsch/ts-linked-list.svg)
![Dev Dependencies](https://david-dm.org/tuelsch/ts-linked-list/dev-status.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/tuelsch/ts-linked-list.svg)](https://greenkeeper.io/)

This library does not have any dependencies, so the first badge is easy to keep green. The second will be more useful in the future to check wether the devtools need an update.

### Vulnerabilities
[![Known Vulnerabilities](https://snyk.io/test/github/tuelsch/ts-linked-list/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tuelsch/ts-linked-list?targetFile=package.json)

As this library does not have any dependencies, there will be no vulnerabilities. However, this may change in the future, so it's good someone keeps an eye on it.

### Testing
[![Build Status](https://travis-ci.com/tuelsch/ts-linked-list.svg?branch=master)](https://travis-ci.com/tuelsch/ts-linked-list)

Testing the library is essential today, I used Travis CI to check if the tests run successfully.

### Test coverage
[![codecov](https://codecov.io/gh/tuelsch/ts-linked-list/branch/master/graph/badge.svg)](https://codecov.io/gh/tuelsch/ts-linked-list)
[![Test Coverage](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/test_coverage)](https://codeclimate.com/github/tuelsch/ts-linked-list/test_coverage)

Two separate tools are keeping watch here. Setting up either was easy and their results are matching. I'm not sure what the other benefits/drawbacks are so I'm keeping both around until one or the other proves to be more useful.

### Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/maintainability)](https://codeclimate.com/github/tuelsch/ts-linked-list/maintainability)

Codeclimate helps proofread the source code and gives feedback on what a machine thinks is clean code. It's not quite like your buddy giving advice, but it's free and can help you improve your code towards a generally accepted way of coding.
