# ts-linked-list
[![Build Status](https://travis-ci.com/tuelsch/ts-linked-list.svg?branch=master)](https://travis-ci.com/tuelsch/ts-linked-list)
![Dev Dependencies](https://david-dm.org/tuelsch/ts-linked-list/dev-status.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/tuelsch/ts-linked-list.svg)](https://greenkeeper.io/)
[![Test Coverage](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/test_coverage)](https://codeclimate.com/github/tuelsch/ts-linked-list/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/afe5847fc5c53d9112de/maintainability)](https://codeclimate.com/github/tuelsch/ts-linked-list/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/tuelsch/ts-linked-list/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tuelsch/ts-linked-list?targetFile=package.json)

Yet another yet another doubly linked list, written in TypeScript. It supports
iterators using a generator function with `Symbol.iterator`, fast index getter in O(n/2) time,
reversible `forEach`, `map`, `filter` and `reduce` methods, `insertBefore` and `insertAfter`
any node as well as generics for TypeScript users.

## Installation
```shell
npm install ts-linked-list
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
https://tuelsch.github.io/ts-linked-list/.
