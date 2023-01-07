const vscode = require('vscode');

function activate(context) {
	// Register a content provider for the custom file type
	const exampleContentProvider = vscode.workspace.registerTextDocumentContentProvider('example', {
		// Provide the content of a file
		provideTextDocumentContent(uri) {
			// Get the full file name
			const fileName = uri.fsPath;
			// Split the file name to get the part before the .example extension
			const fileNameParts = fileName.split('.');
			// Get the part before the .example extension
			const extensionlessFileName = fileNameParts[fileNameParts.length - 2];
			// Read the file with the part before the .example extension
			const fileContent = fs.readFileSync(extensionlessFileName, 'utf-8');
			// Return the file content
			return fileContent;
		}
	});

	context.subscriptions.push(exampleContentProvider);
}

module.exports = {
	activate
}
