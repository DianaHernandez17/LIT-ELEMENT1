import './index-component'; // Importa tu componente Index
import './index-2-component'; // Importa tu componente Index2
import './login-component'; // Importa tu componente Login
import './index-3-component';// Importa tu componente Index3

const appContainer = document.getElementById('app');

export const UserService = {
  usuariosRegistrados: [],
  campañas: [], // Este arreglo almacenará las campañas
};

// Mover la lógica de carga de datos a esta función
// Funcion de usuarios
function loadUsersFromLocalStorage() {
  const data = localStorage.getItem('users');
  UserService.usuariosRegistrados = data ? JSON.parse(data) : [];
}


// Cargan los datos del usuario al reiniciar la aplicacion
loadUsersFromLocalStorage(); 


export function renderPage(pageName) {
  switch (pageName) {
    case 'index':
      appContainer.innerHTML = '<index-component></index-component>';
      break;
    case 'index2':
      appContainer.innerHTML = '<index-2-component></index-2-component>';
      break;
      case 'index3':
      appContainer.innerHTML = '<index-3-component></index-3-component>';
      break;
    case 'login':
      appContainer.innerHTML = '<login-component></login-component>';
      break;
    default:
      // Página no encontrada o página de inicio por defecto
      appContainer.innerHTML = '<login-component></login-component>';
  }
}

// Llama a renderPage con la página de inicio por defecto al cargar la aplicación
renderPage('login');
