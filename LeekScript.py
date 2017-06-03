#!/usr/bin/python

import sublime, sublime_plugin, platform, os

class LeekloudDownloadCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		if (platform.system() == "Linux"):
			os.system("gnome-terminal -e \"node '"+sublime.packages_path()+"/LeekScript Syntax/nodeLKlauncher.js'\" &")
		else:
			os.system("start node \""+sublime.packages_path()+"/LeekScript Syntax/nodeLKlauncher.js\" &")

		sublime.status_message("Execution de LKDownloader...")
