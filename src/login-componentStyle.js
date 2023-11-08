import { css } from "lit-element";

export default css `
body {
    background: linear-gradient(to right, #008f4c, #101a11);
}

.form {
    background: linear-gradient(to right, #F0F3F4 , #F0F3F4 );
    padding: 98px;
    border-radius: 20px;
}

.form-check-input {
    margin-right: 10px;
}

.input-group-text {
    background-color: #101a11;
    color: #ffffff;
}

.form-control::placeholder {
    color: #ffffff;
}

.form-control {
    background-color: #101a11;
    color: #ffffff;
}

.btn {
    background: linear-gradient(to right, #101a11, #0a0a0a);
    border-radius: 0 0 20px 20px;
    border: none;
}

/* Estilos para la imagen */
.image-container {
    position: relative;
}

.image-container img {
    position: relative;
    z-index: 1;
    margin-top: -8.5rem;
}

`