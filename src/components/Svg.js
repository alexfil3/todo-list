function Svg(svgPath, className) {
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    svg.classList.add(className);
    use.setAttribute("href", "#icon-pencil");
    svg.appendChild(use);


    return svg;
} 

export default Svg;