import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import DownloadCard from "./DownloadCard";
const defaultProps = {
	"display": "flex",
	"justify-content": "center",
	"border-width": "10px",
	"border-style": "solid",
	"border-color": "#ff0000"
};
const overrides = {
	"downloadCard": {
		"kind": "DownloadCard",
		"props": {}
	},
	"downloadCard1": {
		"kind": "DownloadCard",
		"props": {}
	},
	"downloadCard2": {
		"kind": "DownloadCard",
		"props": {}
	},
	"downloadCard3": {
		"kind": "DownloadCard",
		"props": {}
	}
};

const GroupCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		111111
		<DownloadCard {...override("downloadCard")} />
		<DownloadCard {...override("downloadCard1")} />
		<DownloadCard {...override("downloadCard2")} />
		<DownloadCard {...override("downloadCard3")} />
		{children}
	</Box>;
};

Object.assign(GroupCard, { ...Box,
	defaultProps,
	overrides
});
export default GroupCard;