// Created by iWeb 3.0.4 local-build-20161101

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="141" height="16"><param name="src" value="Media/MACKLEMORE%20%26amp%3B%20RYAN%20LEWIS%20-%20CAN%27T%20HOLD%20US%20FEAT.%20RAY%20DALTON%20%28OFFICIAL%20MUSIC%20VIDEO%29.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="141" height="16"><param name="src" value="Media/MACKLEMORE%20%26amp%3B%20RYAN%20LEWIS%20-%20CAN%27T%20HOLD%20US%20FEAT.%20RAY%20DALTON%20%28OFFICIAL%20MUSIC%20VIDEO%29.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="141" height="16" data="Media/MACKLEMORE%20%26amp%3B%20RYAN%20LEWIS%20-%20CAN%27T%20HOLD%20US%20FEAT.%20RAY%20DALTON%20%28OFFICIAL%20MUSIC%20VIDEO%29.mp3"><param name="src" value="Media/MACKLEMORE%20%26amp%3B%20RYAN%20LEWIS%20-%20CAN%27T%20HOLD%20US%20FEAT.%20RAY%20DALTON%20%28OFFICIAL%20MUSIC%20VIDEO%29.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,-1,1,267),url:'YPERESIES_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'YPERESIES_files/stroke_1.png'},{rect:new IWRect(-1,-2,356,1),url:'YPERESIES_files/stroke_2.png'},{rect:new IWRect(355,-2,1,1),url:'YPERESIES_files/stroke_3.png'},{rect:new IWRect(355,-1,1,267),url:'YPERESIES_files/stroke_4.png'},{rect:new IWRect(355,266,1,1),url:'YPERESIES_files/stroke_5.png'},{rect:new IWRect(-1,266,356,1),url:'YPERESIES_files/stroke_6.png'},{rect:new IWRect(-2,266,1,1),url:'YPERESIES_files/stroke_7.png'}],new IWSize(353,265))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('YPERESIES_files/YPERESIESMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
