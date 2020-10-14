import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';
import Loader from '../../components/Loader';
import ItemGrid from '../../components/ItemGrid';
import { Error } from './styles';

describe('Main', () => {
  let items;
  beforeAll(() => {
    items = [{ _id: 'test' }];
  });

  it('should render a Loader when fetching data', () => {
    const status = 'LOADING';
    const wrapper = shallow(<Main status={status} items={items} />);

    expect(wrapper.containsMatchingElement(<Loader />)).toBe(true);
  });

  it('should render an ItemGrid when fetching succeed', () => {
    const status = 'SUCCESS';
    const wrapper = shallow(<Main status={status} items={items} />);

    expect(wrapper.containsMatchingElement(<ItemGrid items={items} />)).toBe(
      true
    );
  });

  it('should render an Error when fetching fails', () => {
    const status = 'FAIL';
    const wrapper = shallow(<Main status={status} items={items} />);

    expect(
      wrapper.containsMatchingElement(
        <Error>Erro no servidor. Tente novamente.</Error>
      )
    ).toBe(true);
  });
});
