import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';

const context = describe;

test('App', () => {
	render(<App />);
});

describe('App', () => {
	context('', () => {
		test('counter', () => {
			render(<App />);

			fireEvent.click(screen.getByText('증가'));
			fireEvent.click(screen.getByText('증가'));

			const elements = screen.getAllByText('Counter: 2');
			expect(elements).toHaveLength(2);
		});
	});
});
