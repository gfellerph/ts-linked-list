import LinkedList from '../src/LinkedList';
import checkIntegrity from './list-integrity';

describe('LinkedList.clear', () => {
  it('clears the list', () => {
    const list = new LinkedList(1, 2, 3);
    list.clear();
    checkIntegrity(list);
  });
});
