import React from "react";
import theme from "theme";
import { Theme, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.ParentComponent />
		<Components.Qwertyuio />
		<Box
			padding="1rem 1rem 1rem 1rem"
			align-items="center"
			justify-content="center"
			background="--color-greyD2"
			display="flex"
		>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}First Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Components.DownloadCard background="--color-light">
				<Override slot="description" font="--headline3" />
			</Components.DownloadCard>
			<Components.DownloadCard background="--color-light" />
		</Box>
		<Components.GroupCard>
			<Image width="64px" height="64px" />
		</Components.GroupCard>
		<Box />
		<Image width="64px" height="64px" />
	</Theme>;
});