import {container} from 'tsyringe';

import useCounterStore from '../stores/useCounterStore';

export default function CounterControl() {
	const store = useCounterStore();

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
