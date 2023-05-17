const description = `
**ReactCombobox** is a robust component for single-selection scenarios. 

## Features
- An input field that shows suggestions as you type.
- Keyboard support for accessibility.
- Support for different autocomplete models.

## Autocomplete Models
The autocomplete model can be list, both or none:
- **List**: This model provides an autocomplete behavior where the textbox populates suggestions as the user types, and allows the user to select one from a list.
- **Both and None will be added as examples in the future**

## Accessibility
The **ReactCombobox** component uses the \`ariaAnnounce\` function for accessibility. This function creates an announcement that will be read by screen readers, helping to ensure that important updates or notifications are communicated to all users, regardless of their accessibility needs.

The \`ariaAnnounce\` function is a part of the open-source project [aria-announce](https://github.com/WhatSock/aria-announce), which provides utilities for managing live region announcements in web applications.

**Usage:**
\`\`\`jsx
import ReactCombobox from './ReactCombobox';

<ReactCombobox autocomplete="list" />
\`\`\`
`;

export default description;
