/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

export interface CounterState {
	count: number;
}
const intialValue: CounterState = { count: 0 };
export type CounterContextType = {
	state: CounterState;
	reset(): void; // state resetleme
	increase(): void; // state counter artırma
	decrease(): void; // state counter azaltma
};

export const CounterContext = createContext<CounterContextType | undefined>(
	undefined
);

// <CounterProvider><A /> <B /> <CounterProvider />

const CounterProvider = ({ children }: any) => {
	const [state, setState] = useState<CounterState>(intialValue); // global state useState hook ile Provider function içerisinde tutuluyor ve değiştiriliyor.

	console.log('counter-context');

	const reset = () => {
		setState({ count: 0 });
	};

	const increase = () => {
		setState({ count: state.count + 1 });
	};

	const decrease = () => {
		setState({ count: state.count - 1 });
	};

	const values = {
		state, // güncel state bilgisini okumam gerekir
		reset, // dışarıdan state özel durumlarda güncellemem gerekir.
		increase,
		decrease,
	};

	return (
		<CounterContext.Provider value={values}>{children}</CounterContext.Provider>
	);
};

export default CounterProvider;
