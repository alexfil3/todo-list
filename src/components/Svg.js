function Svg(svgPath, className) {
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    svg.classList.add(className);
    use.setAttribute("xlink:href", svgPath);
    svg.appendChild(use);

    return svg;
} 

export default Svg;