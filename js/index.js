//const getCanvas = document.getElementById("diagramCanvas");
const canvas = new fabric.Canvas("diagramCanvas", {});

// Get the color picker input
const colorPicker = document.getElementById("colorPicker");

// Event listener to update color of selected object
colorPicker.addEventListener("input", function () {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        if (activeObject.type === "line") {
            activeObject.set("stroke", colorPicker.value);
        } else {
            activeObject.set("fill", colorPicker.value);
        }
        canvas.renderAll();
    }
});

// Add rectangle functionality
document.getElementById("addRect").addEventListener("click", function () {
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: colorPicker.value,
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
        fill: colorPicker.value,
    });
    canvas.add(circle);
});

// Add line functionality
document.getElementById("addLine").addEventListener("click", function () {
    const line = new fabric.Line([50, 50, 200, 200], {
        stroke: colorPicker.value,
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
        fill: colorPicker.value,
        color: colorPicker.value,
    });
    canvas.add(text);
});

document
    .getElementById("addParallelogram")
    .addEventListener("click", function () {
        var radius = 50;
        var points = [
            { x: 0, y: 0 },
            { x: 50, y: 0 },
            { x: 30, y: 50 },
            { x: -20, y: 50 },
        ];
        const para = new fabric.Polygon(
            points,
            {
                fill: colorPicker.value,
                top: 50,
                left: 50,
            },
            false
        );
        canvas.add(para);
    });

document.getElementById("addDiamond").addEventListener("click", function () {
    // Get coordinates
    var sweep = Math.PI / 2;
    var radius = 50;
    var points = [];
    for (var i = 0; i < 4; i++) {
        var x = radius + radius * Math.cos(i * sweep);
        var y = radius + radius * Math.sin(i * sweep);
        points.push({ x: x, y: y });
    }

    const diamond = new fabric.Polygon(
        points,
        {
            fill: colorPicker.value,
            left: 50,
            top: 50,
        },
        false
    );

    canvas.add(diamond);
});

document.getElementById("exportPng").addEventListener("click", function () {
    var canvas = get
});

// TODO: delete current element, export png

document
    .getElementById("deleteElement")
    .addEventListener("click", function () {});
