import LocalizedStrings from 'react-localization';

export const strings = new LocalizedStrings({
  en:{
    AccountTitle:'Account'
    , ChangePasswordTitle: 'How do I change my password?'
    , ChangePasswordP1: 'You can find the option to change your password on your'
    , ChangePasswordL1: 'profile view'
    , ForgotPasswordTitle: 'How do I change my password if I forgot it?'
    , ForgotPasswordP1: 'When you click sign in, there is an option there that says "I forgot my password".'
    , ForgotPasswordL1: 'This link'
    , ForgotPasswordP2: 'will take you to the flow.'
    , BirthdayTitle: 'Why do I have to provide my birthday?'
    , BirthdayP1: 'We need to get your birthday in order to make sure that we comply with Child Online Protection Act (COPA). COPPA imposes certain requirements on operators of websites or online services directed to children under 13 years of age. You can learn more about COPA'
    , BirthdayL1: 'here.'
    , DisableAccountTitle:"How do I disable my child's account?"
    , DissableAccountP1: 'At Toybox, we keep as little data as possible to protect your childs privacy. However, we keep some data in order to allow your child to use their printer. This includes hosting their toy designs on our website so that they can be sent to their printer.'
    , DisableAccountP2: 'We want to make sure you have control over any data we keep for your child. If at anytime you want us to remove information about your child or would like to know more, please send an email to support@make.toys and one of our friendly Toybox assistants will help you. :)'
    , DisableAccountP3:"If you don't approve of your child's membership registration, send an email to support@make.toys."
    , FacebookProblemTitle: "I can't create an account through Facebook"
    , FacebookProblemP1: "If you are having issues, please send us an email through"
    , FacebookProblemL1: "here"
    , MechanicalTitle: 'Mechanical'
    , NoPlasticTitle: "No plastic is coming out of my printer when I print!"
    , NoPlasticP1: 'Well that’s not good! Sounds like something is preventing your printer food from freely flowing through the printer. This could be caused by multiple reasons, lets go over some of the most common reasons why this could happen and hopefully we can figure this out. Check out some of the reasons below.'
    , NoPlasticSubtitle1: "Using an unsupported 3rd party filament"
    , NoPlasticSubtitle1P1:"If you are using Toybox printer food, this will not be an issue, please go to the next step."
    , NoPlasticSubtitle1P2: "  When buying filament from 3rd party sources, it’s very easy to end up with inconsistent sizes and materials of filament. Sometimes they can be labeled wrong. Sometimes the thickness of the filament can variate (sometimes to thin and too thick in different parts of the roll). If the filament is too thick, it will not be able to fit through the inner tubes of the extruder and nothing will come out. Please make sure you are using 1.75mm PLA filament. After that, double check that the thickness actually is 1.75mm with a caliper, or simply test with a little bit of Toybox printer food to make sure the filament is coming out correctly. Sometimes the thickness can be correct, but cheap manufacturers will make the filament out of a different type of material and label it as PLA."
    , NoPlasticSubtitle2: "Printer-Food doesn’t have a clean cut"
    , NoPlasticSubtitle2P1:"Sometimes, when pulling printer-food out of the printer, the filament can form a little blob at the end. This can prevent the printer food from flowing freely through the extruder. To see if this is the problem do the following:"
    , NoPlasticSubtitle2L1:"Pull the printer food out of the printer by clicking the gear icon on the printer’s LCD and then pressing the ‘ink’ button"
    , NoPlasticSubtitle2L2: "Once the nozzle is heated to a high enough temperature to remove, the buttons on the LCD will turn white, this usually takes about 2 minutes "
    , NoPlasticSubtitle2L3: "Keep pressing the “remove” button until you can freely pull the printer-food out of the top of the printer"
    , NoPlasticSubtitle2L4: "Get a pair of scissors and cut off about an inch of printer-food from the spool "
    , NoPlasticSubtitle2L5: "Take the printer food, and put it back into the extruder until it feels a little tight "
    , NoPlasticSubtitle2L6: "Keep pressing the ‘“insert” button until filament comes out of the nozzle "
    , NoPlasticSubtitle2L7: "Try to print something simple again like the toybox keychain "
    , NoPlasticSubtitle2L8: " If the problem still persists, try  the next step "
    , NoPlasticSubtitle3: "Spool of printer food is tangled"
    , NoPlasticSubtitle3P1: "Every once in a while there can be be a knot in the printer-food roll. This can prevent the printer-food roll from unrolling and properly feeding into the printer. Check the roll and make sure there isn’t a knot and you can freely roll and unroll the printer food roll by pulling lightly on the printer food sticking out of the roll."
    , NoPlasticSubtitle3P2:"If there is a knot, remove your printer food from the printer and undo the knot. The printer should then be ready to go!"
    , NoPlasticSubtitle4: "Printer food spool is facing the wrong direction"
    , NoPlasticSubtitle4P1: "The printer food actually has a right and wrong direction to face when putting it on the back of your Toybox. In one direction, the printer food is much looser than the other direction. You want your printer food to be as loose as possible to make sure the Toybox has an easy time eating the printer food."
    , NoPlasticSubtitle4P2: "To make sure the printer food is as loose as possible, you want to make sure the solid side of the roll is facing outward. See the picture below."
    , NoPlasticSubtitle5: "Using a 3rd party spool holder, or not using one at all."
    , NoPlasticSubtitle5P1:"  A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack of printer-food and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool."
    , NoPlasticSubtitle6: "I tried the above steps and nothing is still coming out of my printer!"
    , NoPlasticSubtitle6P1: "Hmm, seems like you might either have a hardware issue or an uncommon issue. Please contact us at support@make.toys with the following information so we can personally help you figure this out. If possible, please try to send a video of the printer printing, it helps tremendously and we can usually figure out what is wrong right away with a good video."
    , NoPlasticSubtitle6L1: "When printing, if you lightly hold the printer food feeding into the extruder, can you feel it clicking?"
    , NoPlasticSubtitle6L2: "Is the extruder fan on? (You should hear it, it’s pretty loud)"
    , NoPlasticSubtitle6L3: "Was this printer working before? Has anything changed since the last time it worked?"
    , GrindingNoseTitle: "My printer makes a grinding noise when it starts printing"
    , GrindingNoseP1: "Before starting the debugging process, please make sure the wire at the top is not tucked into the side of the case. Often, we tuck the wire into the side of the case to make for easier shipping, sometimes when this wire is stuck under the case, it can cause the printer from not reaching its home position correctly. Please see the image below:"
    , GrindingNoseP2: "If the wire is already untucked and free this usually means that for some reason, the switches that determine the ‘home’ position aren’t being triggered. Please find the 3 switches (X,Y,Z). Look at the picture for guidance. When pressing on those switches, they should make a ‘clicky’ noise."
    , GrindingNoiseL1: 'Unplug your printer so it is completely off.'
    , GrindingNoiseL2: "Make sure there is no plastic stuck on the nozzle, if there is, please remove it. Be careful not to burn yourself, the nozzle can stay hot for minutes after being turned off. It’s best to use a tool like pliers and lightly remove the plastic."
    , GrindingNoiseL3: " Move the extruder head with your to the very center."
    , GrindingNoiseL4: 'Move the extruder to the very right side with your hand. Make sure there is a “click” noise '
    , GrindingNoiseL5: 'Move your extruder to the very back of the printer. Make sure there is a “click” noise'
    , GrindingNoiseL6: "'Place your hand under the print bed, move the bed all the way to the top, make sure there is a click noise. Heads up, if there is any hardened plastic on the bottom of the nozzle, please remove it! Or the bed won’t make it to the switch. "
    , GrindingNoiseL7: 'If any of those switches didn’t click. Isolate the switches that didn’t click, and then we’ll provide a quick fix. '
    , GrindingNoiseL8: "Very carefully bend the metal piece of the switch like the picture below. This will add some extra length and allow the switch to be hit by the extruder. Be careful though, if the metal  part of this switch breaks, we'll have bigger problems."
    , GrindingNoiseL9: 'If this is on the Z axis (The print bed switch). Then you will likely need to calibrate your printer. Please see the calibration instructions on the calibration section below.'
    , ScrapesTitle: "The printer nozzle scrapes into the printing surface in the beginning of the print"
    , ScrapesP1: 'This is happening because the Z-axis (print bed) is calibrated too closely to the printing nozzle. To fix this you will need an allen wrench (Either 3/32” imperial, or 2.5mm metric).'
    , ScrapesP2: 'Please locate the small screw in the back of your printing surface. See the picture below.'
    , ScrapesP3: 'This screw makes sure the distance is correct between the printing nozzle and the print bed when the printer starts. The trick is, to twist this screw just the right amount, so that the first layer that is printed rests perfectly on the bed. Right now, this screw is too short, so we need to loosen the screw so the screw hits the switch sooner. With your allen wrench, you want to screw in a counterclockwise direction to loosen it.'
    , ScrapesP4: 'You’ll then want to test a print and make sure it prints correctly. Be patient, this may take a few tries to get right! Your goal is to get the first layer to look something like the picture below:'
    , DamagedTitle: "My device arrived damaged!"
    , DamagedP1: 'That is no good! Please contact us immediately at support@make.toys so that we can help you. Please provide a description of the problem and provide pictures and/or a video if possible.'
    , PrintQualityTitle: 'Print Quality'
    , MissingLayersTitle: 'My prints seem to be missing layers or have really thin plastic layers in the middle of the prints'
    , MissingLayersP1: 'This usually is caused by low quality filament. If you are using third party filaments, please try a roll of Toybox printer food to see if this fixes the problem.'
    , MissingLayersP2: 'Another thing that can potentially cause this is that the extruder motor is having a tough time unwinding the printer-food roll. Please make sure the solid side of the printer-food roll is facing outwards. The printer-food roll should be extremely easy to unwind, it should feed pretty loose on the spool holder, even a little resistance can dramatically affect to quality of the prints. See the picture below.'
    , WarpedLayersTitle:"My prints come out looking warped"
    , WarpedLayersP1: 'For some prints, especially smaller prints, sometimes the object doesn’t have enough time to cool and this causes warping. This also happens when pulling the print off the bed too quickly after its done printing. It’s good to wait about 30 seconds to a minute after the print is complete before taking the print from the bed.'
    , WarpedLayersP2: 'To prevent warpage, try pointing a fan on your printer while it prints, that should help.'
    , NoStickTitle: "My prints don’t stick to the surface"
    , NoStickP1: 'It seems like this could because the printing surface is too low for the nozzle. Sometimes if this is the case, the plastic never gets a chance to fully stick to the surface and ends up gooping up under the nozzle.'
    , NoStickP2: 'There are two fairly quick fixes for this:'
    , NoStickL1: 'There is a little screw in the back of the printing surface on the left side. If you can find an allen wrench that fits (Either 3/32" imperial or 2.5mm metric), you can tighten that screw around 1/4 of a full turn, that should cause the printer to start the print a bit closer to the printing surface.'
    , NoStickL2: 'Another quick fix is to add a three or four layers of masking tape the print surface. That will add some extra height to the surface and help with the plastic sticking to the print bed'
    , NoStickP3: 'You will eventually want to aim for a good first layer. Something like in the picture below is acceptable'
    , BlobbyTitle: "My prints don’t look like anything at all, just a blobby or stringy mess"
    , BlobbyP1: 'First, make sure your removable flexible magnetic bed is in the printer. If this is not inside the printer, the printing nozzle will be too far from the build plate to actually print.'
    , BlobbyP2: 'If your removable magnetic bed is already on the metal platform, Similar to above, your printer’s z-axis (print bed) is probably calibrated too low. There is a little screw in the back of the printing surface on the left side. If you can find an allen wrench that fits (Either 3/32" imperial or 2.5mm metric), you can tighten that screw around 1/2 of a full turn at a time, that should cause the printer to start the print a bit closer to the printing surface.'
    , BlobbyP3: 'After doing that, go ahead and start a print. This may take a few tried to get right, so be patient, once you get this perfect, you should not have to recalibrate it again.'
    , BlobbyP4: 'You want to make sure the first layer looks really nice. After that, your print should start working. Below is a picture of an acceptable first layer.'
    , ShiftingTitle: "My prints look like they have some weird shifting going on"
    , ShiftingP1:'This is most likely because something is preventing the motors on the XY plane to correctly move. Usually this means there is some type of resistance on the extruder, most often caused by it not being able to pull the filament roll. Please check the following:'
    , ShiftingSubtitle1: "Spool of printer food is tangled"
    , ShiftingSubtitle1P1:"Every once in awhile there can be be a knot in the printer-food roll. This can prevent the printer-food roll from unrolling and properly feeding into the printer. Check the roll and make sure there isn’t a knot and you can freely roll and unroll the printer food roll by pulling lightly on the printer food sticking out of the roll."
    , ShiftingSubtitle1P2: "If there is a knot, remove your printer food from the printer and undo the knot. The printer should then be ready to go!"
    , ShiftingSubtitle2: "Printer food spool is facing the wrong direction"
    , ShiftingSubtitle2P1:"The printer food actually has a right and wrong direction to face when putting it on the back of your Toybox. In one direction, the printer food is much looser than the other direction. You want your printer food to be as loose as possible to make sure the Toybox has an easy time eating the printer food."
    , ShiftingSubtitle2P2:"To make sure the printer food is as loose as possible, you want to make sure the solid side of the roll is facing outward. See the picture below."
    , ShiftingSubtitle3: "Using a 3rd party spool holder, or not using one at all."
    , ShiftingSubtitle3P1:"A good printer-food spool holder is necessary for prints to come out correctly. Otherwise the Toybox won’t eat the food correctly and nothing will flow out of the printer. You can test if this is the issue by allowing a foot or two of loose slack and then trying to print. If your Toybox can suddenly print, it means that the printer isn’t strong enough to pull the spool."
    , SetupTitle: 'Setup'
    , CannotConnectTitle: "Help! I can't connect to the TOYBOX network"
    , CannotConnectP1: 'Shortly after connecting to the ‘TOYBOX’ network, a captive portal popup window should appear on your device. Here, you should be able to pick a home wifi network to connect to. If this  does not happen, please follow the following steps.'
    , CannotConnectL1: 'On your device, connect to the Toybox network. Please wait for the connection to the network to fully establish and then wait on the current screen for the popup to appear. On iphone and android devices, if you navigate away from the wifi page, sometimes it will cause the popup to never appear. This process can sometimes take up to two minutes.'
    , CannotConnectL2: 'If you seem to be successfully connected to the network, and no popup ever appears. Please navigate in your browser and type this in your url box: “toy.box” without quotation marks.'
    , CannotConnectL3: 'If no popup appears. Please restart your Toybox by unplugging, and plugging in the Toybox.'
    , CannotConnectL4: 'You should see a green screen load with directions to connect to your home wifi network.'
    , CannotConnectL5: 'Wait up to 2 minutes if this does not work try again on another device.'
    , CannotConnectL6: 'One thing that often helps is to “forget network” on the device you are using to connect to the Toybox, please look up instructions on how to forget networks on your current device.'
    , CannotConnectL7: 'After forgetting the network, try reconnecting to the Toybox.'
    , CannotConnectL8: 'If you are still having problems connecting to the Toybox network, please contact us at “support@make.toys” so we can personally help guide and debug you through the process.'
    , NoHomeNetworkTitle: "I can connect to the TOYBOX network, but I can’t find my home network."
    , NoHomeNetworkP1: 'There are multiple things that can cause this, so we’ll walk you through a process to hopefully correct this problem.'
    , NoHomeNetworkP2: 'Please ensure that you have the following specifications. Toybox will only work with routers under these specifications:'
    , NoHomeNetworkL1: 'Printer is within 20 feet with a direct line of sight to the router'
    , NoHomeNetworkL2: 'Network to connect to is on the 2.4Ghz wifi band'
    , NoHomeNetworkL3: 'Wifi router does not have a static IP address (By default, your router probably will not have this setting)'
    , NoHomeNetworkL4: 'If you are still having trouble finding your network. You can alternatively turn your phone as a hotspot and use that'
    , NoCodeTitle: "My printer is not showing the code to link my profile"
    , NoCodeP1: 'If the Toybox website or app is asking for a 6 digit code to link your profile. Please check the screen on your LCD. If there is no 6 digit code displayed on the screen, you can retrieve the code by doing the following steps:'
    , NoCodeL1: 'On the LCD screen, click the gear in the top right'
    , NoCodeL2:'Click on the account button, there should now be a code that displays on the screen.'
    , NoCodeP2: 'If the printer stays in loading when you try to get the code, it means that the printer is having a difficult time reaching the server. This is most likely due to a poor internet connection. Please make sure you have a constant and reliable internet connection'
    , StuckOnLoadingTitle: "My printer screen stays in loading"
    , StuckOnLoadingP1: "If the printer LCD screen stays in loading for a long time, it is likely that your printer is not connected to the internet. Please make sure to keep your printer no more than 20 feet away from the router."
    , StuckOnLoadingP2: "If you are on a reliable connection, and the screen is stuck at loading for more than 4 minutes, please send send us an email through"
    , StuckOnloadingA1: 'here'
    , NoFindAppTitle: "I can't find the mobile app"
    , NoFindAppP1: 'You can find the iOS app'
    , NoFindAppA1: 'here'
    , NoFindAppP2: 'and the Android app'
    , NoFindAppA2: 'here'
    , NoFindAppP3: 'If you want to search in the app store or google play store. Try searching “Toybox 3D Printer.” It should be the first one to come up, it’s orange and has the Toybot, robot as the image.'
    , NoDesktopAppTitle: "I can't find the desktop app"
    , NoDesktopAppP1: 'Welcome to the future! You can control your Toybox printer through the website. You can choose a toy from the '
    , NoDesktopAppA1: 'catalog'
    , NoDesktopAppP2: ' or go to the '
    , NoDesktopAppA2: 'creator space'
    , NoDesktopAppP3: ' to create your own! Just make sure that you are logged into an account that is connected to your printer'
    , NoDriversTitle: "I can't find the drivers for the printer"
    , NoDriversP1:'Since you can control your printer remotely through our app or website, there is no need for drivers :)'
    , MissingSomething: 'Are we missing something? Post an issue'
    , MissingSomethingA1: 'here'
    , OpenSourceMessage: 'This page is open source. Help out the community by contributing '
    , OpenSourceA1: 'here'
  }
  , es:{
    AccountTitle:'Cuenta'
    , ChangePasswordTitle: '¿Cómo cambio mi contraseña?'
    , ChangePasswordP1: 'Para cambiar su contraseña debe ingresar a su'
    , ChangePasswordL1: 'perfil'
    , ForgotPasswordTitle: '¿Cómo cambio mi contraseña si se me olvido?'
    , ForgotPasswordP1: 'Cuando hace clic en ingresar, existe una opción que dice “olvidé mi contraseña”'
    , ForgotPasswordL1: 'Este vínculo'
    , ForgotPasswordP2: 'le permitirá procesar la acción.'
    , BirthdayTitle: '¿Porqué debo proveer mi fecha de cumpleaños?'
    , BirthdayP1: 'Solicitamos su fecha de cumpleaños para cumplir con el Acta de Protección Infantil en Línea (COPA). COPA exige ciertos requerimientos para operadores de páginas web o servicios en línea dirigidos hacia niños menores de 13 años de edad. Puede aprender más sobre COPA aquí.'
    , BirthdayL1: 'aquí.'
    , DisableAccountTitle: '¿Cómo desactivo la cuenta de mi hijo/a?'
    , DissableAccountP1: 'En Toybox retenemos la menor cantidad de datos posible.'
    , DisableAccountP2: 'Si en cualquier momento quiereque retiremos datos sobre su hijo/a o quisiera obtener mayor información, envíenos un correo a support@make.toys y uno de nuestros asistentes lo ayudará. :)'
    , DisableAccountP3:"Si no está de acuerdo con la membresía de su hijo/a mándenos un correo a support@make.toys."
    , FacebookProblemTitle: "No puedo crear una cuenta a través de Facebook."
    , FacebookProblemP1: "Si está teniendo dificultades, envíenos un correo a través del siguiente"
    , FacebookProblemL1: "vínculo"
    , MechanicalTitle: 'Ayuda técnica'
    , NoPlasticTitle: "No está saliendo plástico de mi impresora."
    , NoPlasticP1: 'Puede que algo esta previniendo que su filamento fluya a través de la impresora. Esto pudiera ser causado por múltiples razones, a continuación, alguna de las razones más frecuentes por lo que esto pudiera estar sucediendo:'
    , NoPlasticSubtitle1: "Está utilizando un filamento de un proveedor externo."
    , NoPlasticSubtitle1P1:"Si usted está utilizando filamento de Toybox, esto no debería de ser un problema, por favor diríjase al siguiente paso."
    , NoPlasticSubtitle1P2:"Al comprar filamentos de proveedores externos, es posible que sean de tamaños y materiales no compatibles. En ocasiones pueden estar mal identificados o el grosor del filamento puede variar (muy delgado o muy grueso en distintas partes del rollo). Si el filamento es muy grueso no entrará en los tubos del extrusor y nada saldrá. Por favor asegúrese que está utilizando filamento PLA de 1.75mm. Puede confirmar que sea de este grosor utilizando un calibre o bien pruebe utilizar filamento de Toybox para asegurarse que este saliendo correctamente. En ocasiones el grosor puede estar correcto, pero proveedores de baja calidad utilizan distintos materiales para crear el filamento y luego lo etiquetan como PLA."
    , NoPlasticSubtitle2: "El filamento no tiene un corte limpio."
    , NoPlasticSubtitle2P1:"En ocasiones, al retirar el filamento de la impresora se puede formar una masa en la punta. Esto no permite que el filamento fluya a través el extrusor. Para verificar si este es el problema, haga lo siguiente:"
    , NoPlasticSubtitle2L1:"Retire el filamento de la impresora seleccionando el ícono de herramientas en la LCD de la impresora y luego seleccionado el botón que dice “tinta”."
    , NoPlasticSubtitle2L2: "Una vez haya calentado la boquilla lo suficiente para poder retirarlo, los botones en la LCD se volverán blancos. Esto usualmente tarda unos 2 minutos."
    , NoPlasticSubtitle2L3: "Continué presionando el botón de “retirar” hasta que pueda quitar el filamento fácilmente de la impresora."
    , NoPlasticSubtitle2L4: "Con un par de tijeras corte alrededor de una pulgada de filamento de la bobina."
    , NoPlasticSubtitle2L5: "Vuelva a colocar el filamento en el extrusor hasta que se sienta un poco apretado."
    , NoPlasticSubtitle2L6: "Continúe presionando el botón de “insertar” hasta que el filamento salga de la boquilla."
    , NoPlasticSubtitle2L7: "Intente imprimir algo simple, como el llavero de Toybox."
    , NoPlasticSubtitle2L8: "Si el problema continúa, intente el siguiente paso."
    , NoPlasticSubtitle3: "La bobina del filamento esta enrollada."
    , NoPlasticSubtitle3P1: "En ocasiones puede formarse un nudo en el rollo de filamento. Esto no permite que el filamento se desenrolle e ingrese a la impresora correctamente. Revise el rollo y asegúrese que no tenga u nudo y que puede fácilmente enrollar y desenrollar el filamento al jalar levemente del pedazo que sale del rollo."
    , NoPlasticSubtitle3P2: "Si existe un nudo, retire el filamento de la impresora y deshaga el nudo. ¡La impresora debería estar lista para imprimir!"
    , NoPlasticSubtitle4: "La bobina del filamento esta viendo hacia la dirección equivocada."
    , NoPlasticSubtitle4P1: "El filamento tiene una dirección apropiada a la que debe estar viendo al colocarlo detrás de su Toybox. En una dirección el filamento queda mucho más suelto que la otra. El filamento debe quedar lo más suelto posible para que la impresora pueda jalar el filamento con más facilidad."
    , NoPlasticSubtitle4P2: "Para asegurarse que el filamento está lo más suelto posible, revise que el lado sólido del rollo está viendo hacia afuera. Vea la siguiente imagen como ejemplo:"
    , NoPlasticSubtitle5: "Está utilizando una bobina de un proveedor externo o no está utilizando una bobina."
    , NoPlasticSubtitle5P1: "Debe tener una bobina de buena calidad para que las impresiones salgan correctamente. De no ser así la impresora no podrá jalar el filamento y no va a poder sacar impresiones. Puede revisar si esto está siendo un problema al dejar uno a dos pies de filamento suelto y luego intentado imprimir. Si su Toybox empieza a funcionar significa que la impresora no es lo suficientemente fuerte para jalar la bobina."
    , NoPlasticSubtitle6: "¡He intentado los pasos previos y aun no sale nada de mi impresora!"
    , NoPlasticSubtitle6P1: "Lo más posible es que está teniendo un problema del hardware o un problema poco común. Por favor contáctenos a support@make.toys con la siguiente información para que podamos ayudarle personalmente a resolver su problema. De ser posible incluya un video de su Toybox imprimiendo ya que esto nos ayudará a identificar que está ocurriendo."
    , NoPlasticSubtitle6L1: "Al imprimir, si sostiene levemente el filamento al ingresar el extrusor, ¿puede sentirlo hacer clic?"
    , NoPlasticSubtitle6L2: "¿Está puesto el ventilador del extrusor? (Deberá poder oírlo ya que es bastante recio)"
    , NoPlasticSubtitle6L3:  "¿Estaba funcionando la impresora antes? ¿Ha cambiado algo desde la última vez que estaba funcionado?"
    , GrindingNoseTitle: "Mi impresora esta hacienda un ruido a la hora de imprimir."
    , GrindingNoseP1: "Revise primero que el cable de arriba no este metido adentro del aparato. En ocasiones metemos el cable dentro para poder facilitar el envío, pero puede impedir que la impresora encuentre su posición correcta. Por favor vea la siguiente imagen:"
    , GrindingNoseP2: "Si el cable esta afuera y libre significa que por alguna razón los botones que definen la posición de la impresora no se están activando. Por favor encuentre los botones (X,Y,Z), puede ver la siguiente imagen para darse una mejor idea. Al presionar esos botones debería oír un clic."
    , GrindingNoiseL1: "Desconecte su impresora para que este completamente apagada."
    , GrindingNoiseL2: "Asegúrese que no hay plástico atorado en la boquilla, de ser así remuévalo. Tenga cuidado de no quemarse, la boquilla se queda caliente por unos minutos después de estar apagada. Lo más recomendable es utilizar alguna pequeña herramienta como pinzas para quitar el plástico."
    , GrindingNoiseL3: "Mueva la cabeza del extrusor al centro."
    , GrindingNoiseL4: 'Mueva el extrusor levemente a la derecha con su mano. Asegúrese de escuchar un clic.'
    , GrindingNoiseL5: 'Mueva el extrusor a la parte trasera de su impresora, asegúrese de escuchar un clic.'
    , GrindingNoiseL6: 'Coloque su mano debajo de la cama de impresión, muévala hasta arriba y asegúrese de escuchar un clic. Si hay residuo de plástico en la boquilla por favor remuévalo o la cama no logrará llegar al botón.'
    , GrindingNoiseL7: 'Si alguno de los botones no hizo clic, déjelos a un lado por el momento y le compartiremos una solución más adelante.'
    , GrindingNoiseL8: 'Con mucho cuidado doble la parte de metal del botón como la foto de abajo. Esto le agregará longitud y le permitirá al extrusor alcanzar el botón. Tenga cuidado, si la parte de metal se rompe será más complicado solucionarlo.'
    , GrindingNoiseL9: 'Si esto esta pasando en Z axis, entonces trenda que volver a recalibrar la impresora. Por favor vea la sección de recalibración.'
    , ScrapesTitle: 'La boquilla de la impresora raspa la superficie de la impresora al imprimir.'
    , ScrapesP1: 'Esto ocurre porque el axis z (la cama de impresión) está calibrado demasiado cerca de la boquilla. Para arreglar esto debe utilizar una llave Allen (3/32” pulgadas o 2.5mm).'
    , ScrapesP2: 'Por favor localice el pequeño tornillo en la parte trasera de la superficie para imprimir. Vea la imagen de abajo como ejemplo.'
    , ScrapesP3: 'Este tornillo se asegura que la distancia entre la boquilla y la cama sea la adecuada cuando empiece la impresión. El truco es torcer el tornillo la cantidad adecuada, para que la primera capa que se imprima se repose perfectamente sobre la cama. Por el momento el tornillo es demasiado corto por lo que se debe aflojar para que alcance el botón antes. Con su llave Allen, desenrosque en contra del reloj para aflojarlo.'
    , ScrapesP4: 'Luego querrá hacer una impresión de prueba para asegurarse que imprima correctamente. Sea paciente, puede que tarde unos intentos antes de salir bien. Debe esperar a que la primera capa se vea algo como la siguiente foto:'
    , DamagedTitle: 'Mi aparato vino dañado.'
    , DamagedP1: 'Estas no son buenas noticias, por favor contáctenos de inmediato a support@make.toys para que podamos ayudarle. Dentro de su correo incluya una descripción del problema con fotos y videos de ser posible.'
    , PrintQualityTitle: 'Calidad de la impresión'
    , MissingLayersTitle: 'A mis impresiones les hacen falta capas o parece tener capas muy delgadas.'
    , MissingLayersP1: 'Esto usualmente ocurre por filamentos de mala calidad. Si está utilizando filamentos de un proveedor externo intente utilizar un rollo de filamento de Toybox para ver si soluciona el problema.'
    , MissingLayersP2: 'Otra posible causa es que el motor extrusor está teniendo dificultad desenrollando el filamento. Por favor asegúrese que la parte sólida del rollo está viendo hacia afuera. El rollo debería poder desenrollarse sin dificultad y debería sentirse flojo sobre el agarrador. Cualquier tipo de resistencia puede afectar la calidad de las impresiones, vea la imagen de abajo como ejemplo.'
    , WarpedLayersTitle:'Mis impresiones están saliendo distorsionadas.'
    , WarpedLayersP1: 'Esto puede ocurrir cuando impresiones, especialmente las más pequeñas, no tienen suficiente tiempo para enfriarse. También ocurre cuando se retira la impresión muy rápido. Es recomendable esperar de 30 segundos a 1 minuto antes de retirar la impresión.'
    , WarpedLayersP2: 'Para prevenir distorsiones, coloque un ventilador frente a la impresora mientras imprime.'
    , NoStickTitle: 'Mis impresiones no se adhieren a la superficie.'
    , NoStickP1: 'Esto pudiera estar ocurriendo porque la superficie de la impresión queda muy abajo de la boquilla. Si este es el caso, el plástico no está logrando adherirse por completo a la superficie y termina saturándose abajo de la boquilla.'
    , NoStickp2: 'Hay dos formas fáciles de solucionar esto:'
    , NoStickL1: 'Hay un pequeño tornillo detrás de la superficie de lado izquierdo. Con una llave Allen (de 3/32” pulgadas o 2.5mm) puede asegurar el tornillo dando 1⁄4 de una vuelta, esto debería permitir que la superficie imprima más cerca de la boquilla.'
    , NoStickL2: 'Otra alternativa es agregar tres o cuatro capas de masking tape a la superficie. Esto le agregará altura y permitirá que el plástico se adhiera a la cama.'
    , NoStickP3: 'Debe asegurarse que la primera capa que imprima quede bien, luego de eso deberían de salir bien sus impresiones. A continuación, puede ver un ejemplo:'
    , BlobbyTitle: 'Mis impresiones están saliendo mal y filamentosas.'
    , BlobbyP1: 'Primero asegúrese que la cama magnética flexible está en la impresora. Si no se encuentra dentro de la impresora la boquilla va a quedar muy lejos del plato para poder imprimir.'
    , BlobbyP2: 'Si su cama magnética se encuentra encima de la plataforma de metal puede que la cama este calibrada muy abajo. Para solucionar esto hay un pequeño tornillo detrás de la superficie de lado izquierdo. Con una llave Allen (de 3/32” pulgadas o 2.5mm) puede asegurar el tornillo dando 1⁄4 de una vuelta, esto debería permitir que la superficie imprima más cerca de la boquilla.'
    , BlobbyP3: 'Luego de ajustar la cama puede empezar a imprimir de nuevo, puede que requiera un par de intentos para que la impresión salga bien. Una vez salga bien la impresión ya no debería de tener que recalibrar la cama.'
    , BlobbyP4: 'Debe asegurarse que la primera capa que imprima quede bien, luego de eso deberían salir bien sus impresiones. A continuación, puede ver un ejemplo:'
    , ShiftingTitle: 'Mis impresiones parecen estar desplazadas.'
    , ShiftingP1: 'Esto seguramente ocurre porque algo esta previniendo que los motores en el plano XY se muevan adecuadamente. Usualmente ocurre porque algo está creando resistencia a el extrusor haciendo difícil que se desenrolle el filamento, revise sí:'
    , ShiftingSubtitle1: 'La bobina del filamento está enrollada.'
    , ShiftingSubtitle1P1: 'En ocasiones puede formarse un nudo en el rollo de filamento. Esto no permite que el filamento se desenrolle e ingrese a la impresora correctamente. Revise el rollo y asegúrese que no tenga un nudo y que puede fácilmente enrollar y desenrollar el filamento al jalar levemente del pedazo que sale del rollo.'
    , ShiftingSubtitle1P2: 'Si existe un nudo, retire el filamento de la impresora y deshaga el nudo. ¡La impresora debería estar lista para imprimir!'
    , ShiftingSubtitle2: 'La bobina del filamento está viendo hacia la dirección equivocada.'
    , ShiftingSubtitle2P1: "El filamento tiene una dirección apropiada a la que debe estar viendo al colocarlo detrás de su Toybox. En una dirección el filamento queda mucho más suelto que la otra. El filamento debe quedar lo más suelto posible para que la impresora pueda jalar el filamento con más facilidad."
    , ShiftingSubtitle2P2: "Para asegurarse que el filamento está lo más suelto posible, revise que el lado sólido del rollo está viendo hacia afuera. Vea la siguiente imagen como ejemplo:"
    , ShiftingSubtitle3:'Está utilizando una bobina de un proveedor externo o no está utilizando una bobina.'
    , ShiftingSubtitle3P1:'Debe tener una bobina de buena calidad para que las impresiones salgan correctamente. De no ser así la impresora no podrá jalar el filamento y no va a poder sacar impresiones. Puede revisar si esto está siendo un problema al dejar uno a dos pies de filamento suelto y luego intentado imprimir. Si su Toybox empieza a funcionar significa que la impresora no es lo suficientemente fuerte para jalar la bobina.'
    , SetupTitle: 'Configuración'
    , CannotConnectTitle: '¡Ayuda! no me puedo conectar con la red TOYBOX.'
    , CannotConnectP1: 'Poco después de conectarse a la red “TOYBOX”, una ventana con un portal debería aparecer en su dispositivo. Aquí, debe de escoger una red de wifi a donde conectarse. Si esto no ocurre, por favor siga los siguientes pasos:'
    , CannotConnectL1: 'En su dispositivo, conéctese a la red “TOYBOX”. Por favor espere a que la conexión con la red se establezca por completo y luego espere en su pantalla que aparezca el popup. Si está utilizando un IPhone o dispositivo Android es posible que al navegar fuera de la página del wifi no aparezca el popup. Este proceso puede tardar hasta dos minutos.'
    , CannotConnectL2: 'Si parece haberse conectado exitosamente a la red, pero no aparece el popup, en su navegador ingrese el siguiente URL (sin comillas): “toy.box”'
    , CannotConnectL3: ' Si continúa sin aparecer el popup, reinicie su Toybox desconectándolo y conectándolo de nuevo.'
    , CannotConnectL4: 'Debería de aparecerle una pantalla verde con indicaciones de como conectarse a su red de wifi.'
    , CannotConnectL5: 'Espere hasta dos minutos, si esto no funciona intente conectarse con un dispositivo diferente.'
    , CannotConnectL6: 'Una posible solución es “olvidar la red” en el dispositivo que este utilizando para conectarse con Toybox. Por favor busque instrucciones sobre como olvidar la red en su dispositivo.'
    , CannotConnectL7: 'Luego de olvidar la red, intente reconectarse con Toybox.'
    , CannotConnectL8: 'Si aun así está teniendo problemas conectándose a la red de Toybox, contacte a support@make.toys para que podamos guiarlo personalmente y ayudarlos en el proceso.'
    , NoHomeNetworkTitle: "Me puedo conectar a la red TOYBOX, pero no puedo encontrar mi propia red."
    , NoHomeNetworkP1: 'Hay distintas razones por lo que esto pudiera estar sucediendo, a continuación, una lista de procesos que ayudaran a corregirlo.'
    , NoHomeNetworkP2: 'Para que Toybox funcione, asegúrese que su router cumple con las siguientes especificaciones:'
    , NoHomeNetworkL1: 'Está en línea directa y a menos de 20 pies de la impresora.'
    , NoHomeNetworkL2: 'La red para conectarse está en la banda de 2.4 Ghz.'
    , NoHomeNetworkL3: 'El router no tiene una dirección IP estática (por defecto su router no debería tener esta configuración).'
    , NoHomeNetworkL4: ' Si aun esta teniendo problemas encontrando su red puede utilizar el hotspot de su teléfono móvil como alternativa.'
    , NoCodeTitle: 'Mi impresora no esta enseñando el código para vincularla con mi perfil.'
    , NoCodeP1: 'Si la página de Toybox está requiriendo un código de 6 dígitos para vincularla a su perfil, revisa la pantalla en su LCD. Si no ve un código de 6 dígitos desplegados en la pantalla lo puede conseguir siguiendo los siguientes pasos:'
    , NoCodeL1: 'En la pantalla LCD, haga clic en el ícono de herramientas del lado superior derecho.'
    , NoCodeL2: 'Haga clic en el botón de su cuenta y debería de desplegarse un código en su pantalla.'
    , NoCodeP2: 'Si la impresora se queda descargando mientras busca su código significa que la impresora esta teniendo problemas de conexión con el servidor. Esto usualmente ocurre por una señal débil de internet. Por favor asegúrese de tener una conexión constante y confiable a internet.'

    , StuckOnLoadingTitle: "La pantalla de la impresora se queda descargando."
    , StuckOnLoadingP1: 'Si la pantalla LCD de la impresora se queda descargando por un tiempo prolongado, es posible que su impresora no este conectada a internet. Por favor asegúrese que su impresora este a menos de 20 pies del router.'
    , StuckOnLoadingP2: "Si está conectada a una señal fuerte de internet y la pantalla sigue descargándose por más de 4 minutos, por favor mándenos un correo a través del siguiente vínculo:"
    , StuckOnloadingA1: 'aquí'
    , NoFindAppTitle: "No encuentro la aplicación móvil."
    , NoFindAppP1: 'Puede encontrar la aplicación de iOS'
    , NoFindAppA1: 'aquí'
    , NoFindAppP2: 'y la de Android'
    , NoFindAppA2: 'aquí'
    , NoFindAppP3: 'Si está buscando la aplicación en la App Store o Google Play Store ingrese “Toybox 3D Printer” y debería ser la primera aplicación que aparece. La aplicación es naranja y tiene a un Toybot como imagen.'
    , NoDesktopAppTitle: "No encuentro la aplicación en mi computadora."
    , NoDesktopAppP1: '¡Bienvenido al futuro! Puede controlar su impresora Toybox desde nuestra página web. Ahí puede escoger juguetes de nuestro '
    , NoDesktopAppP2: ' o irse al '
    , NoDesktopAppA2: 'creator space'
    , NoDesktopAppP3: ' para hacer su propio diseño. Solo asegúrese de estar ingresado a la cuenta que este vinculada con su impresora.'
    , NoDriversTitle: "No puedo encontrar los controladores de la impresora."
    , NoDriversP1: 'Como usted puede controlar la impresora desde la aplicación o página web, no hay necesidad de usar los controladores de la impresora'
    , MissingSomething: '¿Nos falta algo? Agrega una pregunta '
    , MissingSomethingA1: 'aquí'
    , OpenSourceMessage: 'Esta página es open source. Ayuda a tu comunida mejorando esta página '
    , OpenSourceA1: 'aquí'
  }
});

export default strings
