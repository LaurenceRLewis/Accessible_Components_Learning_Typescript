const description = `
**ReactCombobox** is a robust component designed for single-selection scenarios, providing an intuitive user experience.

## Features
- An input field that updates the list of suggestions dynamically as the user types.
- Full keyboard support, ensuring good usability and accessibility.
- Different autocomplete models to tailor the functionality to specific use cases. [Future enhancement].
- When the input field is empty, the list of options is hidden.

## Autocomplete Models
The autocomplete model can be either "list", "both", or "none". Here is what each of these modes means:
- **List**: This mode provides an autocomplete behavior where the textbox populates suggestions as the user types, and allows the user to select one from a list. The list of suggestions is updated dynamically as the user types, and it is hidden when the input field is empty.
- **Both and None will be added as examples in the future**

## Accessibility
The **ReactCombobox** component uses the \`ariaAnnounce\` function for accessibility. This function dynamically creates an accessible live region announcement that is read by screen readers, ensuring important updates or notifications are communicated to all users, regardless of their accessibility needs.

This component announces the number of options in the list box when it is expanded to the screen reader user. The number is visible on screen and located below the help text in the format "x of y results".

The \`ariaAnnounce\` function is part of the open-source project [aria-announce](https://github.com/WhatSock/aria-announce), which provides utilities for managing live region announcements in web applications.

**Usage:**
\`\`\`jsx
import ReactCombobox from './ReactCombobox';

<ReactCombobox autocomplete="list" />
\`\`\`
`;

export default description;