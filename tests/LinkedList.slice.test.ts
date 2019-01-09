import { link } from 'fs';
import LinkedList from '../src/LinkedList';

describe('LinkedList.slice', () => {
  it('Slices the list', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const slice = list.slice(2);
    expect(slice.length).toBe(3);
    expect(slice.head.prev).toBe(null);
    expect(slice.tail.next).toBe(null);
    expect(slice.toArray()).toEqual([3, 4, 5]);
  });

  it('slices with end argument', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const slice = list.slice(1, 3);
    expect(slice.length).toBe(2);
    expect(slice.head.prev).toBe(null);
    expect(slice.tail.next).toBe(null);
    expect(slice.toArray()).toEqual([2, 3]);
  });

  it('does not touch the original list', () => {
    const list = new LinkedList(1, 2, 3, 4, 5);
    const slice = list.slice(2);
    expect(slice.toArray()).toEqual([3, 4, 5]);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
    expect(slice.tail).not.toBe(list.tail);
  });

  it('Returns an empty slice', () => {
    const list = new LinkedList(1, 2, 3);
    const slice = list.slice(2, 2);
    expect(slice.length).toBe(0);
    expect(slice.toArray()).toEqual([]);
  });

  it('Returns empty if start is out of bounds', () => {
    const list = new LinkedList(1, 2, 3);
    const slice = list.slice(3);
    expect(slice.length).toBe(0);
    expect(slice.toArray()).toEqual([]);
  });

  it('Returns empty if the sliced list is empty', () => {
    const list = new LinkedList();
    const slice = list.slice(1);
    expect(slice.length).toBe(0);
    expect(slice.toArray()).toEqual([]);
  });
});
