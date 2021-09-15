import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';


describe('NewsContainer Test', () => {
    it('Renders a list of articles to page', async () => {
        render(<NewsContainer />);

        screen.getByText('Loading...');
        const ul = await screen.findByRole('list', {name: 'articles'});
        expect(ul).toMatchSnapshot();

        const searchArticles = await screen.findByRole('button', {
            name: 'find-articles',
        });
        userEvent.click(searchArticles);

        return waitFor(() => {
            const articles = screen.getAllByText('JavaScript', {exact: false});

            expect(articles[0]).toHaveTextContent('JavaScript');
        });
    });
});