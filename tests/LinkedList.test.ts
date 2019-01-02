import LinkedList from '../src/LinkedList';

describe('LinkedList.ts', () => {
  it('Instantiates a correct empty List', () => {
    const l = new LinkedList();
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
    expect(l.size).toBe(0);
  });
});
