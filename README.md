# LeekScript Syntax

A [Sublime Text][sublime] package for LeekScript.

On linux, if you don't use gnome. Edit "gnome-terminal" in LeekScript.sublime-build and LeekScript.py. 

## Installation (Manual)
To install this package in Sublime Text, a few extra steps are required.

1. Open Sublime Text and in the _Preferences_ menu click _Browse Packages_.
2. In the directory that was just opened, create a new directory `LeekScript/`.
3. Move the contents this repo into the directory you just created.
4. Restart Sublime Text.

## Installation (Package Control)
If you have [Package Control](http://wbond.net/sublime_packages/package_control/installation) installed in Sublime Text:

- Open the Command Palette (Tools > Command Palette…)
- Search for and choose "Package Control: Install Package" (give it a few seconds to return a list of available packages)
- Search for "LeekScript Syntax" and install.


## Usage

- Open/Save your file to `.lk`.

See : https://github.com/GuimDev/LeeKloud

[sublime]: http://www.sublimetext.com/

## En cas de problème (french) :

1. Vérifiez que vous avez installer nodejs.
2. Vérifiez que vous avez bien nommé le fichier "/LeekScript Syntax/".

   2.1 : Sous linux si vous n'utilisez pas Linux, vous devez modifier "gnome-terminal" dans les fichiers "LeekScript.sublime-build" et "LeekScript.py" (ATTENTION : modifiez le fichier .py avec sublimetext).

3. Vérifiez que vous avez bien défini le path d'environnement.

   3.a : Pour windows : [Installation sous Windows](http://blog.idleman.fr/nodejs-15-installation-sous-windows/)
   3.b : Pour linux : [Node.js doesn't recognize system path?](http://stackoverflow.com/questions/8768549/node-js-doesnt-recognize-system-path)
   3.2 : [Une variable d'environnement c'est quoi ?](http://www.faire-des-jeux.com/une-variable-denvironnement-cest-quoi/)

4. Dans la cmd tapez `node -v` (sans modifier le répertoire), si ça ne fonctionne pas vérifier l'étape 1 et 3.

5. Si l'étape 4 fonctionne :

   5.1 : Rendez-vous dans le dossier du package "LeekScript Syntax/".
   5.2 : Lancez nodeLKlauncher.js avec la commande : `node nodeLKlauncher.js`
   5.3 : Si ça fonctionne correctement tout vas bien, sinon contactez-moi.

6. Si l'étape 4 fonctionne :

   6.1 : Rendez-vous dans le dossier de LeeKloud ".LeeKloud/" :

    - 6.1.a : Sous Linux : regardez dans le répertoire HOME `echo $HOME` (~/Username).
    - 6.1.b : Sous Windows : regardez dans %APPDATA% ou %USERPROFILE%. (C:/Users/Username/AppData/Roaming).
    - 6.1.c : Sous Max : regardez dans le HOMEPATH (/Users/Username).

   6.2 : Lancez _LeeKloud.js avec la commande : `node _LeeKloud.js`
   6.3 : Si ça fonctionne correctement tout vas bien, sinon contactez-moi.

7. Vérifiez d'avoir fait toutes les étapes.
8. Ça devrait fonctionner... Contactez-moi dans le cas contraire.
