import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"children": <>
		<Link href="https://google.com/" target="_blank">
			Some text
		</Link>
		<Link href="https://google.com/" target="_blank">
			Some text
		</Link>
	</>
};
const overrides = {};

const Qwertyuio = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Qwertyuio, { ...Box,
	defaultProps,
	overrides
});
export default Qwertyuio;