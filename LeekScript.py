#!/usr/bin/python

import sublime, sublime_plugin, platform, os

class LeekloudDownloadCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		if (platform.platform() == "linux"):
			os.system("gnome-terminal -e \"node '"+sublime.packages_path()+"/LeekScript Syntax/nodeLKlauncher.js'\" &")
		else if (platform.platform() == "windows"):
			os.system("start node \""+sublime.packages_path()+"/LeekScript Syntax/nodeLKlauncher.js\" &")
		else:
			sublime.status_message("Only Windows & Linux (gnome-terminal). Renseignez la commande dans LeekScript.py.")

		sublime.status_message("Execution de LKDownloader...")
