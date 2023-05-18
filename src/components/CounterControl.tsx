import useCounterStore from '../hooks/useCounterStore';

export default function CounterControl() {
	const store = useCounterStore();

	const handleClickIncrease = () => {
		store.increase();
	};

	const handleClickDecrease = () => {
		store.decrease();
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
