import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

// Import the component you want to test
import { Item } from '../Item';

describe('<Item />', () => {
    test('renders todo item with correct title and completion status', () => {
        const todo = { id: 1, title: 'Todo 1', completed: false };
        const dispatchMock = jest.fn();
    
        render(<Item todo={todo} dispatch={dispatchMock} />);
    
        // Check if the todo item is rendered with correct title
        const todoLabel = screen.getByTestId('todo-item-label');
        expect(todoLabel).toHaveTextContent('Todo 1');
    
        // Check if the todo item is not completed
        const todoToggle = screen.getByTestId('todo-item-toggle');
        expect(todoToggle).not.toBeChecked();
      });


     
});
