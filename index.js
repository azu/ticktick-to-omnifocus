const path = require("path");
const data = require(path.resolve(process.cwd(), process.argv[2]));
const moment = require("moment");
const indentString = require('indent-string');
const toContext = (text) => {
    if (/#[\d\w.-]+/.test(text)) {
        return text.replace(/#([\d\w.-]+)/g, "@context($1)");
    }
    return "";
};


const convert = (item) => {
    const title = item["Title"];
    const content = String(item["Content"] || "").split("\n").map(line => {
        return line.replace(/^-/, "")
    }).join("\n");
    const status = item["Status"];
    const isCompleted = status === 2;
    const date = item["Completed Time"];
    const completedTag = date && isCompleted ? `@done(${moment(date).format("YYYY-MM-DD hh:mm")})` : "";
    return `- ${title.trim()} ${toContext(title)} ${completedTag}
${indentString(content, 1, "\t")}
`;
};

const results = data.map(item => convert(item));
console.log(results.join("\n"));
