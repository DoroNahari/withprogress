// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	context.subscriptions.push(vscode.commands.registerCommand('with-progress.notification', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
            		}, (progress, token) => {
			token.onCancellationRequested(() => {
				console.log("User canceled the long running operation");
			});

			progress.report({ increment: 0 });

			setTimeout(() => {
				progress.report({ increment: 10, message: "IIIII am long running! - still going..." });
			}, 1000);

			setTimeout(() => {
				progress.report({ increment: 40, message: "" });
			}, 2000);

			setTimeout(() => {
				progress.report({ increment: 50, message: "I am long running! - almost there..." });
			}, 3000);

			const p = new Promise(resolve => {
				setTimeout(() => {
					resolve();
				}, 5000);
			});

			return p;
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('with-progress.notification-cancelable', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
			title: "My Progress",
			cancelable: true
            		}, (progress, token) => {
			token.onCancellationRequested(() => {
				console.log("User canceled the long running operation");
			});

			progress.report({ increment: 0 });

			setTimeout(() => {
				progress.report({ increment: 10, message: "IIIII am long running! - still going..." });
			}, 1000);

			setTimeout(() => {
				progress.report({ increment: 40, message: "" });
			}, 2000);

			setTimeout(() => {
				progress.report({ increment: 50, message: "I am long running! - almost there..." });
			}, 3000);

			const p = new Promise(resolve => {
				setTimeout(() => {
					resolve();
				}, 5000);
			});

			return p;
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('with-progress.scm', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.SourceControl,
			title: ""
            		}, (progress, token) => {
			token.onCancellationRequested(() => {
				console.log("User canceled the long running operation");
			});

			progress.report({ increment: 0 });

			setTimeout(() => {
				progress.report({ increment: 10, message: "IIIII am long running! - still going..." });
			}, 10000);

			setTimeout(() => {
				progress.report({ increment: 40, message: "" });
			}, 20000);

			setTimeout(() => {
				progress.report({ increment: 50, message: "I am long running! - almost there..." });
			}, 30000);

			const p = new Promise(resolve => {
				setTimeout(() => {
					resolve();
				}, 50000);
			});

			return p;
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('with-progress.window', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Window,
			title: "My Progress"
            		}, (progress, token) => {
			token.onCancellationRequested(() => {
				console.log("User canceled the long running operation");
			});

			progress.report({ increment: 0 });

			setTimeout(() => {
				progress.report({ increment: 10, message: "IIIII am long running! - still going..." });
			}, 1000);

			setTimeout(() => {
				progress.report({ increment: 40, message: "" });
			}, 2000);

			setTimeout(() => {
				progress.report({ increment: 50, message: "I am long running! - almost there..." });
			}, 3000);

			const p = new Promise(resolve => {
				setTimeout(() => {
					resolve();
				}, 5000);
			});

			return p;
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('notification.empty', () => {
		vscode.window.showInformationMessage("")
	}));

	context.subscriptions.push(vscode.commands.registerCommand('notification.not-empty', () => {
		vscode.window.showInformationMessage("Notification content")
	}));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
