
const terrainStyle = "./style-terrain.json";
const satelliteStyle = "./style-satellite.json";
let currentStyle = terrainStyle;

const map = new maplibregl.Map({
    container: 'map',
    style: currentStyle,
    center: [174.397, -36.770], // Woodhill MTB Park
    zoom: 13
});

document.getElementById("toggleBtn").onclick = () => {
    currentStyle = (currentStyle === terrainStyle) ? satelliteStyle : terrainStyle;
    map.setStyle(currentStyle);
};
