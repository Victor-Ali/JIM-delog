import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowUs = ({ size, color }) => {
	return (
		<article
			style={{
				display        : "flex",
				fontSize       : size,
				justifyContent : "center",
				alignItems     : "center",
				padding        : "0px 14px 0px 0px",
				color,
				cursor         : "pointer",
			}}
		>
			<span style={{ paddingRight: "15px" }}>
				<FontAwesomeIcon icon={[ "fab", "facebook" ]} />
			</span>
			<span>
				<FontAwesomeIcon icon={[ "fab", "twitter" ]} />
			</span>
			<span style={{ paddingLeft: "15px" }}>
				<FontAwesomeIcon icon={[ "fab", "instagram" ]} />
			</span>
		</article>
	);
};

export default FollowUs;
