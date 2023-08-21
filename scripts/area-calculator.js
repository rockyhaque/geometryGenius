function calculateTriangleArea(){
    // Get Triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText)

    // Get Triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);

    const area = 0.5 * base * height;

    // Showing Triangle Area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area)
}

function calculateRectangleArea(){
    // Get Rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);


    // Get Rectangle width value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);

    // Validate input
    if(isNaN(width) || isNaN(length)){
        alert('Please provide a number!');
        return;
    }

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area)
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-heigth');
    // Validate input
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number!');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal)
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;

    // input = value
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Add to Calculation entry or log
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry'); 

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}