let html = document.getElementById("html");
html.addEventListener("click", showHTML);

function showHTML() {
    document.getElementById("html-text").innerHTML = '&lt;h1&gt;Hello!&lt;&#47;h1&gt; <br> &lt;p&gt;I can do all sorts of things with HTML&lt;&#47;p&gt;'
}

let css = document.getElementById("css");
css.addEventListener("click", showCSS);

function showCSS() {
    document.getElementById("css-text").innerHTML = '.i-can-also-use-CSS {<br>&nbsp;&nbsp;&nbsp;&nbsp;font-color: "white";<br>&nbsp;&nbsp;&nbsp;&nbsp;font-family: "Scottish Maarcis", serif;<br>}'
        
}

let javascript = document.getElementById("javascript");
javascript.addEventListener("click", showJS);

function showJS() {
    document.getElementById("javascript-text").innerHTML = 'let = maarcisMessage = ["I", "can", "also", "use", "JavaScript"]<br>for(i = 0; i < maarcisMessage.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;whyYouShouldHireMearray.push(maarcisMessage[i])<br>};'
        
}

let python = document.getElementById("python");
python.addEventListener("click", showPython);

function showPython() {
    document.getElementById("python-text").innerHTML = 'for reasonsToHire in maarcisSkills:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("I can also use Python")'
        
}