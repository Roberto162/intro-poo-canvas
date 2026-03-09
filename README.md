# 🎨 Canvas 2D con Programación Orientada a Objetos

Aplicación web desarrollada con **HTML5 Canvas, JavaScript y Bootstrap**, que demuestra el uso de **Programación Orientada a Objetos (OOP)** para la creación y renderizado de objetos gráficos en 2D.

El proyecto muestra cómo generar y manipular **círculos dinámicos dentro de un canvas**, incluyendo posiciones aleatorias, múltiples instancias y estilos visuales personalizados.

---

## 📌 Descripción

Esta aplicación presenta tres ejemplos principales del uso de **Canvas 2D en JavaScript**:

### 1. Objeto 2D básico
Se crea un círculo utilizando una clase en JavaScript y se dibuja en el centro del canvas utilizando el método `draw()`.

### 2. Objeto con posición aleatoria
Se genera un círculo con posición y radio aleatorios, asegurando que el objeto no se salga de los límites del canvas.

### 3. Múltiples objetos
Se generan varios círculos dinámicamente donde cada uno tiene:
- posición aleatoria
- radio aleatorio
- colores aleatorios

Los objetos se almacenan dentro de un **arreglo de círculos**.

---

## 🧠 Conceptos utilizados

- HTML5 Canvas
- JavaScript
- Programación Orientada a Objetos (OOP)
- Clases y constructores
- Métodos de renderizado
- Uso de arreglos de objetos
- Generación de valores aleatorios (`Math.random`)
- Manipulación del contexto `CanvasRenderingContext2D`
- Diseño responsivo con **Bootstrap**

---


## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Canvas API

---

## 🚀 Funcionamiento

El programa utiliza una **clase llamada `Circle`**, la cual define:

- posición X
- posición Y
- radio
- color del borde
- color de fondo
- texto interno

Cada objeto puede dibujarse utilizando el método:

```javascript
draw(context)
Este método se encarga de:

- Dibujar el círculo

- Dibujar el borde

- Colocar el texto centrado dentro del objeto


🎲 Generación de elementos aleatorios

Para generar variaciones visuales se utiliza:

Math.random()

Esto permite generar:

- posiciones aleatorias

- radios diferentes

- colores RGB aleatorios

Además se implementa una restricción para que los círculos no se salgan del canvas, considerando su radio al calcular la posición.

🎨 Interfaz

La interfaz utiliza Bootstrap para lograr:

- diseño limpio

- tarjetas visuales para cada canvas

- sombras y efectos hover

- estructura moderna con header y footer

👨‍💻 Autor

Jesús Roberto Hernández Benítez

Proyecto académico desarrollado para demostrar el uso de Canvas 2D y Programación Orientada a Objetos en JavaScript.

© 2026