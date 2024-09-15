import Svg from "./Svg";
import Paragraph from "./Paragraph";

function Button(className, text, id, svgPath, svgClass, handleClick) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.id = id;

    if (svgPath) {
        const svg = Svg(svgPath, svgClass);
        button.appendChild(svg);
    }

    if (text) {
        const p = Paragraph(text);
        button.appendChild(p);
    }

    if (handleClick) {
        button.addEventListener('click', handleClick);
    }

    return button;
}

export default Button;