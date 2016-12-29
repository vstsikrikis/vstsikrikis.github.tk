// Created by iWeb 3.0.4 local-build-20161101

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,-1,1,357),url:'BINTEO_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'BINTEO_files/stroke_1.png'},{rect:new IWRect(-1,-2,427,1),url:'BINTEO_files/stroke_2.png'},{rect:new IWRect(426,-2,1,1),url:'BINTEO_files/stroke_3.png'},{rect:new IWRect(426,-1,1,357),url:'BINTEO_files/stroke_4.png'},{rect:new IWRect(426,356,1,1),url:'BINTEO_files/stroke_5.png'},{rect:new IWRect(-1,356,427,1),url:'BINTEO_files/stroke_6.png'},{rect:new IWRect(-2,356,1,1),url:'BINTEO_files/stroke_7.png'}],new IWSize(425,355))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('BINTEO_files/BINTEOMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
