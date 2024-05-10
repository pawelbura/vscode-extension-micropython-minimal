# Minimal VSCode plugin to handle micropython

Just 3 functions: RUN, REPL, SEND, as buttons on editor tittle bar.

Plugin uses mpremote tool, to install run:

`
pip install mpremote
`

<https://docs.micropython.org/en/latest/reference/mpremote.html>

## development

### npm

`
npm init -y
`

### dependencies

`
npm install --save-dev typescript @types/vscode
npm install --save-dev @types/node
npm install -g @vscode/vsce
`

#### compile

`
npm run compile
`

### pack

`
vsce package
`
