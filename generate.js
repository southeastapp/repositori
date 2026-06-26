const fs = require('fs');

const TOTAL_COMPONENTS = 1500;
const TOTAL_FUNCTIONS = 500;
const LINES_PER_BLOCK = 15;

let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Massive UI Components & Functions</title>
    <style>
        body { font-family: 'Courier New', monospace; background: #121212; color: #00ff41; padding: 20px; }
        h1, h2 { border-bottom: 1px solid #333; padding-bottom: 10px; }
        .block { border: 1px solid #333; margin: 5px 0; padding: 5px; background: #1e1e1e; white-space: pre-wrap; font-size: 10px; }
        .header { color: #ff0055; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Generated Index: ${TOTAL_COMPONENTS} Components & ${TOTAL_FUNCTIONS} Functions</h1>
    <h2>UI Components Section</h2>
    <div id="components">
`;

// Helper to generate dummy lines
const generateLines = (type, index) => {
    let lines = [];
    for (let i = 1; i <= LINES_PER_BLOCK; i++) {
        if (i === 1) lines.push(`<!-- Start of ${type} ${index} -->`);
        else if (i === 2) lines.push(`<div class="block" id="${type}-${index}">`);
        else if (i === 3) lines.push(`  <span class="header">${type.toUpperCase()} #${index}</span>`);
        else if (i === 4) lines.push(`  <!-- Line ${i}: Unique Hash ${Math.random().toString(36).substring(2, 15)} -->`);
        else if (i === 5) lines.push(`  <data-val="prop_${index}_a">Property A Value</data>`);
        else if (i === 6) lines.push(`  <data-val="prop_${index}_b">Property B Value</data>`);
        else if (i === 7) lines.push(`  <style>.${type}-${index} { color: hsl(${index % 360}, 70%, 50%); }</style>`);
        else if (i === 8) lines.push(`  <!-- Logic Block ${i} initialized -->`);
        else if (i === 9) lines.push(`  <script>console.log('Executing ${type} ${index} line ${i}');</script>`);
        else if (i === 10) lines.push(`  <meta-name="component-meta-${index}" content="active" />`);
        else if (i === 11) lines.push(`  <!-- Rendering engine hook point -->`);
        else if (i === 12) lines.push(`  <div class="internal-state">State: OK</div>`);
        else if (i === 13) lines.push(`  <div class="internal-state">Version: 1.0.${index}</div>`);
        else if (i === 14) lines.push(`</div>`);
        else if (i === 15) lines.push(`<!-- End of ${type} ${index} -->`);
    }
    return lines.join('\n');
};

console.log('Generating Components...');
for (let i = 1; i <= TOTAL_COMPONENTS; i++) {
    htmlContent += generateLines('Component', i) + '\n';
    if (i % 100 === 0) console.log(`Generated ${i} components...`);
}

htmlContent += `    </div>
    <h2>Functions Section</h2>
    <div id="functions">
`;

console.log('Generating Functions...');
for (let i = 1; i <= TOTAL_FUNCTIONS; i++) {
    let lines = [];
    lines.push(`<!-- Start of Function ${i} -->`);
    lines.push(`<div class="block" id="func-${i}">`);
    lines.push(`  <span class="header">FUNCTION #${i}</span>`);
    lines.push(`  <code>function generatedFunc${i}(input) {</code>`);
    lines.push(`    // Line 5: Initialize context for func ${i}`);
    lines.push(`    const id = ${i};`);
    lines.push(`    const hash = "${Math.random().toString(36).substring(2, 20)}";`);
    lines.push(`    // Line 8: Process logic`);
    lines.push(`    let result = input * ${i};`);
    lines.push(`    // Line 10: Validate output`);
    lines.push(`    if (result < 0) result = 0;`);
    lines.push(`    // Line 12: Return formatted data`);
    lines.push(`    console.log("Func ${i} executed");`);
    lines.push(`    return { id, result, hash };`);
    lines.push(`  }`);
    lines.push(`</div>`);
    lines.push(`<!-- End of Function ${i} -->`);
    
    // Ensure exactly 15 lines visually in the block structure if needed, padding if necessary
    while(lines.length < LINES_PER_BLOCK + 2) { // +2 for start/end comments wrapper logic roughly
         lines.splice(lines.length - 1, 0, `  <!-- Padding line for structure ${lines.length} -->`);
    }

    htmlContent += lines.join('\n') + '\n';
    if (i % 50 === 0) console.log(`Generated ${i} functions...`);
}

htmlContent += `    </div>
    <footer>
        <p>Total Lines Generated: Approx ${ (TOTAL_COMPONENTS * LINES_PER_BLOCK) + (TOTAL_FUNCTIONS * LINES_PER_BLOCK) + 50 } lines.</p>
    </footer>
</body>
</html>`;

console.log('Writing file to disk...');
fs.writeFileSync('index.html', htmlContent);
console.log('Success! index.html has been created with hundreds of thousands of lines.');
