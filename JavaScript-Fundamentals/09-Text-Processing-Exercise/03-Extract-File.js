function printFileInfo(fileInfo) {
    let lastSubfolderIndex = fileInfo.lastIndexOf('\\');
    let file = fileInfo.substring(lastSubfolderIndex + 1);
    let lastExtensionIndex = file.lastIndexOf('.');
    
    let fileName = file.substring(0, lastExtensionIndex);
    let extension = file.substring(lastExtensionIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

printFileInfo('C:\\Internal\\training-internal\\Template.pptx');