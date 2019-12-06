export default function(px) {
	const baseFont = parseFloat(__BASEFONT__);
	return `${px/baseFont}rem`;
}