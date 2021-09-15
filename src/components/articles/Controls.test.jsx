import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
    it('displays a form with an input and submit button', () => {
      render(
        <Controls
          topic="JavaScript"
          onTopicSearch={() => {}}
          onSubmit={() => {}}
        />
      );
  
      const controlsForm = screen.getByTestId('news-form');
      expect(controlsForm).toMatchSnapshot();
    });
  });