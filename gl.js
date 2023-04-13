function init(canvas, gl) {
    gl.canvas.width  = window.innerWidth;
    gl.canvas.height = window.innerHeight;

    // webgl boilerplate
    gl.viewport(0,0,canvas.width, canvas.height);
    const vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, document.getElementById('vertex-shader').innerText);
    gl.compileShader(vertShader);
    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, document.getElementById('fragment-shader').innerText);
    gl.compileShader(fragShader);
    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragShader));
    }
    const prog = gl.createProgram();
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const vertBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,  -1,-1,  1,-1, 1,1]), gl.STATIC_DRAW);
    const coordPtr = gl.getAttribLocation(prog, 'coord');
    gl.vertexAttribPointer(coordPtr, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordPtr);
    gl.clearColor(1,0,0,1);

    return prog
}

function init_interactive(canvas, gl) {
    
}

function create_sliders(parent, spec) {
    
}

function toggleControls() {
    toggler = document.getElementById("toggler");
    boxes = document.querySelectorAll(".box, .header");
    stateChar = toggler.innerHTML;
    if(stateChar === "⇲") { // hide
        toggler.innerHTML = "⇱";
        boxes.forEach((box) => {box.classList.add("hidden")})
    } else if(stateChar == "⇱") { // show
        toggler.innerHTML = "⇲";
        boxes.forEach((box) => {box.classList.remove("hidden")})
    }
}
