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
if (! outputFolder.exists ) {
 outputFolder.create();
}

Create(320,50, "topBanner-320px.png", "MiddleLeft", 10)
Create(2732,50, "topBanner-2732w.png", "MiddleLeft", 10)
Create(2732,50, "topBanner-273px.png", "MiddleLeft", 10)
Create(2388,50, "topBanner-2388px.png", "MiddleLeft", 10)
Create(2388,50, "topBanner-2388w.png", "MiddleLeft", 10)
Create(2224,50, "topBanner-2224px.png", "MiddleLeft", 10)
Create(2224,50, "topBanner-2224w.png", "MiddleLeft", 10)
Create(2560,50, "topBanner-2560px.png", "MiddleLeft", 10)
Create(2560,50, "topBanner-2560w.png", "MiddleLeft", 10)
Create(1668,50, "topBanner-1668px.png", "MiddleLeft", 10)
Create(1668,50, "topBanner-1668w.png", "MiddleLeft", 10)
Create(1242,50, "topBanner-1242w.png", "MiddleLeft", 10)
Create(1242,50, "topBanner-1242px.png", "MiddleLeft", 10)
Create(1125,50, "topBanner-1125w.png", "MiddleLeft", 10)
Create(1125,50, "topBanner-1125px.png", "MiddleLeft", 10)

