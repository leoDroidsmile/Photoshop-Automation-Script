// Include all functions 
#include "functions.jsx"


// Ask user for input by showing prompt box and save inputted value to variable:

var primaryColor = prompt ("Please enter primary color with HEX value ", "0000ff");
var secondaryColor = prompt ("Please enter secondary color with HEX value ", "00ff00");

// var primaryColor = "#0000ff";
// var secondaryColor = "#00ff00";

var intputPath = Folder.selectDialog("Choose folder to the icons");
var outputPath = Folder.selectDialog("Choose folder to save files");


// Get all filenames in Input Path
var fileList= intputPath.getFiles("*.*");

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

    docRef.selection.fill( myColor); //fills background layer with primary.


    // Create output folder in output path
    var outputFolder = new Folder(outputPath + "/Output");
    var outputWhiteFolder = new Folder(outputFolder + "/White");
    var outputSecondaryFolder = new Folder(outputFolder + "/Secondary");
    var outputPrimaryFolder = new Folder(outputFolder + "/Primary");
    
    if ( ! outputFolder.exists ) {
      outputFolder.create();
    }

    if(! outputWhiteFolder.exists){
      outputWhiteFolder.create();
    }

    if(! outputSecondaryFolder.exists){
      outputSecondaryFolder.create();
    }
    
    if(! outputPrimaryFolder.exists){
      outputPrimaryFolder.create();
    }


    // Save white foreground color on primary color background
    var filename = app.activeDocument.name;
    saveDocumentPNG(docRef, outputWhiteFolder,  filename.substring(0, filename.length - 4) + ".png");

    
    // Save secondary foreground color on primary color background
    var secondaryColorRGB = hexToRgb(secondaryColor);
    docRef.activeLayer = docRef.artLayers[0];
    applyColorOverlay(
      {
          r: secondaryColorRGB.red,
          g: secondaryColorRGB.green,
          b: secondaryColorRGB.blue,
      })
    saveDocumentPNG(docRef, outputSecondaryFolder,  filename.substring(0, filename.length - 4) + ".png");


    // Save primary foreground color on secondary color background
    docRef.activeLayer = docRef.artLayers[0];
    applyColorOverlay(
      {
          r: primaryColorRGB.red,
          g: primaryColorRGB.green,
          b: primaryColorRGB.blue,
      });

    docRef.activeLayer = docRef.artLayers[1];
    applyColorOverlay(
      {
          r: secondaryColorRGB.red,
          g: secondaryColorRGB.green,
          b: secondaryColorRGB.blue,
      });
    
    saveDocumentPNG(docRef, outputPrimaryFolder,  filename.substring(0, filename.length - 4) + ".png");

    docRef.close(SaveOptions.DONOTSAVECHANGES);
  }
}