$ latino-Ace

**Modo de resaltado de sintaxis para el lenguaje Latino en Ace Editor.**

## Descripción

Este repositorio proporciona las reglas necesarias para que el editor de código [Ace Editor](https://ace.c9.io/) reconozca y resalte correctamente la sintaxis del lenguaje de programación [Latino](https://lenguaje-latino.org/).

---

## Instalación

1. **Clona o descarga este repositorio:**

   ```bash
   git clone https://github.com/packarazy/latino-ace.git
   ```

2. **Incluye Ace Editor y los archivos del modo Latino en tu proyecto:**
   
   Descarga Ace Editor desde [aquí](https://ace.c9.io/#nav=download) o usa un CDN.
   
   Coloca los archivos `Ace/mode-latino.js` y `Ace/latino_highlight_rules.js` en la misma carpeta donde tienes Ace o ajusta las rutas según tu estructura de carpetas.

---

## Uso

Crea un archivo HTML como el siguiente para probar el modo Latino en Ace:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Prueba Ace Latino</title>
  <style>
    #editor { 
      position: absolute;
      top: 40px; left: 0; right: 0; bottom: 0;
      font-size: 18px;
      min-height: 300px;
    }
    body { margin: 0; }
  </style>
</head>
<body>
  <h2>Editor Ace con modo Latino</h2>
  <div id="editor">// Escribe código Latino aquí</div>

  <!-- Incluye Ace Editor -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.3/ace.js"></script>
  <!-- Incluye el modo Latino y las reglas -->
  <script src="Ace/latino_highlight_rules.js"></script>
  <script src="Ace/mode-latino.js"></script>
  <script>
    var editor = ace.edit("editor");
    editor.session.setMode("ace/mode/latino");
    editor.setTheme("ace/theme/monokai"); // Opcional
    editor.setValue('si cierto {\n  imprimir("¡Hola Latino!");\n}');
  </script>
</body>
</html>
```

**Asegúrate de que las rutas a los archivos JS coincidan con tu estructura de carpetas.**

---
## Código latino de nuestra
```latino
escribir("Entre un alfabeto:")
alfa=leer()
vocales=["a","A","e","E","i","I","o","O","u","U"]    //Declaración de vocales

resp = alfa..", NO es una vocal"

desde (i=0; i < lista.longitud(vocales); i++)
   si (alfa==vocales[i])
      resp = alfa..", SI es una vocal"
   fin
fin

escribir (resp)
```

---

## Personalización

- Cambia el tema del editor con `editor.setTheme("ace/theme/TU_TEMA")`.

---

## Créditos

- [Lenguaje Latino](https://lenguaje-latino.org/)
- [Ace Editor](https://ace.c9.io/)
- Resaltado y adaptación: [packarazy](https://github.com/packarazy)

---

## Licencia



---

