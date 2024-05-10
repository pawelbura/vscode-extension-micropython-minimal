import * as vscode from 'vscode';
import * as path from 'path';  // Dodaj ten import

export function activate(context: vscode.ExtensionContext) {
    let disposableRUN = vscode.commands.registerCommand('extension.micropythonRUN', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Nie ma otwartego pliku!');
            return;
        }

        const filePath = editor.document.uri.fsPath;  // Pełna ścieżka pliku
        const dirPath = path.dirname(filePath);  // Wyodrębnij katalog z pełnej ścieżki pliku

        const terminal = vscode.window.createTerminal(`mpremote`);
        terminal.show(true);
        terminal.sendText(`cd "${dirPath}"`);  // Użyj zmodyfikowanej ścieżki
        terminal.sendText(`mpremote run "${filePath}"`);
    });
    let disposableREPL = vscode.commands.registerCommand('extension.micropythonREPL', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Nie ma otwartego pliku!');
            return;
        }
        const terminal = vscode.window.createTerminal(`mpremote`);
        terminal.show(true);
        terminal.sendText(`mpremote`);
    });
    let disposableSEND = vscode.commands.registerCommand('extension.micropythonSEND', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Nie ma otwartego pliku!');
            return;
        }

        const filePath = editor.document.uri.fsPath;  // Pełna ścieżka pliku
        const fileName = path.basename(filePath);
        const dirPath = path.dirname(filePath);  // Wyodrębnij katalog z pełnej ścieżki pliku

        const terminal = vscode.window.createTerminal(`mpremote`);
        terminal.show(true);
        terminal.sendText(`cd "${dirPath}"`);  // Użyj zmodyfikowanej ścieżki
        terminal.sendText(`mpremote fs cp "${filePath}" :"${fileName}"`);
    });
    
    context.subscriptions.push(disposableRUN, disposableREPL, disposableSEND);
}

export function deactivate() {}
