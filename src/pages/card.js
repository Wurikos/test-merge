import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
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
		<Components.Par4 />
		<Components.GroupCard />
		<Box
			display="flex"
			justify-content="center"
			border-width="10px"
			border-style="solid"
			border-color="#ff0000"
		>
			<Components.DownloadCard theme="dark" />
			<Components.DownloadCard />
			<Components.DownloadCard />
			<Components.DownloadCard />
		</Box>
	</Theme>;
});