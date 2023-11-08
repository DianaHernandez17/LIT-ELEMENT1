import { LitElement, html, css, property } from "lit-element";
import stylesScss from './index-componentStyles';
import { renderPage } from './main.js';


export const usersData = [
    {
      
      nombre: "Julian",
      empresa: "Claro",
      equipo: "Campaña A",
      inicia: "Lunes",
      termina: "Jueves",
    },
    {
     
        nombre: "Juli",
        empresa: "movistar",
        equipo: "Campaña A",
        inicia: "Martes",
        termina: "Sabado",
    },
    // Agrega más objetos con datos de usuarios y sus respectivas campañas
  ];


export class Index2 extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [stylesScss];
  }

  buscarUsuarios() {
    if (this.nombre) {
      const nombre = this.nombre.toLowerCase();
  
      // Filtra la lista de usuarios en función del nombre ingresado
      const usuariosFiltrados = usersData.filter((user) => {
        return user.nombre.toLowerCase().includes(nombre);
      });
  
      return usuariosFiltrados;
    }
    // Devuelve una lista vacía si this.nombre no está definido
    return [];
  }
  

  openNewUserForm() {
    const nombre = prompt("Ingrese el Nombre del usuario:");
    const empresa = prompt("Ingrese la empresa:");
    const equipo = prompt("Ingrese el equipo que se encuentra:");
    const inicia = prompt("Ingrese cuando quiere que inicie:");
    const termina = prompt("Ingrese cuando quiere que termine:");

    if (nombre && empresa && equipo && inicia && termina) {
      // Asegúrate de que los datos no sean nulos y luego agrega los datos a usersData.
      usersData.push({ nombre, empresa, equipo, inicia, termina });
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
        <div class="d-flex  flex-shrink-0 p-3 ml-5" style="width: 250px; background-color: rgb(201, 205, 207); border-radius: 1rem; height: 42.4rem;">
            <hr>
            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                <li class="nav-item">
                    <button  @click="${() => renderPage('index')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Usuarios
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button  @click="${() => renderPage('index2')}" @click="${() => renderPage('index')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Campañas
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
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
                    <div id="cajas" class="col-sm-6 col-md-4">10m</div>
                    <div id="cajas2" class="col-md-5  pt-2">Tiempo llamadas</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">10m</div>
                    <div id="cajas2" class="col-md-5  pt-2">Tiempo llamada actual</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajasi2" class="col-sm-6 col-md-7">Campaña 1</div>
                    <div id="cajas2" class="col-md-5  pt-2">Campañas Activas</div>
                </div>
            </div>
        </div>
        <br>

        <div id="cuadro" class="container border border-dark">
            <div class="d-flex p-3" >
                <div class=" border border-dark" style="width: 14rem; height: 33.3rem; border-radius: 1rem;">
                    <div>
                        <div class="d-flex  flex-shrink-0 p-3" style="width: 222px; background-color: #8ebc99; border-top-left-radius: 1rem; border-top-right-radius: 1rem; border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem; height: 33.1rem; ">
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-around ">
                        <div class=" ml-5">
                            <div class="row g-0 text-center pt-1 ">
                               
                            </div>       
                        </div>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <div class="d-flex justify-content-right ml-5">
                        <button @click="${this.openNewUserForm}" class="mt-1 text-center" style="width: 5rem; height: 40px; border-radius: 5px; border: #101a11; background-color: #101a11; color: white;">NUEVO</button>

                    </div>

                        </div>
                    </div>
                 
                    <div class="container border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 40rem; height: 26.5rem;">

                    <button @click="${this.activarLista}" class="btn btn-success mr-3">Activar</button>
                    <button @click="${this.desactivarLista}" class="btn btn-danger">Desactivar</button>

                    
                    &nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp
                    <ul class="list-group">
                    ${this.buscarUsuarios().map((user) => html`
                      <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                          <div>
                           
                            <span>Nombre: ${user.nombre}</span><br>
                            <span>Empresa: ${user.empresa}</span><br>
                            <span>Equipo: ${user.equipo}</span><br>
                            <span>Inicia: ${user.inicia}</span><br>
                            <span>Termina: ${user.termina}</span><br>
                          </div>
                          <div>
                            
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
            
        </div> 
    </div>   
</div>    
    `;
  }
}

customElements.define("index-2-component", Index2);
