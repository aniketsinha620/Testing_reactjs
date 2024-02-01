import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Header } from '../header';

// Mock the dispatch function
const dispatchMock = jest.fn();

describe('<Header />', () => {
    test('adds a new todo', async () => {
        render(<Header dispatch={dispatchMock} />);

        const input = screen.getByPlaceholderText('What needs to be done?');
    });

    test('should we able to write', async () => {
        render(<Header dispatch={dispatchMock} />);
        const input = screen.getByPlaceholderText('What needs to be done?');
        fireEvent.change(input, { target: { value: 'Do laundry' } });
        expect(input.value).toBe('Do laundry');
    });


});
