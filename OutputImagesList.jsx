//Format; WidthPx, HeightPx, OutputName, LogoPosition, Padding
 //None = No logo for that asset
 //Padding = minimum pixeles off the sides or bottom for the logo

//BOOT PORTRAITS

#include "functions.jsx"

// Ask user for input by showing prompt box and save inputted value to variable:

// var primaryColor = prompt ("Please enter primary color with HEX value ", "0000ff");
// var logoFile = File.openDialog ("Please select logo file", "*.*", false);
// var outputPath = Folder.selectDialog("Choose folder to save files");

var logoFile = new File('~/Downloads/Sample_Logo.png');
var primaryColor = "0000ff";
var outputPath = "~/Downloads";

var outputFolder = new Folder(outputPath + "/Output");
if ( ! outputFolder.exists ) {
  outputFolder.create();
}


//BOOT PORTRAITS
Create( 1536, 2048,"boot-1536x2048.png", "MiddleCenter" , 20)
Create( 1536, 2048,"iPadBoot@2x-portrait.png", "MiddleCenter" , 20)
Create( 1242, 2208,"boot-1242x2208.png", "MiddleCenter" , 20)
Create( 1125, 2201,"boot-1125x2201.png", "MiddleCenter" , 20)
Create( 1080, 1920,"boot-1080x1920.png", "MiddleCenter" , 20)
Create( 768, 1024,"boot-768x1024.png", "MiddleCenter" , 20)
Create( 768, 1024,"ipadBoot-768x1024.png", "MiddleCenter" , 20)
Create( 768, 1024,"ipadBoot-portrait.png", "MiddleCenter" , 20)
Create( 750, 1334,"boot-750x1334.png", "MiddleCenter" , 20)
Create( 720, 1280,"boot-720x1280.png", "MiddleCenter" , 20)
Create( 720, 960,"boot-720x960.png", "MiddleCenter" , 20)
Create( 1536, 2048,"boot-720x960.png", "MiddleCenter" , 20)
Create( 640, 1136,"boot-640x1136.png", "MiddleCenter" , 20)
Create( 640, 960,"boot-640x960.png", "MiddleCenter" , 20)
Create( 640, 960,"iphoneBoot-640px", "MiddleCenter" , 20)
Create( 480, 854,"boot-480x854.png", "MiddleCenter" , 20)
Create( 2048, 2732,"boot-2048x2732.png", "MiddleCenter" , 20)
Create( 1668, 2224,"boot-1668x2224.png", "MiddleCenter" , 20)
Create( 1668, 2388,"boot-1668x2388.png", "MiddleCenter" , 20)
Create( 1242, 2688,"boot-1242x2688.png", "MiddleCenter" , 20)
Create( 1125, 2436,"boot-1125x2436.png", "MiddleCenter" , 20)
Create( 828, 1792,"boot-828x1792.png", "MiddleCenter" , 20)
