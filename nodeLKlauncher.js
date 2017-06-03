var exec = require('child_process').exec,
	https = require('https'),
	fs = require('fs');

process.on("uncaughtException", function(err, b) {
	console.log("\033[91mErreur du launcher !\033[00m");
	console.log("\n" + err.stack + "\n");
	writeRapportlog(err);
	setTimeout(function () {}, 20000);
});

var _LKfolder = "";
(function (folder) {
	_LKfolder = folder += "/.LeeKloud/";
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
	}
	process.chdir(folder);
})(process.env.HOME || process.env.APPDATA || process.env.USERPROFILE || process.env.HOMEPATH);

(function () {
	if (!fs.existsSync("_LeeKloud.js")) {
		getLeeKloud(function (res, data) {
			setFileContent("_LeeKloud.js", data);
			require(_LKfolder+"/_LeeKloud.js");
		});
	} else {
		var moi = require(_LKfolder+"/_LeeKloud.js");
	}
})();

function writeRapportlog(err) {
	var erreur = "-- " + new Date() + " -- \n\n" + err.stack + "\n\n\n";
	setFileContent("rapport.log", getFileContent("rapport-launcher.log", true) + erreur);
	console.log("L'erreur a été reportée dans le fichier :\n\033[96m" + fs.realpathSync("./rapport.log") + "\033[0m\n");
}

function fixASCII(data) { // Problème d'encodage, on vire le caractère 65279.
	while (data.charCodeAt(0) == 65279) {
		data = data.replace(/^./, "");
	}
	return data;
}

function getFileContent(filename, check) {
	if (check && !fs.existsSync(filename)) return "";
	return fixASCII(fs.readFileSync(filename).toString());
}

function setFileContent(filename, data) {
	return fs.writeFileSync(filename, data);
}

function getLeeKloud(success) {
	var options = {
		host: "raw.githubusercontent.com",
		port: "443",
		path: "/GuimDev/LeeKloud/master/_LeeKloud.js",
		method: "GET",
		headers: {
			"User-Agent": "NodeJS/1.0",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
		}
	};

	var req = https.request(options, function(res) {
		res.setEncoding('utf8');
		var content = "";

		res.on('data', function(chunk) {
			content += chunk;
		});

		res.on('end', function() {
			success(res, fixASCII(content));
		});
	});

	req.on('error', function(e) {
		console.log('Erreur : ' + e.message);
	});

	req.end();
}

////--------------------------------------------------------------------------------
////---------- https://github.com/jjrdn/node-open/blob/master/lib/open.js ----------
////-------------------------------------------- Copyright (c) 2012 Jay Jordan -----
////--------------------------------------------------------------------------------

function open(target, appName, callback) {
	var opener;

	if (typeof(appName) === 'function') {
		callback = appName;
		appName = null;
	}

	switch (process.platform) {
		case 'darwin':
			if (appName) {
				opener = 'open -a "' + o_escape(appName) + '"';
			} else {
				opener = 'open';
			}
			break;
		case 'win32':
			if (appName) {
				opener = 'start "" "' + o_escape(appName) + '"';
			} else {
				opener = 'start ""';
			}
			break;
		default:
			if (appName) {
				opener = o_escape(appName);
			} else {
				opener = 'xdg-open';
			}
			break;
	}

	return exec(opener + ' "' + o_escape(target) + '"', callback);
}

function o_escape(s) {
	return s.replace(/"/, '\\\"');
}
