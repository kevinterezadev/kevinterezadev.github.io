const jsElement = document.getElementById("js");
const bashElement = document.getElementById("bash");
const gitElement = document.getElementById("git");
const cssElement = document.getElementById("css");

const jsCode = `const developer = {
    name: "Kevin Tereza",
    role: "Web Developer",
    mindset: "Always learning"
};`;

const bashCode = `$ npm run build

> portfolio@2.0.0 build

✓ Compiling assets
✓ Optimizing files
✓ Build completed successfully`;

const gitCode = `$ git commit -m "release: portfolio v2.0"`;

const cssCode = `:root {
    --accent: #E11D48;
    --theme: "Minimal";
    --mode: "Dark";
}`;

jsElement.textContent = jsCode;
bashElement.textContent = bashCode;
gitElement.textContent = gitCode;
cssElement.textContent = cssCode;

Prism.highlightElement(jsElement);
Prism.highlightElement(bashElement);
Prism.highlightElement(gitElement);
Prism.highlightElement(cssElement);
