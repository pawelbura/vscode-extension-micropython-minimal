# Minimal VSCode plugin to handle micropython

Just 3 functions: RUN, REPL, SEND, as buttons on editor tittle bar.

Plugin uses mpremote tool, to install run:

`
pip install mpremote
`

<https://docs.micropython.org/en/latest/reference/mpremote.html>

## seperate buttons or dropdown menu

You can change default look and feel of extension from:

- one button in editor/title bar with dropdown menu

to

- three separate buttons in editor/title bar
by changing package.json file

just replace this part:

```json
            "editor/title": [
                {
                    "when": "resourceLangId == python",
                    "submenu": "micropython-minimal-submenu",
                    "group": "navigation@4"
                }

            ],
```

with new code

```json
            "editor/title": [
                {
                    "when": "resourceLangId == python",
                    "command": "extension.micropythonRUN",
                    "group": "navigation@1"
                },
                {
                    "when": "resourceLangId == python",
                    "command": "extension.micropythonREPL",
                    "group": "navigation@2"
                },
                {
                    "when": "resourceLangId == python",
                    "command": "extension.micropythonSEND",
                    "group": "navigation@3"
                }
            ],
```

## development

### npm

`
npm init -y
`

### dependencies

```console
npm install --save-dev typescript @types/vscode
npm install --save-dev @types/node
npm install -g @vscode/vsce
```

#### compile

`
npm run compile
`

### pack

`
vsce package
`

### install

you can install it locally from generated VSIX file
