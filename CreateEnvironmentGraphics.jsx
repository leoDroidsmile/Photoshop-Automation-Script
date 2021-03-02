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


//Create TOP BANNERS
Create(2560,50, "topBanner-2560px.png", "MiddleLeft", 10)
Create(2208,50, "topBanner-2208w.png", "MiddleLeft", 10)
Create(2048,50, "topBanner-2048w.png", "MiddleLeft", 10)
Create(2048,50, "topBanner-2048px.png", "MiddleLeft", 10)
Create(1920,50, "topBanner-1920w.png", "MiddleLeft", 10)
Create(1536,50, "topBanner-1536w.png", "MiddleLeft", 10)
Create(1440,50, "topBanner-1440px.png", "MiddleLeft", 10)
Create(1280,50, "topBanner-1280px.png", "MiddleLeft", 10)
Create(1242,50, "topBanner-1242w.png", "MiddleLeft", 10)
Create(1125,50, "topBanner-1125w.png", "MiddleLeft", 10)
Create(1080,50, "topBanner-1080w.png", "MiddleLeft", 10)
Create(1024,50, "topBanner-122h.png", "MiddleLeft", 10)
Create(1024,50, "topBanner-1024px.png", "MiddleLeft", 10)
Create(1024, 50, "topBanner-1024w.png", "MiddleLeft", 10)
Create(854, 50, "topBanner-854px.png", "MiddleLeft", 10)
Create(828,50, "topBanner-828px.png", "MiddleLeft", 10)
Create(828,50, "topBanner-828w.png", "MiddleLeft", 10)
Create(800,50, "topBanner-800px.png", "MiddleLeft", 10)
Create(768,50, "topBanner-768w.png", "MiddleLeft", 10)
Create(750, 50, "topBanner-750w.png", "MiddleLeft", 10)
Create(720,50, "topBanner-720w.png", "MiddleLeft", 10)
Create(640,50, "topBanner-640w.png", "MiddleLeft", 10)
Create(640,50, "topBanner-320w-640px.png", "MiddleLeft", 10)
Create(600,50, "topBanner-600px.png", "MiddleLeft", 10)
Create(569,50, "topBanner-569px.png", "MiddleLeft", 10)
Create(480,50, "topBanner-480px.png", "MiddleLeft", 10)
Create(480,50, "topBanner-480w.png", "MiddleLeft", 10)
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

