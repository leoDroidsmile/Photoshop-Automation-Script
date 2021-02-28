//Format; WidthPx, HeightPx, OutputName, LogoPosition, Padding
 //None = No logo for that asset
 //Padding = minimum pixeles off the sides or bottom for the logo

//BOOT PORTRAITS

#include "functions.jsx"

// Ask user for input by showing prompt box and save inputted value to variable:

var primaryColor = prompt ("Please enter primary color with HEX value ", "0000ff");
var logoFile = File.openDialog ("Please select logo file", "*.*", false);
var outputPath = Folder.selectDialog("Choose folder to save files");


// var logoFile = new File('~/Downloads/Sample_Logo.png');
// var primaryColor = "0000ff";
// var outputPath = "~/Downloads";

var outputFolder = new Folder(outputPath + "/Output");
if ( ! outputFolder.exists ) {
  outputFolder.create();
}


//BOOT PORTRAITS
Create( 1536, 2048,"MiddleCenter.jpg", "MiddleCenter" , 20)
Create( 1536, 2048,"MiddleLeft.png", "MiddleLeft" , 20)
Create( 1536, 2048,"MiddleRight.png", "MiddleRight" , 20)
Create( 1536, 2048,"TopLeft.png", "TopLeft" , 20)
Create( 1536, 2048,"TopRight.png", "TopRight" , 20)
Create( 1536, 2048,"TopCenter.png", "TopCenter" , 20)
Create( 1536, 2048,"BottomLeft.png", "BottomLeft" , 20)
Create( 1536, 2048,"BottomCenter.png", "BottomCenter" , 20)
Create( 1536, 2048,"BottomRight.png", "BottomRight" , 20)

