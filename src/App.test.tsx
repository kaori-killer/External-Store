import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';

test('App', () => {
	render(<App />);
});

describe('App', () => {
	test('counter', () => {
		render(<App />);

		fireEvent.click(screen.getByText('증가'));

		const elements = screen.getAllByText('Counter: 1');
		expect(elements).toHaveLength(2);
	});
});
