import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { white } from "../../../components/values/colors";
import { primary, secondary } from "../../../components/values/gradients";
import { level1 } from "../../../components/values/shadows";

const MenuItem = props => {
	const { children, to, type, active, style, section } = props;
	const isActiveRoute = () => {
		// const currentSection = props.location.pathname.split("/")[1];

		// return (
		// 	(currentSection === to.split("/")[1] && currentSection === section) ||
		// 	props.location.pathname === to ||
		// 	active
    // );
    return false;
	};

	return (
		<Link
			to={to}
			style={Object.assign(
				{
					padding: "0.6em 1em",
					textTransform: "uppercase",
					color: white
				},
				isActiveRoute()
					? {
							backgroundImage: type === "secondary" ? secondary : primary,
							borderRadius: "1.4em",
							boxShadow: level1
					  }
					: style
			)}>
			{children}
		</Link>
	);
};

// Component Properties
MenuItem.propTypes = {
	to: PropTypes.string.isRequired,
	type: PropTypes.string,
	active: PropTypes.bool,
	style: PropTypes.object
};
MenuItem.defaultProps = {
	type: "secondary",
	active: false,
	style: {}
};

export default MenuItem;
