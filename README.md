# QxMaterial
Application of Material Design to qooxdoo Framework

## How to use
1. Create a new qooxdoo Application (http://manual.qooxdoo.org/current/pages/desktop/tutorials/tutorial-part-1.html#getting-started).
2. Add the path to the QxMaterial Manifast.json to the config.json of the new Application in the "jobs" section:
```json
"jobs": {
    "libraries": {
        "library": [
            {
                "manifest": "./vendor/Estandarte/QxMaterial/Manifest.json"
            }
        ]
    }
}
```
3. Add Google MDL script/css to the index.html:
```html
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.indigo-pink.min.css">
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
4. Use QxMaterial components.
