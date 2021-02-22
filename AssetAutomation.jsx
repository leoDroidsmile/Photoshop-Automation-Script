// Include all functions 
#include "functions.jsx"


// Ask user for input by showing prompt box and save inputted value to variable:

var primaryColor = prompt ("Please enter primary color with HEX value ", "0000ff");
var intputPath = Folder.selectDialog("Choose folder to the icons");
var outputPath = Folder.selectDialog("Choose folder to save files");

// if(intputPath == null) 
//   return;

// Get all filenames in Input Path
var fileList= intputPath.getFiles("*.png");

// Image processing for each files
for (var index = 0; index < fileList.length; index++) {

  // Only process the returned file objects
  // The filter 'should' have missed out any folder objects 
  if (fileList[index] instanceof File && fileList[index].hidden == false) {
  
    var filePath = fileList[index];

    // Open document
    app.open(filePath);

    var docRef = app.activeDocument;

    // Change current icon color to white
    applyColorOverlay(
      {
          r: 255,
          g: 255,
          b: 255,
      })

    // Add New layer
    var layerRef = docRef.artLayers.add();

    // Move new layer the old one after
    layerRef.move(docRef.artLayers[1], ElementPlacement.PLACEAFTER);

    // Fill background layer with primary color
    var primaryColorRGB = hexToRgb(primaryColor);
    var myColor = new SolidColor();  
    myColor.rgb.red = primaryColorRGB.red;  
    myColor.rgb.green = primaryColorRGB.green;  
    myColor.rgb.blue = primaryColorRGB.blue;

    docRef.selection.fill( myColor); //fills background layer with white.


    // Create output folder in output location
    var outputFolder = new Folder(outputPath + "/Output");
    if ( ! outputFolder.exists ) {
      outputFolder.create()
    }

    var filename = app.activeDocument.name;
    
    saveDocument(docRef, outputFolder,  filename.substring(0, filename.length - 4) + ".jpg");

    docRef.close(SaveOptions.DONOTSAVECHANGES);
  }
}

