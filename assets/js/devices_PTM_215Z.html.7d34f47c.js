"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85370],{85111:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>i,data:()=>s});var o=n(1768);const a={},i=(0,n(69420).A)(a,[["render",function(e,t){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"enocean-ptm-215z",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#enocean-ptm-215z"},[(0,o.Lk)("span",null,"EnOcean PTM 215Z")])],-1)),(0,o.Lk)("table",null,[t[7]||(t[7]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"PTM 215Z")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=EnOcean"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EnOcean")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Pushbutton transmitter module")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PTM-215Z.png",alt:"EnOcean PTM 215Z"})])],-1)),t[6]||(t[6]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"White-label"),(0,o.Lk)("td",null,"Niko 91004, NodOn CWS-4-1-01_HUE, Vimar 03906, Sunricher SR-ZGP2801K4-FOH-E, LED-Trading 9125, Feller 4120.2.S.FMI.61, Namron 4512727")],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation. The devices known to do this are Philips Hue devices and some Ikea Tradfri bulbs (for example <a href="https://www.zigbee2mqtt.io/devices/LED2107C4.html" target="_blank" rel="noopener noreferrer">LED2107C4</a> is confirmed to work). This means that the Green Power device has to be in range of one of these devices in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>This device has 4 buttons:</p><table><thead><tr><th>Number</th><th>Button</th><th>Position</th><th>Channel</th></tr></thead><tbody><tr><td>1</td><td>A0</td><td>Top left</td><td>15</td></tr><tr><td>2</td><td>A1</td><td>Bottom left</td><td>20</td></tr><tr><td>3</td><td>B0</td><td>Top right</td><td>11</td></tr><tr><td>4</td><td>B1</td><td>Bottom right</td><td>25</td></tr></tbody></table><p>In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.</p><p>To pair it, hold the corresponding button for that channel for 7 seconds or more.</p><p>Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don&#39;t press any other buttons between this and the pairing.</p><p>In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.</p><p>Alternatively, you should be able to reset the switch with the following pattern:</p><ol><li>Press top left (A0)</li><li>Press and hold top right (B0) for about 10 seconds</li><li>press top right (B0) and bottom left (A1) at the same time</li><li>press top left (A0) Note: Please make sure the module is positioned the right way up.</li></ol><h2 id="home-assistant" tabindex="-1"><a class="header-anchor" href="#home-assistant"><span>Home Assistant</span></a></h2><p>The user, vandalon, over at the Home Assistant community forum has made a nice Automation Blueprint that works well with this device: https://community.home-assistant.io/t/zigbee2mqtt-enocean-ptm-215z-friends-of-hue-switch/429770 It adds functionality like <code>held_#</code> which is nice to use to for example increase or decrease the brightness of a light.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>release_1</code>, <code>press_2</code>, <code>release_2</code>, <code>press_3</code>, <code>release_3</code>, <code>press_4</code>, <code>release_4</code>, <code>press_1_and_3</code>, <code>release_1_and_3</code>, <code>press_2_and_4</code>, <code>release_2_and_4</code>, <code>press_energy_bar</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),s=JSON.parse('{"path":"/devices/PTM_215Z.html","title":"EnOcean PTM 215Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EnOcean PTM 215Z control via MQTT","description":"Integrate your EnOcean PTM 215Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Home Assistant","slug":"home-assistant","link":"#home-assistant","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728479266000},"filePathRelative":"devices/PTM_215Z.md"}')}}]);