Descargar el proyecto y clonarlo por https o ssh

Si se descarga por https hacer git clone https://github.com/davidg327/millionCrypto.git en el lugar que se desea descargar Si se descarga por ssh hacer git clone git@github.com:davidg327/millionCrypto.git en el lugar que se desea descargar

Una vez descargado instalar los node modules con npm Ejecutar npm install si se quiere probar en ios hacer cd ios && pod install

Una vez ya instalado los node modules, ejecutar en una terminal npm start y luego en otra react-native run-android para abrir en android y en otra si se quiere abrir en ios react-native run-io.

Para compilar el proyecto en android como apk cd android && ./gradlew clean && ./gradlew assembleRelase

Uso de arquitectura modular y la metodología del modelo atómico, con el fin de dejar componentes reutilizables.

Uso de Asynstorage para guardar en el storage las criptomonedas favoritas.

Uso de Zustand para el manejo de estados globales.

Uso de axios para la peticiones

