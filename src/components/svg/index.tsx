import { SVGAttributes } from "react";

const Svg = (props) => {
	return <svg {...props}>{props.children}</svg>
} 

Svg.defaultProps = {
	color: "text",
	width: "24px",
	xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {

}