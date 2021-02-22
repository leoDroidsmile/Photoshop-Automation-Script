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
function saveDocument(activeDocument, filePath, fileName)
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
