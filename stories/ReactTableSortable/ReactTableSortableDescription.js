export default `
The \`ReactTableSortable\` is a functional component that renders a sortable table. It provides interactivity to the user by allowing them to sort the rows based on the values in a particular column.

This table's functionality is achieved using React's state and effect hooks. The table data and the sorted column data are stored in the state, and a sorting function is implemented that can compare and sort the rows in both ascending and descending order.

The table data is an array of arrays, where each inner array represents a row in the table. The sorted column data consists of an index (which corresponds to the column to sort by) and an ascending boolean (which indicates the sort direction).

When the header button of a column is clicked, the sorting function is invoked with the corresponding column index, and the table data is sorted based on the values in that column. If the same column header is clicked again, the sort direction toggles.

The component has a \`sortable\` prop that enables or disables the sorting functionality. When sorting is enabled, each table header renders as a button that can be clicked to sort the table by that column. When sorting is disabled, the table headers are just static text.

Accessibility is also considered in this component. The table has a caption that provides a brief summary of its content and functionality. The \`aria-sort\` attribute is used to indicate the sort direction of the sorted column, and the sort buttons in the headers include hidden chevrons that visually indicate the sort direction to sighted users.

## Usage

\`\`\`jsx
import React from 'react';
import ReactTableSortable from './ReactTableSortable';

<ReactTableSortable sortable="Sort" />
\`\`\`
`;