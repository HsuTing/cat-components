'use strict';

export default `
  # [Table](./#Table)
  Use to make a table with custom style. This component is like a normal table.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import {Table, Thead, Tbody, Tr, Td, Th} from 'cat-components/lib/Table';

  export default class Example extends React.Component {
    render() {
      return (
        <Table>
          <Thead>
            <Tr>
              {['list1', 'list2', 'list3'].map((data, index) => {
                return (
                  <Th key={index}>{data}</Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {[
              ['item1-1', 'item2-1', 'item3-1'],
              ['item1-2', 'item2-2', 'item3-2'],
            ].map((list, listIndex) => {
              return (
                <Tr key={listIndex}>
                  {list.map((item, itemIndex) => {
                    return (
                      <Td key={itemIndex}>{item}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      );
    }
  }
  \`\`\`
`;
