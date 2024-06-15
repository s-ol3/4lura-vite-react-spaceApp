import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    const { setConsulta } = useContext(GlobalContext);

    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto setConsulta={setConsulta} />
    </HeaderEstilizado>
}

/* en 'haga lo que hicimos esta un poco diferente   https://app.aluracursos.com/course/hooks-reactjs-conociendo-potencial-utilidad/task/88205
const Cabecera = () => {
    const { setConsulta } = useContext(GlobalContext);
  
    return (              parentesis para bajar la primer etiqueta y quede mas prolijo?, si no pongo la app sigue andando pero queda como apagada la etiqueta y contenido, no se
      <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto setConsulta={setConsulta} />
      </HeaderEstilizado>
    );
  };' */

export default Cabecera