import { usersData } from "./index-component";

function llamame(id) {
    // Encuentra el usuario con el ID correspondiente en usersData
    const usuario = usersData.find((user) => user.id === id);

    if (usuario) {
        // Muestra una alerta con el número que se está llamando
        alert(`Llamando a ${usuario.nombre} ${usuario.apellido}, Número: ${usuario.campaña}`);

        // Simula una llamada real durante unos segundos (por ejemplo, 3 segundos)
        setTimeout(() => {
            alert("Llamada terminada");
        }, 3000);
    }
}
