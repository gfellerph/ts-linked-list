# ts-linked-list
Yet another yet another doubly linked list, written in TypeScript. It supports
iterators using a generator function with `Symbol.iterator`, fast index getter in O(n/2) time,
reversible `forEach`, `map`, `filter` and `reduce` methods, `insertBefore` and `insertAfter`
any node and generics for TypeScript users.

## Installation
Use `npm` or `yarn` or add the library as a script from the unpkg CDN.

```shell
npm install ts-linked-list
yarn add ts-linked list
```
or
```html
<script src="https://unpkg.com/ts-linked-list/dist/index.js"></script>
<!-- or -->
<script **type="module"** src="https://unpkg.com/ts-linked-list/dist/index.es.js"></script>
```

## Usage
```ts
import LinkedList from 'ts-linked-list';

// Create a list with however many arguments of whatever type you like
const list = new LinkedList(1, 'two', { n: 3 }, () => 4);

// TYPESCRIPT ONLY: ts-linked-list uses generics to type the list data
const typedList = new LinkedList<number>(1, 2, 3);
const wildList = new LinkedList<any>(1, 'two', () => 3, [4]);

// Create a list from any iterable alternatively
const listFromArray = LinkedList.from([1, 2, 3, 'whatever']);

// Do something with it
list.forEach(data => doSomethingUseful(data));
```

## Documentation
Detailed documentation and code samples are available at https://tuelsch.github.io/ts-linked-list/.

This is automatically generated from jsDoc-like comments by TypeDoc, a documentation generator specifically written for TypeScript.

Quick overview of the methods:

| LinkedList       |
|------------------|
| append           |
| concat           |
| filter           |
| find             |
| findIndex        |
| findNode         |
| findNodeIndex    |
| forEach          |
| get              |
| getNode          |
| insertAfter      |
| insertAt         |
| insertBefore     |
| map              |
| pop              |
| prepend          |
| push             |
| reduce           |
| removeAt         |
| removeNode       |
| reverse          |
| shift            |
| slice            |
| toArray          |
| toString         |
| from             |

## Code quality
This library was created to explore automated tools related to code quality control.

### Dependencies
![Dependencies](https://david-dm.org/tuelsch/ts-linked-list.svg)
![Dev Dependencies](https://david-dm.org/tuelsch/ts-linked-list/dev-status.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/tuelsch/ts-linked-list.svg)](https://greenkeeper.io/)

This library does not have any dependencies, so the first badge is easy to keep green. The second will be more useful in the future to check wether the devtools need an update. Greenkeeper will
create a branch with updated dependencies and run the tests. If successful, the dependencies can
be updated with one click. Neat.

### Vulnerabilities
[![Known Vulnerabilities](https://snyk.io/test/github/tuelsch/ts-linked-list/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tuelsch/ts-linked-list?targetFile=package.json)

As this library does not have any dependencies, there will be no dependency vulnerabilities. However, this may change in the future, so it's good someone keeps an eye on it.

### Testing
[![Build Status](https://travis-ci.com/tuelsch/ts-linked-list.svg?branch=master)](https://travis-ci.com/tuelsch/ts-linked-list)

Testing the library is essential. Travis CI is used to run the tests on every new branch/pull request and updates on the master branch.

### Test coverage
[![codecov](https://codecov.io/gh/tuelsch/ts-linked-list/branch/master/graph/badge.svg)](https://codecov.io/gh/tuelsch/ts-linked-list)
[![Test Coverage](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/test_coverage)](https://codeclimate.com/github/tuelsch/ts-linked-list/test_coverage)

Two separate tools are keeping watch here. Setting up either was easy and their results are matching. 

### Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/maintainability)](https://codeclimate.com/github/tuelsch/ts-linked-list/maintainability)

Codeclimate helps proofread the source code and gives feedback on what a machine thinks is clean code. It's not quite like a buddy giving advice, but it's free for open-source projects and can help improve code towards a generally accepted standard of coding.
