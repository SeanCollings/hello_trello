import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

const SLabel = styled.label`
  margin-right: 0.5rem;
`;
const SSelect = styled.select`
  position: relative;
  min-width: 8rem;
  height: 2rem;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #cacaca;
  outline: none;
`;

const Dropdown = ({
  labelText,
  name,
  id,
  items = [],
  onChange,
  defaultValue,
}) => {
  return (
    <>
      {labelText && <SLabel htmlFor={id}>{labelText}</SLabel>}
      <SSelect
        name={name}
        id={id}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {items.map(({ name, value }) => (
          <option value={value} key={name} className="select-item">
            {name}
          </option>
        ))}
      </SSelect>
    </>
  );
};

Dropdown.propTypes = {
  labelText: string.isRequired,
  name: string.isRequired,
  id: string.isRequired,
  items: arrayOf(shape({})),
  onChange: func.isRequired,
  defaultValue: string,
};

export default Dropdown;
