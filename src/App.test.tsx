import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';

const context = describe;

test('App', () => {
	render(<App />);
});

describe('App', () => {
	context('증가 버튼 1번 눌렀을 때', () => {
		test('counter', () => {
			render(<App />);

			fireEvent.click(screen.getByText('증가'));

			const elements = screen.getAllByText('Counter: 1');
			expect(elements).toHaveLength(2);
		});
	});

	context('증가 버튼 2번 눌렀을 때', () => {
		test('counter', () => {
			render(<App />);

			fireEvent.click(screen.getByText('증가'));
			fireEvent.click(screen.getByText('증가'));

			const elements = screen.getAllByText('Counter: 2');
			expect(elements).toHaveLength(2);
		});
	});
});
