import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
    it('displays an article', () => {
      render(
        <Article title="I like grapes" author="Farmer Dan" description="Grape are great" />
      );
  
      const article = screen.getByText('I like grapes','Farmer Dan', 'Grapes are great');
      expect(article).toMatchSnapshot();
    });
  });