function convertJsonToHtmlTable(input) {
    let objects = JSON.parse(input)
    let html = "<table>\n   <tr>";

    for (let key of Object.keys(objects[0])) {
        html += `<th>${key}</th>`;
    }
    html += "</tr>\n";

    for (let object of objects) {
        html += '   <tr>';

        for (let description of Object.keys(object)) {
            html += '<td>' + htmlEscapeChars(object[description]) + '</td>'
        }

        html += '</tr>\n';
    }

    html += "</table>";

    return html;

    function htmlEscapeChars(key) {
        let replaced = key.toString();
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }
}

convertJsonToHtmlTable(['[{"Name": "Pesho <div>-a","Age": 20,"City": "Sofia"},{"Name": "Gosho","Age": 18,"City": "Plovdiv"},{"Name": "Angel","Age": 18,"City": "Velike Tarnovo"}]']);