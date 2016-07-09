'use strict';

var fs = require('fs');
var path = require('path');
var jsdom = require("jsdom");

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function translateName(name) {
    if (name != "") {

        var re = /([\s\r\n])/gmi;
        var subst = '';

        name = name.replace(re, subst);

        name = name.replaceAt(0, name[0].toUpperCase());

        for (var i = 0; i < name.length; i++) {
            if (name[i] == "-") {
                i++;

                name = name.replaceAt(i, name[i].toUpperCase());
            }
        }

        re = /([-])/gmi;

        name = name.replace(re, subst);

        return name;
    }
}

function storeIcon(name, svgContent, exportFolder) {

    name = translateName(name);

    var data = "var React = require('react');\r\nvar IconBase = require(__dirname + '/../components/IconBase/IconBase');\r\n\r\n";

    data += "var " + name + " = React.createClass({\r\n\trender: function() {\r\n\t\treturn ";
    data += "<IconBase>" + svgContent + "</IconBase>;\r\n\t}\r\n});";

    fs.writeFile(exportFolder + "/" + name + ".js", data, function (err) {
        if (err) throw err;

        console.log(name + ".js successfully stored");
    });
}

function openSvg(filename, exportFolder) {

    var name = path.basename(filename, ".svg");

    jsdom.env({

        file: filename,
        done: function done(errors, window) {
            console.warn(errors);

            var svg = window.document.getElementsByTagName("svg")[0];
            var svgInner = svg.innerHTML;

            if (svgInner != "") storeIcon(name, svgInner, exportFolder);
            window.close();
        } });
}

openSvg(__dirname + '/lib/alert.svg', __dirname + "/icons/");

var folder = "/lib";

fs.readdir(__dirname + folder, function (err, files) {
    if (err) throw err;

    files.forEach(function (name) {
        var filePath = path.join(__dirname + folder, name);
        openSvg(filePath, __dirname + "/icons/");
    });
});