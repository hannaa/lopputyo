here-map-polymer
=================

Web Component for HERE Maps using Polymer

Usage
-----

    $ bower install keinkonzept/here-map-polymer

    $ cat index.html 
    <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
        <link rel="import" href="bower_components/here-map-polymer/elements/here-map.html">
        <title>HERE Maps Polymer Webcomponent Showcase</title>
      </head>
      <body>
        <here-map app_id="DemoAppId01082013GAL" app_code="AJKnXv84fjrb0KIHawS0Tg" map_layout="fixedHeight" height="600">
        </here-map>
      </body>
    </html>