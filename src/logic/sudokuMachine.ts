import { createMachine } from 'xstate'

type TrafficLightContext = undefined

type TrafficLightEvent = { type: 'NEXT' }

type TrafficLightState =
	| { value: 'green'; context: undefined }
	| { value: 'yellow'; context: undefined }
	| { value: 'red'; context: undefined }

export const trafficLightMachine = createMachine<
	TrafficLightContext,
	TrafficLightEvent,
	TrafficLightState
>({
	id: 'trafficLight',
	initial: 'red',
	states: {
		green: {
			on: { NEXT: 'yellow' },
		},
		yellow: {
			on: { NEXT: 'red' },
		},
		red: {
			on: { NEXT: 'green' },
		},
	},
})
