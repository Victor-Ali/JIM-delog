import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowUs = () => {
	return (
		<section style={{ marginTop: "28px" }}>
			<span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
				<strong>Stay Connected:</strong>
			</span>
			<article
				style={{
					display        : "flex",
					fontSize       : "3rem",
					justifyContent : "center",
					alignItems     : "center",
					padding        : "0px 14px 0px 0px",
					color          : "#777777",
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
		</section>
	);
};

export default FollowUs;
