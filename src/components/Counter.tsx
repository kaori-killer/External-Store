import useCounterStore from '../stores/useCounterStore';

export default function Counter() {
	const store = useCounterStore();

	return (
		<div>
			<p>{`Counter: ${store.count}`}</p>
		</div>
	);
}
