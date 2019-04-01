import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.ts', () => {
  it('Instantiates a correct empty List', () => {
    const l = new LinkedList();
    checkIntegrity(l);
  });

  it('Initialises with any number of arguments', () => {
    const l = new LinkedList(1, 2, 3);
    checkIntegrity(l);
    expect(l.head.data).toBe(1);
    expect(l.tail.data).toBe(3);
  });

  it('Converts to an array', () => {
    const l = new LinkedList(1, 2, 3);
    const a = l.toArray();
    expect(a).toEqual([1, 2, 3]);
  });

  it('Converts an empty list to an array', () => {
    const l = new LinkedList();
    const a = l.toArray();
    expect(a).toEqual([]);
  });

  it('Converts to string', () => {
    const list = new LinkedList<any>(true, 2, 'three');
    const defaultSeparator = list.toString();
    const customSeparator = list.toString(' <=> ');
    checkIntegrity(list);
    expect(defaultSeparator).toBe('true 2 three');
    expect(customSeparator).toBe('true <=> 2 <=> three');
  });
});
