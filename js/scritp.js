 function obtenerDatos() {
            let n1 = parseFloat(document.getElementById("num1").value);
            let n2 = parseFloat(document.getElementById("num2").value);

            return { n1, n2 };
        }

        function sumar() {
            let { n1, n2 } = obtenerDatos();
            document.getElementById("resultado").innerText = n1 + n2;
        }

        function restar() {
            let { n1, n2 } = obtenerDatos();
            document.getElementById("resultado").innerText = n1 - n2;
        }

        function multiplicar() {
            let { n1, n2 } = obtenerDatos();
            document.getElementById("resultado").innerText = n1 * n2;
        }

        function dividir() {
            let { n1, n2 } = obtenerDatos();

            if (n2 === 0) {
                document.getElementById("resultado").innerText = "Error";
            } else {
                document.getElementById("resultado").innerText = n1 / n2;
            }
        }