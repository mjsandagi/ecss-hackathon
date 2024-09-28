//const getCanvas = document.getElementById("diagramCanvas");
const canvas = new fabric.Canvas("diagramCanvas", {});

// Get the color picker input
const colorPicker = document.getElementById("colorPicker");

// Add rectangle functionality
document.getElementById("addRect").addEventListener("click", function () {
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: "red",
        width: 100,
        height: 100,
    });
    canvas.add(rect);
});

// Add circle functionality
document.getElementById("addCircle").addEventListener("click", function () {
    const circle = new fabric.Circle({
        left: 150,
        top: 150,
        radius: 50,
        fill: "blue",
    });
    canvas.add(circle);
});

// Add line functionality
document.getElementById("addLine").addEventListener("click", function () {
    const line = new fabric.Line([50, 50, 200, 200], {
        stroke: "black",
        strokeWidth: 2,
    });
    canvas.add(line);
});

// Clear canvas
document.getElementById("clearAll").addEventListener("click", function () {
    canvas.clear();
});

document.getElementById("addText").addEventListener("click", function () {
    const text = new fabric.IText("Insert text", {
        left: 200,
        top: 200,
        fontSize: 20,
        fill: "black",
    });
    canvas.add(text);
});
