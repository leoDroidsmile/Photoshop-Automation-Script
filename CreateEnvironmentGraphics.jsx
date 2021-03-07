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
// CreateIcn(1024, 1024, "ico.ics", "MiddleCenter", 50)
CreateIcn(1024, 1024, "ico.ico", "MiddleCenter", 50)  

// CreateLogo (400, 100, "logo-transparent-standard.svg,"MiddleCenter",10)
// CreateLogo (400, 100, "logo-transparent-standard.png,"MiddleCenter",10)
// CreateWhiteLogo (400, 100, "logo-transparent-white.svg,"MiddleCenter",10)
// CreateWhiteLogo (400, 100, "logo-transparent-white.png,"MiddleCenter",10)

// //BOOT PORTRAITS
// Create(1536, 2048, "boot-1536x2048.png", "MiddleCenter", 100)
// Create(1536, 2048, "iPadBoot@2x-portrait.png", "MiddleCenter", 100)
// Create(1242, 2208, "boot-1242x2208.png", "MiddleCenter", 100)
// Create(1125, 2201, "boot-1125x2201.png", "MiddleCenter", 100)
// Create(1080, 1920, "boot-1080x1920.png", "MiddleCenter", 100)
// Create(768, 1024, "boot-768x1024.png", "MiddleCenter", 40)
// Create(768, 1024, "ipadBoot-768x1024.png", "MiddleCenter", 40)
// Create(768, 1024, "ipadBoot-portrait.png", "MiddleCenter", 40)
// Create(750, 1334, "boot-750x1334.png", "MiddleCenter", 40)
// Create(720, 1280, "boot-720x1280.png", "MiddleCenter", 40)
// Create(720, 960, "boot-720x960.png", "MiddleCenter", 40)
// Create(1536, 2048, "boot-720x960.png", "MiddleCenter", 40)
// Create(640, 1136, "boot-640x1136.png", "MiddleCenter", 40)
// Create(640, 960, "boot-640x960.png", "MiddleCenter", 40)
// Create(640, 960, "iphoneBoot-640px", "MiddleCenter", 40)
// Create(480, 854, "boot-480x854.png", "MiddleCenter", 100)
// Create(2048, 2732, "boot-2048x2732.png", "MiddleCenter", 100)
// Create(1668, 2224, "boot-1668x2224.png", "MiddleCenter", 100)
// Create(1668, 2388, "boot-1668x2388.png", "MiddleCenter", 100)
// Create(1242, 2688, "boot-1242x2688.png", "MiddleCenter", 100)
// Create(1125, 2436, "boot-1125x2436.png", "MiddleCenter", 100)
// Create(828, 1792, "boot-828x1792.png", "MiddleCenter", 100)


// //BOOT LANDSCAPES
// Create(2208, 1242, "boot-2208x1242.png", "MiddleCenter", 100)
// Create(2048, 1536, "boot-2048x1536.png", "MiddleCenter", 100)
// Create(2048, 1536, "iPadBoot@2x-landscape.png", "MiddleCenter", 100)
// Create(1280, 720, "boot-1280x720.png", "MiddleCenter", 100)
// Create(1024, 768, "boot-1024x768.png", "MiddleCenter", 100)
// Create(1024, 768, "ipadBoot-1024x768.png", "MiddleCenter", 100)
// Create(1024, 768, "ipadBoot-landscape.png", "MiddleCenter", 100)
// Create(1024, 600, "boot-1024x600.png", "MiddleCenter", 100)
// Create(960, 640, "boot-960x640.png", "MiddleCenter", 40)
// Create(800, 480, "boot-800x480.png", "MiddleCenter", 100)
// Create(1024, 500, "FeatureGraphic-1024x500.png", "MiddleCenter", 40)
// Create(180, 120, "Promographic-180x120.png", "MiddleCenter", 40)
// Create(2732, 2048, "boot-2732x2048.png", "MiddleCenter", 100)
// Create(2388, 1668, "boot-2388x1668.png", "MiddleCenter", 100)
// Create(2224, 1668, "boot-2224x1668.png", "MiddleCenter", 100)

// //BACKGROUNDS PORTRAITS
// Create(1536, 2048, "background-1536x2048.png", "NoLogo", 100)
// Create(1536, 2048, "iPadBackground@2x-portrait.png", "NoLogo", 100)
// Create(1440, 2560, "background-1440x2560.png", "NoLogo", 100)
// Create(1242, 2208, "background-1242x2208.png", "NoLogo", 100)
// Create(1125, 2201, "background-1125x2001.png", "NoLogo", 100)
// Create(1080, 1920, "background-1080x1920.png", "NoLogo", 100)
// Create(768, 1024, "background-768x1024.png", "NoLogo", 40)
// Create(768, 1024, "ipadBackground-768x1024.png", "NoLogo", 40)
// Create(768, 1024, "ipadBackground-portrait.png", "NoLogo", 40)
// Create(750, 1334, "background-750x1334.png", "NoLogo", 40)
// Create(720, 1280, "background-720x1280.png", "NoLogo", 40)
// Create(720, 960, "background-720x960.png", "NoLogo", 40)
// Create(640, 1136, "background-640x1136.png", "NoLogo", 40)
// Create(640, 960, "background-640x960.png", "NoLogo", 40)
// Create(640, 960, "iphoneBackground-640px.png", "NoLogo", 40)
// Create(600, 1024, "background-600x1024.png", "NoLogo", 40)
// Create(480, 800, "background-480x800.png", "NoLogo", 40)
// Create(320, 480, "background-320x480.png", "NoLogo", 100)
// Create(1242, 2688, "background-1242x2688.png", "NoLogo", 100)
// Create(1125, 2436, "background-1125x2436.png", "NoLogo", 40)
// Create(828, 1792, "background-828x1792.png", "NoLogo", 40)
// Create(2048, 2732, "background-2048x2732.png", "NoLogo", 100)
// Create(1668, 2388, "background-1668x2388.png", "NoLogo", 100)
// Create(1668, 2224, "background-1668x2224.png", "NoLogo", 100)


// //BACKGROUNDS LANDSCAPES
// Create(2208, 1242, "background-2208x1242.png", "NoLogo", 100)
// Create(2048,1536, "background-2048x1536.png", "NoLogo", 100)
// Create(2048, 1536, "iPadBackground@2x-landscape.png", "NoLogo", 100)
// Create(1920, 1080, "background-1920x1080.png", "NoLogo", 100)
// Create(1280, 720, "background-1280x720.png", "NoLogo", 100)
// Create(1024, 768, "background-1024x768.png", "NoLogo", 100)
// Create(1024, 768, "ipadBackground-1024x768.png", "NoLogo", 100)
// Create(1024, 768, "ipadBackground-landscape.png", "NoLogo", 100)
// Create(1024, 600, "background-1024x600.png", "NoLogo", 40)
// Create(960, 640, "background-960x640.png", "NoLogo", 40)
// Create(800, 480, "background-800x480.png", "NoLogo", 40)
// Create(480, 320, "background-480x320.png", "NoLogo", 40)
// Create(2732, 2048, "background-2732x2048.png", "NoLogo", 100)
// Create(2388, 1668, "background-2388x1668.png", "NoLogo", 100)
// Create(2224, 1668, "background-2224x1668.png", "NoLogo", 100)


// //Create APP IMAGES
// Create(1024,1024, "myitems_folder.png", "MiddleCenter", 50)
// Create(1024, 1024, "appThumb-1024x1024.png", "MiddleCenter", 50)
// Create(600,600, "appThumb-600x600.png", "MiddleCenter", 40)
// Create(512, 512, "appThumb-512x512.png", "MiddleCenter", 40)
// Create(300,300, "NoThumbnailDefault-300x300.png", "MiddleCenter", 20)
// Create(256,256, "appThumb-256x256.png", "MiddleCenter", 20)
// Create(192, 192, "appThumb-192x192.png", "MiddleCenter", 10)
// Create(180, 180, "appThumb-180x180.png", "MiddleCenter", 10)
// Create(152,152, "appThumb-152x152.png", "MiddleCenter", 10)
// Create(150,150, "appThumb-150x150.png", "MiddleCenter", 10)
// Create(144, 144, "appThumb-144x144.png", "MiddleCenter", 10)
// Create(135,135, "appThumb-135x135.png", "MiddleCenter", 10)
// Create(128, 128, "appThumb-128x128.png", "MiddleCenter", 10)
// Create(120, 120, "appThumb-120x120.png", "MiddleCenter", 10)
// Create(113, 113, "appThumb-114x114.png", "MiddleCenter", 10)
// Create(100, 100, "NoThumbnailDefault-100x100.png", "MiddleCenter", 10)
// Create(96,96, "appThumb-96x96.png", "MiddleCenter", 5)
// Create(76,76, "appThumb-76x76.png", "MiddleCenter", 5)
// Create(72,72, "appThumb-72x72.png", "MiddleCenter", 2)
// Create(64, 64, "appThumb-64x64.png", "MiddleCenter", 5)
// Create(57,57, "appThumb-57x57.png", "MiddleCenter", 5)
// Create(50, 50, "appThumb-50x50.png", "MiddleCenter", 5)
// Create(48,48, "appThumb-48x48.png", "MiddleCenter", 5)
// Create(32,32, "appThumb-32x32.png", "MiddleCenter", 5)
// Create(16,16, "appThumb-16x16.png", "MiddleCenter", 5)

// //Create TOP BANNERS
// Create(2560,50, "topBanner-2560px.png", "MiddleLeft", 10)
// Create(2208,50, "topBanner-2208w.png", "MiddleLeft", 10)
// Create(2048,50, "topBanner-2048w.png", "MiddleLeft", 10)
// Create(2048,50, "topBanner-2048px.png", "MiddleLeft", 10)
// Create(1920,50, "topBanner-1920w.png", "MiddleLeft", 10)
// Create(1536,50, "topBanner-1536w.png", "MiddleLeft", 10)
// Create(1440,50, "topBanner-1440px.png", "MiddleLeft", 10)
// Create(1280,50, "topBanner-1280px.png", "MiddleLeft", 10)
// Create(1242,50, "topBanner-1242w.png", "MiddleLeft", 10)
// Create(1125,50, "topBanner-1125w.png", "MiddleLeft", 10)
// Create(1080,50, "topBanner-1080w.png", "MiddleLeft", 10)
// Create(1024,50, "topBanner-122h.png", "MiddleLeft", 10)
// Create(1024,50, "topBanner-1024px.png", "MiddleLeft", 10)
// Create(1024, 50, "topBanner-1024w.png", "MiddleLeft", 10)
// Create(854, 50, "topBanner-854px.png", "MiddleLeft", 10)
// Create(828,50, "topBanner-828px.png", "MiddleLeft", 10)
// Create(828,50, "topBanner-828w.png", "MiddleLeft", 10)
// Create(800,50, "topBanner-800px.png", "MiddleLeft", 10)
// Create(768,50, "topBanner-768w.png", "MiddleLeft", 10)
// Create(750, 50, "topBanner-750w.png", "MiddleLeft", 10)
// Create(720,50, "topBanner-720w.png", "MiddleLeft", 10)
// Create(640,50, "topBanner-640w.png", "MiddleLeft", 10)
// Create(640,50, "topBanner-320w-640px.png", "MiddleLeft", 10)
// Create(600,50, "topBanner-600px.png", "MiddleLeft", 10)
// Create(569,50, "topBanner-569px.png", "MiddleLeft", 10)
// Create(480,50, "topBanner-480px.png", "MiddleLeft", 10)
// Create(480,50, "topBanner-480w.png", "MiddleLeft", 10)
// Create(320,50, "topBanner-320px.png", "MiddleLeft", 10)
// Create(2732,50, "topBanner-2732w.png", "MiddleLeft", 10)
// Create(2732,50, "topBanner-273px.png", "MiddleLeft", 10)
// Create(2388,50, "topBanner-2388px.png", "MiddleLeft", 10)
// Create(2388,50, "topBanner-2388w.png", "MiddleLeft", 10)
// Create(2224,50, "topBanner-2224px.png", "MiddleLeft", 10)
// Create(2224,50, "topBanner-2224w.png", "MiddleLeft", 10)
// Create(2560,50, "topBanner-2560px.png", "MiddleLeft", 10)
// Create(2560,50, "topBanner-2560w.png", "MiddleLeft", 10)
// Create(1668,50, "topBanner-1668px.png", "MiddleLeft", 10)
// Create(1668,50, "topBanner-1668w.png", "MiddleLeft", 10)
// Create(1242,50, "topBanner-1242w.png", "MiddleLeft", 10)
// Create(1242,50, "topBanner-1242px.png", "MiddleLeft", 10)
// Create(1125,50, "topBanner-1125w.png", "MiddleLeft", 10)
// Create(1125,50, "topBanner-1125px.png", "MiddleLeft", 10)

