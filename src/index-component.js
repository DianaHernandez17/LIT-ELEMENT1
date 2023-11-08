import { LitElement, html, css, property } from "lit-element";
import stylesScss from './index-componentStyles';
import { renderPage } from './main.js';



export const usersData = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      campaña: "Campaña A",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "Gómez",
      campaña: "Campaña B",
    },
    // Agrega más objetos con datos de usuarios y sus respectivas campañas
  ];


export class Index extends LitElement {


  constructor() {
    super();
    this.numero = '';
    this.nombre = '';
  }

  static get styles() {
    return [stylesScss];
    
  }

  static get properties() {
    return {
      numero: { type: String },
      nombre: { type: String },
    };
  }

  buscarUsuarios() {
    const numero = this.numero;
    const nombre = this.nombre;

    // Filtra la lista de usuarios en función de los valores ingresados
    const usuariosFiltrados = usersData.filter(user => {
      return user.nombre.toLowerCase().includes(nombre.toLowerCase()) && user.campaña.toLowerCase().includes(numero.toLowerCase());
    });

    return usuariosFiltrados;
  }

  openNewUserForm() {
    const id = prompt("Ingrese el ID del usuario:");
    const nombre = prompt("Ingrese el Nombre del usuario:");
    const apellido = prompt("Ingrese el Apellido del usuario:");
    const campaña = prompt("Ingrese la Campaña del usuario:");
  
    if (id && nombre && apellido && campaña) {
      // Asegúrate de que los datos no sean nulos y luego agrega los datos a usersData.
      usersData.push({ id, nombre, apellido, campaña });
      // Puedes hacer algo adicional con los datos si es necesario.
  
      // Vuelve a renderizar para mostrar los nuevos datos en la lista.
      this.requestUpdate();
    }
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="d-flex ">
    <div class="pt-2 d-flex justify-content-left ">
        <div class="d-flex  flex-shrink-0 p-3 ml-5" style="width: 250px; background-color: rgb(201, 205, 207); border-radius: 1rem; height: 42.4rem; ">
            <hr>
            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                <li class="nav-item">
                    <button  @click="${() => renderPage('index')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Usuarios
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button  @click="${() => renderPage('index2')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Campañas
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button  @click="${() => renderPage('index3')} class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Equipos
                    </button>
                </li>
            </ul>
            <hr>
        </div>
    </div>
    &nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp
    <!-- cajas de texto-->
    <div class="pt-2  align-items-center">
        <div class="d-flex justify-content-left ">
            &nbsp&nbsp&nbsp
            &nbsp&nbsp&nbsp
            <div class="row d-flex">
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">2</div>
                    <div id="cajas2" class="col-md-5  pt-2">Usuarios Conectados</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">1</div>
                    <div id="cajas2" class="col-md-5  pt-2">Usuarios Ausentes</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">3</div>
                    <div id="cajas2" class="col-md-5  pt-2">Campañas Activas</div>
                </div>

                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">1</div>
                    <div id="cajas2" class="col-md-5  pt-2">Usuarios Llamados</div>
                </div>
            </div>
        </div>
        <br>

        <div id="cuadro" class="container border border-dark">
            <div class="d-flex p-3" >
                <div class=" border border-dark" style="width: 14rem; height: 33.3rem; border-radius: 1rem;">
                    <div>
                        <div class="d-flex  flex-shrink-0 p-3" style="width: 222px; background-color: #8ebc99; border-top-left-radius: 1rem; border-top-right-radius: 1rem; height: 166px; ">
                            <hr>
                            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                                <div class="input-group mt-1" style="width: 12rem;">
                                    <input class="form-control font-weight-bold" type="text" placeholder="Número">
                                </div>
                                <div class="input-group mt-3" style="width: 12rem;">
                                    <input class="form-control font-weight-bold" type="text" placeholder="Nombre">
                                </div>
                                    <div class="d-flex justify-content-center">
                                        <button @click="${this.buscarUsuarios}" class="mt-2 text-center" style=" width: 5rem; border-radius: 5px; border: #101a11; background-color: #101a11; color: white;">BUSCAR</button>
                                </div>
                            </ul>
                            <hr>
                        </div>
                        &nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp


                        <div class="d-flex flex-shrink-0 p-3" style="width: 222px; background-color: #8ebc99; border-top-left-radius: 1rem; border-top-right-radius: 1rem; height: 179px;">
                             <hr>
                            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                        <!-- Lista de usuarios con ID, Nombre y Celular -->
                        <ul class="list-group" id="userList" style="width: 12rem;">
                        <li class="list-group-item">
                            <div>ID: 1</div>
                            <div>Nombre: Juan</div>
                            <div>Número: 304567049</div>
                            <div>
                            &nbsp&nbsp&nbsp&nbsp&nbsp
                            <div>
                            &nbsp&nbsp&nbsp&nbsp&nbsp
                            <button onclick="alert('Llamando...');" class="btn btn-primary">Llámame</button>
                        </div>

                                        </ul>
                                        <hr>
                                    </div>

                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-around ">
                        <div class=" ml-5">
                            <div class="row g-0 text-center pt-1 ">
                                <div class="col-sm-6 col-md-4 pt-2 border border-secondary font-weight-bold" style="width: 545px; font-size: 18px; height: 50px; border-radius: 8px;">Filtrar Campañas</div>
                                
                            </div>       
                        </div>
                    
                        <div class="d-flex justify-content-right ml-5">
                            <button @click="${this.openNewUserForm}" class="mt-1 text-center" style="width: 5rem; height: 40px; border-radius: 5px; border: #101a11; background-color: #101a11; color: white;">NUEVO</button>

                        </div>
                    </div>
                    

                    <div class="container border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 38rem; height: 28.5rem;">
                    &nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp
                    <ul class="list-group">
                    ${this.buscarUsuarios().map((user) => html`
                      <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                          <div>
                            <span>ID: ${user.id}</span><br>
                            <span>Nombre: ${user.nombre}</span><br>
                            <span>Apellido: ${user.apellido}</span><br>
                          </div>
                          <div>
                            <span>Campaña: ${user.campaña}</span>
                        
                          </div>
                        </div>
                      </li>
                    `)}
                  </ul>
                        </div>
                </div>
                
            </div>
            
        </div> 
    </div>   
</div>    
    `;
  }
}

customElements.define("index-component", Index);
