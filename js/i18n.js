(function(){
const EN={
'AgroLeak | Protección agrícola inteligente':'AgroLeak | Smart agricultural protection',
'AgroLeak monitorea caudal, evidencia visual y actuación segura para reducir pérdidas por fugas y señales tempranas de plaga.':'AgroLeak monitors flow, visual evidence and safe actuation to reduce losses from leaks and early pest signals.',
'Logo AgroLeak':'AgroLeak logo','Abrir menú':'Open menu',
'Solución':'Solution','Cómo funciona':'How it works','En campo':'In the field','Precios':'Pricing','Seguridad':'Security','Solicitar demo':'Request demo',
'IoT agrícola · monitoreo local · control humano':'Agricultural IoT · local monitoring · human control',
'Protege tu agua.':'Protect your water.','Cuida tu cultivo.':'Care for your crop.',
'AgroLeak conecta sensores de caudal, evidencia visual y una válvula con retroalimentación para detectar anomalías y responder antes de que una fuga o una señal de plaga se conviertan en una pérdida mayor.':'AgroLeak connects flow sensors, visual evidence and a valve with feedback to detect anomalies and respond before a leak or a pest signal turns into a bigger loss.',
'Solicitar demostración':'Request a demo','Ver funcionamiento':'See how it works',
'✓ Reglas locales':'✓ Local rules','✓ Evidencia trazable':'✓ Traceable evidence','✓ Modos de operación seguros':'✓ Safe operation modes',
'Campo agrícola con sistema de riego':'Farm field with irrigation system',
'Campo real · riego tecnificado':'Real field · technified irrigation',
'TRAMO 02 · EN VIVO':'SECTION 02 · LIVE','● revisar':'● review',
'Diferencia de caudal: 8.1%':'Flow difference: 8.1%',
'Entrada · 31.4 L/min':'Inlet · 31.4 L/min','Salida · 28.9 L/min':'Outlet · 28.9 L/min',
'Alerta de caudal':'Flow alert','Persistencia validada · revisar':'Persistence validated · review',
'2 riesgos':'2 risks','caudal + plagas':'flow + pests','1 trazabilidad':'1 traceability','dato → decisión → resultado':'data → decision → result',
'3 modos':'3 modes','seguridad operativa':'operational safety','telemetría del tramo':'section telemetry',
'La propuesta':'The proposal','Dos problemas del campo, una sola plataforma.':'Two field problems, one platform.',
'La landing traduce los requisitos del proyecto a una propuesta clara para un productor: detectar pérdidas de agua y registrar evidencia visual de posibles plagas.':'This landing page turns the project requirements into a clear proposal for a grower: detect water losses and record visual evidence of possible pests.',
'Riego por goteo instalado en cultivo':'Drip irrigation installed in a crop',
'Monitoreo de caudal':'Flow monitoring','Q1 ↔ Q2 · comparación en tiempo real':'Q1 ↔ Q2 · real-time comparison',
'Riego':'Irrigation','Detectar diferencias de caudal antes':'Detect flow differences earlier',
'AgroLeak compara la entrada y salida del tramo. Si la diferencia persiste sobre el umbral, genera una alerta y prepara una acción preventiva según el modo configurado.':'AgroLeak compares the inlet and outlet of the section. If the difference persists above the threshold, it raises an alert and prepares a preventive action according to the configured mode.',
'Dos sensores por tramo':'Two sensors per section','Persistencia contra falsos positivos':'Persistence against false positives','Válvula con feedback':'Valve with feedback',
'Áfido sobre una hoja de cultivo':'Aphid on a crop leaf','Evidencia visual real':'Real visual evidence',
'Posible plaga · confianza 0.87':'Possible pest · confidence 0.87','Sanidad':'Plant health','Registrar señales visuales de plaga':'Record visual pest signals',
'La cámara IoT captura un punto de observación y conserva la evidencia para revisión. La detección no se presenta como diagnóstico definitivo, sino como apoyo temprano.':'The IoT camera captures an observation point and keeps the evidence for review. The detection is not presented as a definitive diagnosis, but as early support.',
'Captura con ESP32-CAM':'Capture with ESP32-CAM','Clase + confianza + evidencia':'Class + confidence + evidence','Revisión humana disponible':'Human review available',
'Cada incidente puede reconstruirse desde la lectura inicial hasta la respuesta ejecutada.':'Every incident can be reconstructed from the initial reading to the response carried out.',
'Sensar':'Sense','Caudal de entrada/salida y evidencia visual.':'Inlet/outlet flow and visual evidence.',
'Validar':'Validate','Umbral, persistencia y confianza.':'Threshold, persistence and confidence.',
'Actuar':'Act','Alerta o acción según el modo seguro.':'Alert or action according to the safe mode.',
'Trazar':'Trace','Lecturas, evidencia, comando y resultado.':'Readings, evidence, command and result.',
'Kit IoT AgroLeak con ESP32, sensores, cámara y válvula':'AgroLeak IoT kit with ESP32, sensors, camera and valve',
'KIT AGROLEAK · MVP':'AGROLEAK KIT · MVP','telemetría + reglas locales':'telemetry + local rules','evidencia visual':'visual evidence',
'Válvula CR-05':'CR-05 valve','actuación + feedback':'actuation + feedback',
'Kit de campo':'Field kit','Hardware suficiente para validar el circuito completo.':'Enough hardware to validate the complete circuit.',
'El objetivo del MVP no es reemplazar una infraestructura industrial completa. Es demostrar lectura, decisión, evidencia y actuación segura con componentes disponibles.':'The goal of the MVP is not to replace a full industrial infrastructure. It is to demonstrate reading, decision, evidence and safe actuation with available components.',
'telemetría y reglas':'telemetry and rules','caudal diferencial':'differential flow','feedback del actuador':'actuator feedback',
'En contexto real':'In real context','El producto se entiende mejor cuando se ve en campo.':'The product is best understood when seen in the field.',
'Por eso combinamos la interfaz digital con fotografías reales de riego, operación agrícola y evidencia de plagas. La tecnología acompaña el proceso; no reemplaza la lectura del agricultor.':'That is why we combine the digital interface with real photos of irrigation, farm operations and pest evidence. The technology supports the process; it does not replace the farmer’s judgment.',
'Productor agrícola en un campo de tomates':'Farmer in a tomato field','Operación en campo':'Field operation',
'El productor sigue teniendo la última decisión sobre alertas y actuaciones.':'The grower always keeps the final decision on alerts and actuations.',
'Detalle de riego por goteo':'Drip irrigation detail','Riego localizado':'Localized irrigation',
'Medir antes y después del tramo permite detectar diferencias persistentes.':'Measuring before and after the section makes it possible to detect persistent differences.',
'Áfido sobre hoja':'Aphid on a leaf','Evidencia de plaga':'Pest evidence',
'La cámara conserva una imagen para revisión y trazabilidad.':'The camera keeps an image for review and traceability.',
'Fotografías reales de referencia: USDA / USDA ARS (dominio público) y AmyAbroad vía Wikimedia Commons (CC BY-SA 4.0). Imagen hero: Bernd Dittrich vía Unsplash, libre bajo la Unsplash License.':'Real reference photos: USDA / USDA ARS (public domain) and AmyAbroad via Wikimedia Commons (CC BY-SA 4.0). Hero image: Bernd Dittrich via Unsplash, free under the Unsplash License.',
'Precios referenciales':'Reference pricing','Kit físico + suscripción accesible.':'Physical kit + affordable subscription.',
'La propuesta separa el costo del hardware del servicio digital para que pueda escalar por parcelas, dispositivos e historial.':'The proposal separates hardware cost from the digital service so it can scale by plots, devices and history.',
'Kit AgroLeak · MVP':'AgroLeak Kit · MVP',
'Pago único referencial. Componentes principales, armado, integración y calibración inicial.':'Reference one-time payment. Main components, assembly, integration and initial calibration.',
'hardware principal referencial':'reference main hardware',
'Esencial':'Essential','/mes':'/mo','Para validar una parcela.':'To validate one plot.',
'1 tramo de riego':'1 irrigation section','1 punto visual':'1 visual point','2 usuarios':'2 users','30 días de historial':'30 days of history',
'Probar piloto':'Try the pilot','Recomendado':'Recommended','Productor':'Grower','Para operación diaria.':'For daily operation.',
'Hasta 3 tramos':'Up to 3 sections','Hasta 3 puntos visuales':'Up to 3 visual points','5 usuarios':'5 users','12 meses de historial':'12 months of history','Reportes exportables':'Exportable reports',
'Fundo':'Estate','Desde S/ 149':'From S/ 149','Para más parcelas y dispositivos.':'For more plots and devices.',
'Múltiples parcelas':'Multiple plots','Roles de usuario':'User roles','Historial ampliado':'Extended history','Soporte de despliegue':'Deployment support','Cotizar':'Get a quote',
'¿Por qué estos precios? Ver referencias del mercado':'Why these prices? See market references',
'Referencia local: ~S/35':'Local reference: ~S/35','Referencia local: ~S/20 c/u':'Local reference: ~S/20 each','Referencia local: ~S/150':'Local reference: ~S/150',
'Starter US$29/mes':'Starter US$29/mo','Prototype desde US$49/mes':'Prototype from US$49/mo','Professional US$99/mes':'Professional US$99/mo',
'Seguridad por diseño':'Security by design','Automatizar sin quitarle el control al agricultor.':'Automate without taking control away from the farmer.',
'Los modos de operación evitan que una lectura aislada produzca una acción física irreversible sin la validación correspondiente.':'Operation modes prevent an isolated reading from triggering an irreversible physical action without the proper validation.',
'Observa y alerta; no cambia estados físicos.':'Observes and alerts; does not change physical states.',
'La acción se ejecuta luego de una aprobación humana.':'The action runs after human approval.',
'Automatización limitada a escenarios seguros de demostración.':'Automation limited to safe demo scenarios.',
'Piloto AgroLeak':'AgroLeak pilot','Solicita una demostración.':'Request a demo.',
'Cuéntanos qué cultivas, cuántas hectáreas manejas y qué problema quieres validar primero. Esta sección cubre la captación de interesados planteada en la landing del proyecto.':'Tell us what you grow, how many hectares you manage and which problem you want to validate first. This section covers the lead capture set out in the project landing page.',
'La demo debe mostrar':'The demo should show','lecturas → alerta → evidencia → decisión → historial':'readings → alert → evidence → decision → history',
'Nombre':'Name','Teléfono':'Phone','Correo':'Email','Zona agrícola':'Farming area','Ej. Huaral, Ica, Cañete':'e.g. Huaral, Ica, Cañete',
'Cultivo':'Crop','Ej. palta, arándano, uva':'e.g. avocado, blueberry, grape','Hectáreas':'Hectares','Problema a validar':'Problem to validate',
'Seleccionar':'Select','Fugas y caudal':'Leaks and flow','Plagas y evidencia visual':'Pests and visual evidence','Ambos':'Both',
'Mensaje':'Message','Cuéntanos brevemente cómo trabajas hoy.':'Briefly tell us how you work today.','Registrar solicitud':'Submit request',
'Proyecto académico IoT · Universidad Peruana de Ciencias Aplicadas':'Academic IoT project · Universidad Peruana de Ciencias Aplicadas',
'Volver arriba ↑':'Back to top ↑',
'Esta versión mantiene CSS, JavaScript y logo dentro del mismo HTML. Las fotografías reales se cargan desde Wikimedia Commons y Unsplash; si una red bloquea recursos externos, el contenido y el layout siguen funcionando.':'This version keeps CSS, JavaScript and logo within the same HTML. Real photos are loaded from Wikimedia Commons and Unsplash; if a network blocks external resources, the content and layout keep working.',
'Solicitud registrada para la demostración. En producción, este envío se conectaría al backend.':'Request recorded for the demo. In production, this submission would connect to the backend.'
};
const ATTRS=['alt','placeholder','aria-label'];
const store=new WeakMap();
let lang='es';
function tr(s){return lang==='en'&&EN[s]!==undefined?EN[s]:s}
function apply(){
document.documentElement.lang=lang==='en'?'en':'es-PE';
document.title=tr('AgroLeak | Protección agrícola inteligente');
const md=document.querySelector('meta[name=description]');
if(md){if(!store.has(md))store.set(md,md.content);md.content=tr(store.get(md))}
const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
let n;while(n=w.nextNode()){
if(n.parentElement.closest('script,style'))continue;
if(!store.has(n))store.set(n,n.nodeValue);
const o=store.get(n),t=o.trim();
if(t&&EN[t]!==undefined)n.nodeValue=lang==='en'?o.replace(t,EN[t]):o;
}
document.querySelectorAll('[alt],[placeholder],[aria-label]').forEach(el=>{
const o=store.get(el)||{};
ATTRS.forEach(a=>{if(!el.hasAttribute(a))return;if(!(a in o))o[a]=el.getAttribute(a);el.setAttribute(a,tr(o[a]))});
store.set(el,o);
});
const b=document.getElementById('lang-toggle');
if(b){b.textContent=lang==='en'?'ES':'EN';b.setAttribute('aria-label',lang==='en'?'Cambiar a español':'Switch to English')}
}
function set(l){lang=l;try{localStorage.setItem('agroleak-lang',l)}catch(e){}apply()}
window.agroleakT=tr;
try{const s=localStorage.getItem('agroleak-lang');lang=s||((navigator.language||'es').toLowerCase().startsWith('en')?'en':'es')}catch(e){}
document.getElementById('lang-toggle').addEventListener('click',()=>set(lang==='en'?'es':'en'));
if(lang==='en')apply();else apply();
})();
