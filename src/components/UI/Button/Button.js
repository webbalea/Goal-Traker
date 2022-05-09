import React from 'react';


// =====================================
// USING STYLED COMPONENTS
// =====================================

// Styled Components are functional (just uncomment the code below)
// Also introduced styling with modules

import styled from 'styled-components';

const Button = styled.button`

  width: 100%;

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  color: white;
  background: #4a4e69;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #22223b;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  @media (min-width: 750px) {
    width: auto;
  }

`;


// =====================================
// USING MODULES
// =====================================
// import styles from './Button.module.css';

// let Button = props => {
//   return (
//     <button type={props.type} className={styles.button} onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
