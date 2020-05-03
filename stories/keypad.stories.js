import React from 'react';
import MathKeypad from '../src';
import MathQuillKeyPad from '../src/mathquill';

export default {
  title: 'Math Keypad'
};

// Basic keypad
export const basic = () => <MathKeypad />;

basic.story = {
  name: 'Basic'
};

// MathQuill keypad
export const mathquill = () => <MathQuillKeyPad />;

mathquill.story = {
  name: 'MathQuill'
};
