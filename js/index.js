// const getCanvas = document.getElementById("diagramCanvas");
// backgroundColor: "white"
const canvas = new fabric.Canvas("diagramCanvas", {});

// Get the color picker input
const colorPicker = document.getElementById("colorPicker");

const deleteSelectedObject = function () {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
        canvas.renderAll();
    }
};

// Event listener to delete object
document.addEventListener("keydown", function (event) {
    if (event.key === "Delete" || event.key === "Backspace") {
        deleteSelectedObject();
    }
});

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
    canvas.setActiveObject(rect);
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
    canvas.setActiveObject(circle);
});

// Add line functionality
document.getElementById("addLine").addEventListener("click", function () {
    const line = new fabric.Line([50, 50, 200, 200], {
        stroke: colorPicker.value,
        strokeWidth: 2,
    });
    canvas.add(line);
    canvas.setActiveObject(line);
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
    canvas.setActiveObject(text);
});

//parallelogram
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
        canvas.setActiveObject(para);
    });

//diamond
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
    canvas.setActiveObject(diamond);
});

//arrow
document.getElementById("addArrow").addEventListener("click", function () {
    var points = [
        { x: 0, y: 0 },
        { x: -20, y: 10 },
        { x: -5, y: 10 },
        { x: -5, y: 60 },
        { x: 5, y: 60 },
        { x: 5, y: 10 },
        { x: 20, y: 10 },
    ];
    const arrow = new fabric.Polygon(
        points,
        {
            fill: colorPicker.value,
            left: 50,
            top: 50,
        },
        false
    );
    canvas.add(arrow);
    canvas.setActiveObject(arrow);
});

//export to png
document.getElementById("exportPng").addEventListener("click", function () {
    var data = canvas.toDataURL("image/png", 1.0);
    var save = document.createElement("a");
    save.href = data;
    save.download = "Diagram.png";
    document.body.appendChild(save);
    save.click();
});

document.getElementById("deleteElement").addEventListener("click", function () {
    deleteSelectedObject();
});
