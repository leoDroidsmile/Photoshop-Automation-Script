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

//MISC
Create(480, 100, "logo-viewer.png", "MiddleCenter", 20)
Create(2800, 100, "headerBackground-2800px.png", "NoLogo", 20)
Create(480, 100, "logo-email.png", "MiddleCenter", 20)
Create(480, 100, "logo-login.png", "MiddleCenter", 20)

CreateLogo (400, 100, "logo-transparent-standard.svg","MiddleCenter",10)
CreateLogo (400, 100, "logo-transparent-standard.png","MiddleCenter",10)

CreateWhiteLogo (400, 100, "logo-transparent-white.svg","MiddleCenter",10)
CreateWhiteLogo (400, 100, "logo-transparent-white.png","MiddleCenter",10)

