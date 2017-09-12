'use strict';

import React from 'react';
import radium from 'radium';
import {Table, Thead, Tbody, Tr, Td, Th} from 'cat-components/lib/table';

@radium
export default class UseTable extends React.Component {
  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            {['list1', 'list2', 'list3'].map((data, index) => (
              <Th key={index}>{data}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {[
            ['item1-1', 'item2-1', 'item3-1'],
            ['item1-2', 'item2-2', 'item3-2']
          ].map((list, listIndex) => (
            <Tr key={listIndex}>
              {list.map((item, itemIndex) => (
                <Td key={itemIndex}>{item}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  }
}
