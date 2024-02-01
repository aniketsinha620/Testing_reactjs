import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import { Main } from '../main';

describe('<Main />', () => {
    const todos = [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo 3', completed: false }
    ];

    test('displays correct number of visible todos based on route', () => {
        render(
            <MemoryRouter initialEntries={['/active']}>
                <Routes>
                    <Route path="/active" element={<Main todos={todos} dispatch={jest.fn()} />} />
                </Routes>
            </MemoryRouter>
        );

        
        expect(screen.getAllByTestId('todo-item')).toHaveLength(2);
    });

    
});
