import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';

test('App', () => {
	render(<App />);
});

describe('App', () => {
	test('counter', () => {
		render(<App />);

		fireEvent.click(screen.getByText('증가'));
		screen.getByText('Count: 1');
	});
});
