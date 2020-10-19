import React from 'react';
import atomize from "@quarkly/atomize";
const Wrapper = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const Card = ({
	theme,
	radius,
	children,
	...props
}) => {
	return <Wrapper
		m="16px"
		p="24px"
		sm-p="16px"
		md-p="20px"
		bgc={`--${theme === 'light' ? 'white' : 'darkL2'}`}
		bxsh="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
		hover-bxsh="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
		trs="all 0.3s cubic-bezier(.25,.8,.25,1)"
		bdrs={radius}
		{...props}
	>
		      
		{children}
		    
	</Wrapper>;
};

export default atomize(Card)({
	name: "Card",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Card — my awesome component"
	},
	propInfo: {
		theme: {
			description: {
				en: "Card theme"
			},
			control: "radio-group",
			variants: ['light', 'dark'],
			weight: 1
		},
		radius: {
			description: {
				en: "Border radius"
			},
			control: "input",
			weight: 1
		}
	}
}, {
	theme: 'light',
	radius: '0px'
});