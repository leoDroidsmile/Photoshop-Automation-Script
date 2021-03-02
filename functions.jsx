function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    red: parseInt(result[1], 16),
    green: parseInt(result[2], 16),
    blue: parseInt(result[3], 16)
  } : null;
}

function applyColorOverlay(color)
{
    var desc6 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Lefx'));
    ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc6.putReference(charIDToTypeID('null'), ref1);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putBoolean(charIDToTypeID('enab'), true);
    desc8.putBoolean(stringIDToTypeID('present'), true);
    desc8.putBoolean(stringIDToTypeID('showInDialog'), true);
    desc8.putEnumerated(charIDToTypeID('Md  '), charIDToTypeID('BlnM'), charIDToTypeID('Nrml'));
    var desc9 = new ActionDescriptor();
    desc9.putDouble(charIDToTypeID('Rd  '), color.r);
    desc9.putDouble(charIDToTypeID('Grn '), color.g);
    desc9.putDouble(charIDToTypeID('Bl  '), color.b);
    desc8.putObject(charIDToTypeID('Clr '), charIDToTypeID('RGBC'), desc9);
    desc8.putUnitDouble(charIDToTypeID('Opct'), charIDToTypeID('#Prc'), 100.000000);
    desc7.putObject(charIDToTypeID('SoFi'), charIDToTypeID('SoFi'), desc8);
    desc6.putObject(charIDToTypeID('T   '), charIDToTypeID('Lefx'), desc7);
    executeAction(charIDToTypeID('setd'), desc6, DialogModes.NO);
};


// save active document as jpeg into output location
function saveDocumentJPG(activeDocument, filePath, fileName)
{
  var fPath = filePath + '/' + fileName;
  var jpgFile = new File(fPath);
  jpgSaveOptions = new JPEGSaveOptions();
  jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
  jpgSaveOptions.embedColorProfile = true;
  jpgSaveOptions.matte = MatteType.NONE;
  jpgSaveOptions.quality = 12;
  
  activeDocument.saveAs(jpgFile, jpgSaveOptions, true, Extension.LOWERCASE);  
}


// save active document as jpeg into output location
function saveDocumentPNG(activeDocument, filePath, fileName)
{
  var fPath = filePath + '/' + fileName;
  var opts, file;
  opts = new ExportOptionsSaveForWeb();
  opts.format = SaveDocumentType.PNG;
  opts.PNG8 = false;
  opts.quality = 100;
  
  var pngFile = new File(fPath);
  activeDocument.exportDocument(pngFile, ExportType.SAVEFORWEB, opts);
}



function Create(width, height, outputName, logoPosition, logoPadding){
  
  app.open(logoFile);
  var docRef = app.activeDocument;

  // Resize document 
  var origRuler = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  docRef.resizeCanvas (width, height);


  // Add Background layer
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


  // Get logo layer size
  var logoLayer = docRef.artLayers[0];
  var logoWidth = logoLayer.bounds[2]-logoLayer.bounds[0]; 
  var logoHeight = logoLayer.bounds[3]-logoLayer.bounds[1]; 

  // Remove pixels from the length/width "200 px" => "200"
  logoWidth = logoWidth.toString().replace(' px', '');
  logoHeight = logoHeight.toString().replace(' px', '');


  // Resize Logo for height
  if(logoWidth > width || logoHeight > height){

    var ratioWidth = logoWidth / width;
    var ratioHeight = logoHeight / height;
    var changeWidth, changeHeight;

    if(ratioHeight > ratioWidth){
      changeHeight = height / logoHeight * 100;
      changeWidth = ( height / logoHeight * logoWidth) / logoWidth * 100;
    }
    else{
      // Resize Logo for width
      changeWidth = width / logoWidth * 100;
      changeHeight = ( width / logoWidth * logoHeight) / logoHeight * 100;
    }

    logoLayer.resize(changeWidth, changeHeight, AnchorPosition.MIDDLECENTER);
  
    // Recalculate resized logo size
    logoWidth = logoLayer.bounds[2]-logoLayer.bounds[0]; //Grab the length
    logoHeight = logoLayer.bounds[3]-logoLayer.bounds[1]; //Grab the width
    logoWidth = logoWidth.toString().replace(' px', '');
    logoHeight = logoHeight.toString().replace(' px', '');
  }

  
  if(logoPosition.indexOf("Left") != -1)
    logoLayer.translate(Math.round(width / 2 - logoWidth / 2 - logoPadding) * (-1), 0);
  if(logoPosition.indexOf("Right") != -1)
    logoLayer.translate(Math.round(width / 2 - logoWidth / 2 - logoPadding), 0);
  if(logoPosition.indexOf("Top") != -1)
    logoLayer.translate(0, Math.round(height / 2 - logoHeight / 2 - logoPadding) * (-1));
  if(logoPosition.indexOf("Bottom") != -1)
    logoLayer.translate(0, Math.round(height / 2 - logoHeight / 2 - logoPadding));

  
  if(outputName.indexOf("PNG") != -1 || outputName.indexOf("png") != -1)
    saveDocumentPNG(docRef, outputFolder,  outputName);
  if(outputName.indexOf("JPG") != -1 || outputName.indexOf("jpg") != -1 || outputName.indexOf("jpeg") != -1)
    saveDocumentJPG(docRef, outputFolder,  outputName);

  docRef.close(SaveOptions.DONOTSAVECHANGES);
}