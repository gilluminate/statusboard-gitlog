"use strict";

var fs = require('fs'),
	moment = require('moment'),
	gitlog = require('gitlog'),
	gitlog_options = {
		repo: process.argv[2],
		number: 10,
		fields: [
			'authorName',
			'authorDate',
			'subject'
		]
	},
	outfile = process.argv[3],
	html="<table style='font-size:80%'>";

gitlog(gitlog_options, function(err, commits) {
	commits.forEach(function (commit) {
		commit.authorDate = moment(commit.authorDate).local().format("ddd h:mma");
		html+="<tr style='height:110%'><td style='width:19%;color:rgb(0, 159, 153)'>" + commit.authorName + "</td>";
		html+="<td style='width:14%;color:rgb(252, 107, 0)'>" + commit.authorDate + "</td>";
		html+="<td style='width:67%'>" + commit.subject + "</td>";
	});
	html+="</table>"

	fs.writeFile(outfile, html);

	console.log("File Saved");
});