/* import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"

const GaleriaContainer = styled.div`
display: flex;

`

const SeccionFluida = styled.section`
flex-grow: 1;
`



const Galeria = ({fotos= []}) => {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    {fotos.map(foto=>{
                        return <p key={foto.id}>{foto.path}</p>
                    })}
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria */

import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], alSeleccionarFoto }) => {

    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                        alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria