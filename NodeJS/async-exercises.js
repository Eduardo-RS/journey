/*

¡Claro! Aquí tienes una serie de ejercicios para que puedas practicar y fortalecer tus conocimientos sobre operaciones **asíncronas** en Node.js, especialmente usando **promesas** y las palabras clave `async`/`await`.

### Ejercicio 1: Escribir en un archivo (Operación asíncrona básica)

**Objetivo**: Escribir un mensaje en un archivo utilizando `writeFile` de `fs/promises`.

**Instrucciones**:
1. Crea un archivo llamado `writeMessage.js`.
2. Usa `fs.promises.writeFile` para escribir el texto `"¡Hola, Node.js!"` en un archivo llamado `message.txt`.
3. Asegúrate de que el código espere a que el archivo se haya escrito correctamente antes de terminar.

**Pistas**:
- Usa `await` dentro de una función `async`.
- Si el archivo se escribe correctamente, muestra un mensaje en la consola como `"El archivo ha sido escrito correctamente."`.

---

### Ejercicio 2: Leer un archivo (Operación asíncrona básica)

**Objetivo**: Leer el contenido de un archivo utilizando `readFile` de `fs/promises`.

**Instrucciones**:
1. Crea un archivo llamado `readMessage.js`.
2. Primero, crea un archivo `message.txt` (puedes usar el archivo del ejercicio anterior).
3. Usa `fs.promises.readFile` para leer el contenido de `message.txt` de forma asíncrona.
4. Imprime el contenido del archivo en la consola.
5. Si ocurre un error (por ejemplo, si el archivo no existe), maneja el error con un bloque `try/catch`.

**Pistas**:
- Asegúrate de que el archivo esté codificado como texto (`utf8`) al leerlo.
- Usa un bloque `try/catch` para capturar cualquier error.

---

### Ejercicio 3: Usar `setTimeout` con `Promise`

**Objetivo**: Crear una función asíncrona con un temporizador.

**Instrucciones**:
1. Crea una función llamada `delayedMessage` que devuelva una promesa.
2. La promesa debe resolverse después de 2 segundos con el mensaje `"Mensaje retrasado después de 2 segundos"`.
3. Llama a la función `delayedMessage` y usa `await` para esperar la promesa.
4. Muestra el mensaje en la consola después de que la promesa se resuelva.

**Pistas**:
- Usa `setTimeout` dentro de la promesa para simular un retraso de 2 segundos.
- Utiliza `await` para esperar que la promesa se resuelva antes de continuar.

---

### Ejercicio 4: Leer y escribir de forma encadenada (Promesas encadenadas)

**Objetivo**: Leer un archivo y escribir en otro archivo con el contenido leído.

**Instrucciones**:
1. Crea un archivo llamado `copyMessage.js`.
2. Primero, usa `fs.promises.readFile` para leer el contenido de un archivo `source.txt` (puedes escribir cualquier mensaje en él).
3. Luego, usa `fs.promises.writeFile` para escribir el contenido leído en un nuevo archivo llamado `destination.txt`.
4. Asegúrate de que ambas operaciones se realicen de manera encadenada, es decir, que la escritura ocurra solo después de que se haya leído el archivo.

**Pistas**:
- Usa encadenamiento de promesas con `.then()` o `async/await` para controlar el flujo.
- Asegúrate de que `source.txt` exista antes de intentar leerlo.

---

### Ejercicio 5: Manejar múltiples operaciones asíncronas (Uso de `Promise.all`)

**Objetivo**: Ejecutar múltiples operaciones asíncronas al mismo tiempo.

**Instrucciones**:
1. Crea tres archivos de texto: `file1.txt`, `file2.txt` y `file3.txt`, y escribe algo de contenido en cada uno.
2. Crea una función que lea el contenido de estos tres archivos **al mismo tiempo** usando `Promise.all`.
3. Imprime el contenido de los tres archivos en la consola una vez que todas las promesas se hayan resuelto.

**Pistas**:
- Usa `Promise.all` para esperar a que todas las promesas de lectura se resuelvan.
- Puedes utilizar `await` dentro de una función `async` para esperar que todas las promesas se resuelvan.

---

### Ejercicio 6: Manejo de errores con `try/catch` en funciones `async`

**Objetivo**: Manejar errores en funciones `async` usando `try/catch`.

**Instrucciones**:
1. Crea una función asíncrona que intente leer un archivo que no existe.
2. Usa un bloque `try/catch` para manejar el error.
3. Si ocurre un error (como que el archivo no exista), imprime un mensaje de error en la consola.

**Pistas**:
- Usa `fs.promises.readFile` para leer un archivo que sabes que no existe (por ejemplo, `nonExistentFile.txt`).
- Usa `try/catch` para capturar y manejar el error de manera adecuada.

---

### Ejercicio 7: Función `delay` (Promesa con `setTimeout`)

**Objetivo**: Crear una función `delay` que retorne una promesa con un retraso.

**Instrucciones**:
1. Crea una función llamada `delay` que reciba un número de milisegundos y devuelva una promesa que se resuelva después de ese tiempo.
2. Usa `setTimeout` dentro de la promesa para crear el retraso.
3. Llama a esta función dentro de una función `async`, usa `await` y muestra un mensaje en la consola después de esperar un retraso.

**Pistas**:
- La función `delay` debería usar `setTimeout` para retrasar la resolución de la promesa.
- Luego, puedes usar `await` para esperar a que la promesa se resuelva.

---

### Ejercicio 8: Simulación de una operación de red

**Objetivo**: Crear una función asíncrona que simule una operación de red.

**Instrucciones**:
1. Crea una función llamada `fetchData` que simule una operación de red.
2. La función debería devolver una promesa que se resuelva después de 3 segundos con el mensaje `"Datos obtenidos"`.
3. Usa `async/await` para esperar que los "datos" se obtengan antes de mostrar el mensaje en la consola.

**Pistas**:
- Usa `setTimeout` para simular la latencia de la red (similar a un retraso).
- Asegúrate de que el mensaje solo se imprima después de esperar el tiempo adecuado.

---

### Ejercicio 9: Promesas con `then` y `catch`

**Objetivo**: Usar `then` y `catch` para manejar promesas.

**Instrucciones**:
1. Crea una función que devuelva una promesa. La promesa debe resolverse después de 1 segundo con el mensaje `"Promesa resuelta"`, o debe ser rechazada si hay algún error.
2. Usa `then` para manejar la resolución de la promesa.
3. Usa `catch` para manejar cualquier error que ocurra (puedes simular un error dentro de la promesa).

**Pistas**:
- Recuerda que `then` se ejecuta cuando la promesa se resuelve, y `catch` cuando se rechaza.

---

### Ejercicio 10: Simular múltiples operaciones con `async/await`

**Objetivo**: Simular múltiples tareas asíncronas que se deben completar en secuencia.

**Instrucciones**:
1. Crea tres funciones asíncronas que simulen tareas. Por ejemplo:
   - `task1()` debe esperar 2 segundos y devolver `"Tarea 1 completada"`.
   - `task2()` debe esperar 3 segundos y devolver `"Tarea 2 completada"`.
   - `task3()` debe esperar 1 segundo y devolver `"Tarea 3 completada"`.
2. Usa `async/await` para ejecutar las tareas en el orden correcto y luego imprime los resultados de todas las tareas una vez completadas.

**Pistas**:
- Usa `await` para asegurar que las tareas se ejecuten en orden.

---

### Siguientes Pasos

- **Revisión de resultados**: Intenta realizar estos ejercicios y verifica que los resultados sean los esperados.
- **Desafíos adicionales**: Si los ejercicios anteriores se vuelven sencillos, intenta realizar versiones más complejas de los mismos (por ejemplo, leyendo y escribiendo en varios archivos simultáneamente).
  
Estos ejercicios te ayudarán a familiarizarte con el uso de promesas y `async/await` en Node.js y a comprender cómo manejar operaciones asíncronas de manera más eficiente. ¡Ánimo y disfruta del aprendizaje!

*/