import React, { useState, useCallback, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import Field from './Par3';
const overrides = {
	'Basic options': {
		kind: 'Box'
	},
	'Other options': {
		kind: 'Box'
	},
	'Content': {
		kind: 'Box'
	}
};
const defaults = {
	income: 100
};

const App = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [income, setIncome] = useState(defaults.income);

	const handleChangeIncome = e => setIncome(e.target.value);

	return <Box {...rest}>
		<Box {...override('Basic options')}>
			<Field defaultValue={income} updateValue={handleChangeIncome} />
		</Box>
		<Box {...override('Content')}>
			{income}
		</Box>
		    
	</Box>;
};

export default Object.assign(App, {
	title: 'App Title',
	description: {
		en: "App Description"
	},
	overrides
});