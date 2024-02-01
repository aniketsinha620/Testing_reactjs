import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

// Import the component you want to test
import { Footer } from '../footer';

describe('<Footer />', () => {
    test('renders footer with correct number of active items and navigation links', () => {
        const todos = [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: false },
        ];
        const dispatchMock = jest.fn();

        render(
            <MemoryRouter>
                <Footer todos={todos} dispatch={dispatchMock} />
            </MemoryRouter>
        );

        // Check if the number of active items is rendered correctly
        const todoCount = screen.getByText('2 items left!');
        expect(todoCount).toBeInTheDocument();

        // Check if navigation links are rendered
        const allLink = screen.getByText('All');
        expect(allLink).toBeInTheDocument();

        const activeLink = screen.getByText('Active');
        expect(activeLink).toBeInTheDocument();

        const completedLink = screen.getByText('Completed');
        expect(completedLink).toBeInTheDocument();
    });

    test('invokes removeCompleted function when Clear completed button is clicked', () => {
        const todos = [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: true },
        ];
        const dispatchMock = jest.fn();

        render(
            <MemoryRouter>
                <Footer todos={todos} dispatch={dispatchMock} />
            </MemoryRouter>
        );

        // Click on the Clear completed button
        const clearButton = screen.getByText('Clear completed');
        fireEvent.click(clearButton);

        // Check if the removeCompleted function is called
        expect(dispatchMock).toHaveBeenCalledWith({ type: 'REMOVE_COMPLETED_ITEMS' });
    });
});
