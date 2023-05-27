import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ariaAnnounce from '../../.storybook/utils/ariaAnnounce';
import useKeyboardNavigation from './keyboardNavigation';
import styles from './ReactMultiSelect.module.css';

const veganIngredients = [
  'Tofu',
  'Almond Milk',
  'Avocado',
  'Quinoa',
  'Kale',
  'Lentils'
];

const ReactMultiSelect = ({ selectionModel }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isListboxOpen, setListboxOpen] = useState(false);
  const listboxRef = useRef(null);

  useEffect(() => {
    if (isListboxOpen && listboxRef.current.children.length > 0) {
      listboxRef.current.children[0].focus();
    }
  }, [isListboxOpen]);

  const handleSelectOption = (option) => {
    let newSelectedOptions;
    if (selectionModel === 'alternative') {
      newSelectedOptions = [option];
    } else {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
    //ariaAnnounce(`Selected ${newSelectedOptions.length} items.`);
    ariaAnnounce(`You have ${newSelectedOptions.length} ingredients selected.`);
  };

  const handleKeyDown = useKeyboardNavigation(isListboxOpen, listboxRef, handleSelectOption, setListboxOpen, selectionModel);

  const handleDismissOption = (option) => {
    const newSelectedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(newSelectedOptions);
    ariaAnnounce(`Removed ${option}. ${newSelectedOptions.length} items remaining.`);
  };

  return (
    <>
    <h2>Shopping List</h2>
  <p className={styles['HelpText']} >Remove ingredients from you shopping list by clicking on the buttons below.</p>
    <div className={styles['multiSelectContainer']}>
  <div className={styles['selectedOptions']}>
      {selectedOptions.map((option, index) => (
  <button 
    key={index}
    className={styles['selectedOptionButton']}
    onClick={() => handleDismissOption(option)}
    aria-label={`Remove ${option}`}
  >
    {option} &times;
  </button>
))}
      </div>
      <p className={styles['SrOnly']} >You have {selectedOptions.length} ingredients selected.</p>
      <button 
      className={styles['listboxToggleButton']} 
      onClick={() => setListboxOpen(!isListboxOpen)}>Ingredients
      </button>
      {isListboxOpen && (
        <ul
          ref={listboxRef}
          className={styles['listbox']}
          role="listbox"
          aria-label="Ingredients"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          {veganIngredients.map((option, index) => (
            <li
              key={index}
              role="option"
              aria-selected={selectedOptions.includes(option)}
              className={classNames(styles['listboxOption'], { [styles['selected']]: selectedOptions.includes(option) })}
              onClick={() => handleSelectOption(option)}
              tabIndex="-1" // Ensure list items can receive focus
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

ReactMultiSelect.propTypes = {
  selectionModel: PropTypes.oneOf(['default', 'alternative']),
};

ReactMultiSelect.defaultProps = {
  selectionModel: 'default',
};

export default ReactMultiSelect;