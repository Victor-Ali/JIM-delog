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
			<a href='https://www.facebook.com/ali.victor.921' target='blank' style={{ paddingRight: "15px" }}>
				<FontAwesomeIcon icon={[ "fab", "facebook" ]} style={{ color: "#4267B2" }} />
			</a>
			<a href='https://twitter.com/VictorAliJIM' target='blank'>
				<FontAwesomeIcon icon={[ "fab", "twitter" ]} style={{ color: "#1DA1F2" }} />
			</a>
			<a href='https://www.instagram.com/victorali340/' target='blank' style={{ paddingLeft: "15px" }}>
				<FontAwesomeIcon icon={[ "fab", "instagram" ]} style={{ color: "#CE2C88" }} />
			</a>
		</article>
	);
};

export default FollowUs;
