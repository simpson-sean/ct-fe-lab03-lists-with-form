import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from './ArticlesList';

describe('ArticlesList', () => {
  it('displays a list of Articles', () => {
    render(
      <ArticlesList
        articles={[
          {
            title: 'I like grapes',
            author: 'Farmer Dan',
            description: 'Grapes make wine',
          },
          {
            title: 'Ferrets make ok pets',
            author:'Guy Ferreto',
            description: 'They steal your things',
          },
        ]}
      />
    );

    const ul = screen.getByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});