//@flow
import React from 'react';
// type Props = {
//   store: string,
// };

import {RadioGroup, RadioItem} from './coreUI/RadioGroup';

export default function App() {
  return (
    <div>
      <RadioGroup name="favColor">
        <RadioItem>Red</RadioItem>
        <RadioItem>Green</RadioItem>
        <RadioItem>Blue</RadioItem>
      </RadioGroup>
      <RadioGroup name="favSport">
        <RadioItem>Badminton</RadioItem>
        <RadioItem>Soccer</RadioItem>
        <RadioItem>Basketball</RadioItem>
      </RadioGroup>
    </div>
  );
}
