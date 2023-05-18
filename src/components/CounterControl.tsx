import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function CounterControl() {
	const store = container.resolve(Store);

	const handleClickIncrease = () => {
		store.count += 1;
		store.publish();
	};

	const handleClickDecrease = () => {
		store.count -= 1;
		store.publish();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button type='button' onClick={handleClickIncrease}>
                증가
			</button>
			<button type='button' onClick={handleClickDecrease}>
                감소
			</button>
		</div>
	);
}
