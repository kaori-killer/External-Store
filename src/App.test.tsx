import {render, screen, fireEvent} from '@testing-library/react';

import {container} from 'tsyringe';

import App from './App';

const context = describe;

test('App', () => {
	render(<App />);
});

describe('App', () => {
	beforeEach(() => {
		// 각 테스트가 독립적일 수 있게 초기화
		container.clearInstances();
	});

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
