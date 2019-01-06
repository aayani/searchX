import { describe, it } from 'mocha';
import { expect } from 'chai';

import { search } from '../index';

const collection = [{
  id: 1,
  name: 'Wahaj',
  city: 'Rawalpindi',
}, {
  id: 2,
  name: 'Hasan',
  city: 'Shanghai',
}, {
  id: 3,
  name: 'Rafeh',
  city: 'Lahore',
}, {
  id: 4,
  name: 'Moueed',
  city: 'Bagh',
}, {
  id: 5,
  name: 'Zubair',
  city: 'Chitral',
}, {
  id: 6,
  name: 'Ahmed',
  city: 'Islamabad',
}, {
  id: 7,
  name: 'Adeel',
  city: 'Shanghai',
}];

describe('Search module', async () => {
  it('should return the correct search results', async () => {
    const [res1, res2, res3, res4, res5] = await Promise.all([
      search('wah', collection),
      search('hasan', collection),
      search('feh', collection),
      search('ouee', collection),
      search('chitral', collection),
    ]);

    expect(res1[0].id).to.equal(1);
    expect(res2[0].id).to.equal(2);
    expect(res3[0].id).to.equal(3);
    expect(res4[0].id).to.equal(4);
    expect(res5[0].id).to.equal(5);
  });
});
