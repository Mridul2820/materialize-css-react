import React from 'react';
// import { shallow } from 'enzyme';
import Table from '../src/Table';

describe.skip('<Table />', () => {
  const wrapper = shallow(
    <Table centered hoverable responsive striped>
      <tr>
        <td>foo</td>
        <td>bar</td>
      </tr>
    </Table>
  );

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
