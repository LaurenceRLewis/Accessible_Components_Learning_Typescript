export default `
The \`ReactAccordion\` is a fully accessible component that provides a way to condense content in a structured manner. It allows users to show and hide sections of content.

Each Accordion item consists of two parts: 

- The accordion header, which includes a title and an icon indicating the expansion state. When a user interacts with the header, either through a mouse click or keyboard controls, it toggles the expansion state. 

- The accordion content, which is displayed when the accordion header is expanded. The content can be any type of HTML content.

The Accordion component supports both single and multiple active items. This means you can configure it to either allow multiple content sections to be open at once, or to ensure that only one section is open at a time.

The Accordion uses WAI-ARIA roles, states, and properties to ensure it is accessible to screen readers and other assistive technologies. It supports all the necessary keyboard interactions as recommended by the WAI-ARIA Authoring Practices, such as Arrow, Home, and End keys.

Learn more about the component and its properties at the Aria Practices Guide [Accordion Pattern (Sections With Show/Hide Functionality)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Usage

\`\`\`jsx
import React from 'react';
import Accordion from './ReactAccordion';

const items = [
  {
    title: 'Item 1',
    content: 'Content for item 1',
  },
  {
    title: 'Item 2',
    content: 'Content for item 2',
  },
  // More items...
];

<Accordion items={items} groupName="group1" multiExpand={true} />
\`\`\`
`;
