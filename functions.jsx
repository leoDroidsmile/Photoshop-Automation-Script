
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}


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


function svgProcess(filePath, tempFileName, svgFileName, width, height) {
	var theFile = new File(filePath + '/' + tempFileName);
	theFile.encoding = "binary";
	theFile.open("r");
	var binStr = theFile.read();
	theFile.close();
	theFile.remove();

	
	var tmpFile = new File(filePath + '/' + svgFileName);
	tmpFile.open("w");	
	tmpFile.writeln('<?xml version="1.0" encoding="utf-8"?>');
	tmpFile.writeln('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">');
	tmpFile.writeln('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"');
	tmpFile.writeln('width="' + width + 'px" height="' + height + 'px" viewBox="0 0 ' + width + ' ' + height + '" enable-background="new 0 0 ' + width + ' ' + height + '" xml:space="preserve">');
	tmpFile.writeln('<image id="Layer_0" data-name="Layer 0" width="' + width + '" height="' + height + '" xlink:href="data:img/png;base64,');
      

	szB64 = new Array;
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";	// Accepted b64 chars
	for (j=0;j<64;j++){
		szB64[j] = keyStr.charAt(j);
		}
	var ecdStr = "";
	var counter = 0;
	var binLen = binStr.length - (binStr.length % 3); 
	for (i=0;i<binLen;i+=3) {		// Get 3 chars starting at the begining of the binary string
		ecdStr += szB64[binStr.charCodeAt (i) >> 2];
		ecdStr += szB64[((binStr.charCodeAt (i) & 0x3) << 4) | (binStr.charCodeAt (i+1) >> 4)];
		ecdStr += szB64[((binStr.charCodeAt (i+1) & 15) << 2) | (binStr.charCodeAt (i+2) >> 6)];
		ecdStr += szB64[binStr.charCodeAt (i+2) & 0x3f];
		counter +=4;
		if(counter > 75) {		// when hit the limit, write the line and reset counter
			tmpFile.writeln (ecdStr);
			ecdStr = "";
			counter = 0;
			}
		}

	switch (binStr.length % 3){
		case 2: //padding 1 characters.
			ecdStr += szB64[binStr.charCodeAt (i) >> 2];
			ecdStr += szB64[((binStr.charCodeAt (i) & 0x3) << 4) | (binStr.charCodeAt (i+1) >> 4)];
			ecdStr += szB64[((binStr.charCodeAt (i+1) & 15) << 2) | (binStr.charCodeAt (i+2) >> 6)];
			ecdStr += "=";
			tmpFile.writeln (ecdStr);	
		break;
		case 1: //padding 2 character.
			ecdStr += szB64[binStr.charCodeAt (i) >> 2];
			ecdStr += szB64[((binStr.charCodeAt (i) & 0x3) << 4) | (binStr.charCodeAt (i+1) >> 4)];
			ecdStr += "=="
			tmpFile.writeln (ecdStr);	
		break;
		default:
			tmpFile.writeln (ecdStr);	
		break;
  }
	
	tmpFile.writeln('"/>');
	tmpFile.writeln('</svg>'); 
	tmpFile.close();
}


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

function saveDocumentSVG(activeDocument, filePath, fileName, width, height){
  var tempFileName = "svg.temp";
  saveDocumentPNG(activeDocument, filePath, tempFileName);

  var svgFileName = fileName.replace("png", "svg");
  svgProcess(filePath, tempFileName, svgFileName, width, height);
}

function saveDocumentICO(activeDocument, filePath, fileName)
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
  
  var origRuler = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  var docRef = null;

  if(logoPosition.indexOf("NoLogo") != -1){
    docRef = app.documents.add();
  }else {
    app.open(logoFile);
    docRef = app.activeDocument;
    
    var canvasWidth = docRef.width.value;
    var canvasHeight = docRef.height.value;
    
    // Move logo to center of canvas
    var logoLayer = docRef.artLayers[0];
    var logoPosX = logoLayer.bounds[0];
    var logoPosY = logoLayer.bounds[1];
    logoPosX = parseInt(logoPosX.toString().replace(' px', ''));
    logoPosY = parseInt(logoPosY.toString().replace(' px', ''));
    
    // Get logo layer size
    var logoWidth = logoLayer.bounds[2]-logoLayer.bounds[0]; 
    var logoHeight = logoLayer.bounds[3]-logoLayer.bounds[1]; 
  
    // Remove pixels from the length/width "200 px" => "200"
    logoWidth = parseInt(logoWidth.toString().replace(' px', ''));
    logoHeight = parseInt(logoHeight.toString().replace(' px', ''));
    
    logoLayer.translate(Math.round(logoWidth / 2 + logoPosX - canvasWidth / 2) * (-1), Math.round(logoHeight / 2 + logoPosY - canvasHeight / 2) * (-1));  
  }

  
  // Resize document 
  docRef.resizeCanvas (width, height);


  var layerRef = null;

  if(logoPosition.indexOf("NoLogo") == -1){
    // Add Background layer
    var layerRef = docRef.artLayers.add();

    // Move new layer the old one after
    layerRef.move(docRef.artLayers[1], ElementPlacement.PLACEAFTER);
  }
  
  // Fill background layer with primary color
  var primaryColorRGB = hexToRgb(primaryColor);
  var myColor = new SolidColor();  
  myColor.rgb.red = primaryColorRGB.red;  
  myColor.rgb.green = primaryColorRGB.green;  
  myColor.rgb.blue = primaryColorRGB.blue;

  docRef.selection.fill( myColor); //fills background layer with primary.

  
  if(logoPosition.indexOf("NoLogo") == -1){
    var tempWidth = width - logoPadding * 2;
    var tempHeight = height - logoPadding * 2;
  
    // Resize Logo for height
    if(logoWidth > tempWidth || logoHeight > tempHeight){
  
      var ratioWidth = logoWidth / tempWidth;
      var ratioHeight = logoHeight / tempHeight;
      var changeWidth, changeHeight;
  
      if(ratioHeight > ratioWidth){
        changeHeight = tempHeight / logoHeight * 100;
        changeWidth = ( tempHeight / logoHeight * logoWidth) / logoWidth * 100;
      }
      else{
        // Resize Logo for width
        changeWidth = tempWidth / logoWidth * 100;
        changeHeight = ( tempWidth / logoWidth * logoHeight) / logoHeight * 100;
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
  }
  

  if(outputName.indexOf("PNG") != -1 || outputName.indexOf("png") != -1)
    saveDocumentPNG(docRef, outputFolder,  outputName);
  if(outputName.indexOf("JPG") != -1 || outputName.indexOf("jpg") != -1 || outputName.indexOf("jpeg") != -1)
    saveDocumentJPG(docRef, outputFolder,  outputName);
  if(outputName.endsWith("ICO") || outputName.endsWith("ico"))
  saveDocumentICO(docRef, outputFolder,  outputName);

  docRef.close(SaveOptions.DONOTSAVECHANGES);
}


function CreateLogo(width, height, outputName, logoPosition, logoPadding, isWhite){ 
  app.preferences.rulerUnits = Units.PIXELS;
  var docRef = null;

  if(logoPosition.indexOf("NoLogo") != -1){
    docRef = app.documents.add();
  }else {
    app.open(logoFile);
    docRef = app.activeDocument;
    
    var canvasWidth = docRef.width.value;
    var canvasHeight = docRef.height.value;
    
    // Move logo to center of canvas
    var logoLayer = docRef.artLayers[0];
    var logoPosX = logoLayer.bounds[0];
    var logoPosY = logoLayer.bounds[1];
    logoPosX = parseInt(logoPosX.toString().replace(' px', ''));
    logoPosY = parseInt(logoPosY.toString().replace(' px', ''));
    
    // Get logo layer size
    var logoWidth = logoLayer.bounds[2]-logoLayer.bounds[0]; 
    var logoHeight = logoLayer.bounds[3]-logoLayer.bounds[1]; 
  
    // Remove pixels from the length/width "200 px" => "200"
    logoWidth = parseInt(logoWidth.toString().replace(' px', ''));
    logoHeight = parseInt(logoHeight.toString().replace(' px', ''));
    
    logoLayer.translate(Math.round(logoWidth / 2 + logoPosX - canvasWidth / 2) * (-1), Math.round(logoHeight / 2 + logoPosY - canvasHeight / 2) * (-1));  
  }

  
  // Resize document 
  docRef.resizeCanvas (width, height);


  if(isWhite){
    // Fill Logo layer with white color
    applyColorOverlay(
      {
          r: 255,
          g: 255,
          b: 255,
      });
  }


  if(logoPosition.indexOf("NoLogo") == -1){
    var tempWidth = width - logoPadding * 2;
    var tempHeight = height - logoPadding * 2;
  
    // Resize Logo for height
    if(logoWidth > tempWidth || logoHeight > tempHeight){
  
      var ratioWidth = logoWidth / tempWidth;
      var ratioHeight = logoHeight / tempHeight;
      var changeWidth, changeHeight;
  
      if(ratioHeight > ratioWidth){
        changeHeight = tempHeight / logoHeight * 100;
        changeWidth = ( tempHeight / logoHeight * logoWidth) / logoWidth * 100;
      }
      else{
        // Resize Logo for width
        changeWidth = tempWidth / logoWidth * 100;
        changeHeight = ( tempWidth / logoWidth * logoHeight) / logoHeight * 100;
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
  }
  
  if(outputName.endsWith("SVG") || outputName.endsWith("svg")){
    saveDocumentSVG(docRef, outputFolder,  outputName, width, height);
  }else if(outputName.endsWith("PNG") || outputName.endsWith("png")){
    saveDocumentPNG(docRef, outputFolder,  outputName);
  }

  docRef.close(SaveOptions.DONOTSAVECHANGES);
}


function CreateWhiteLogo(width, height, outputName, logoPosition, logoPadding){
  CreateLogo(width, height, outputName, logoPosition, logoPadding, 'white');
}


function CreateIcn(width, height, outputName, logoPosition, logoPadding){
  Create(width, height, outputName, logoPosition, logoPadding);
}
