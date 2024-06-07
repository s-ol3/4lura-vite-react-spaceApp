import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono"

const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
//esta foto es un objeto, cada objeto del fotos.json f
const ModalZoom = ({ foto }) => {

    return <>
        {foto && <>         {/* , si recibo una fotografía, esto se va a mostrar  < LO DE ''HTML''>, si no, no se va a mostrar nada directamente porque no recibo ningún tipo de foto. */}
            <Overlay />
            {/* codigo desde mozilla + '' Vamos a volver al index y vamos a hacer un truco técnico. Como open funciona con true o false y si recibimos una foto o enviamos una foto, vamos a enviar un objeto. Vamos a convertir este objeto, que puede ser nulo o puede ser un objeto en sí, lo vamos a convertir a un valor booleano. Vamos a escribir un operador not, otro operador not y vamos a pasarle la foto. Entonces estamos negando dos veces la foto. Si negamos una vez va a ser false, si lo negamos otra vez va a ser true y viceversa. Si recibimos algo por aquí lo transformamos en true o si no recibimos un nulo lo transformamos en false. Este es un pequeño recurso para convertir algún dato o un objeto, en este caso en un valor booleano, porque es lo que necesitamos pasarle a este atributo open'' */}
            <DialogEstilizado open={!!foto}>
                <Imagen foto={foto} expandida={true} />   {/*  Imagen por defecto recibe una propiedad que es expandida, que la tiene definida en false. Aquí la vamos a definir en true, porque es justamente lo que queremos, expandir nuestra imagen. Entonces, vamos a poner ahí y vamos a pasarle true. Y además recibe una foto, si no, no va a saber qué imagen tiene que renderizar. Entonces, vamos a ponerlo aquí delante y vamos a pasarle justamente la foto. Entonces le pasamos la foto, guardamos y veamos cómo queda. */}
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom