function convertJsonToHtmlTable(input) {
    let html = '<table>\n';

    for (let line of input) {
        let data = JSON.parse(line);

        html += '\t<tr>\n';
        html += '\t\t<td>' + data.name + '</td>\n';
        html += '\t\t<td>' + data.position + '</td>\n';
        html += '\t\t<td>' + data.salary + '</td>\n';
        html += '\t</tr>\n'
    };

    html += '</table>';
    return html;
}

console.log(convertJsonToHtmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));