import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
//TRAE EL BANNER IMG DESDE ASSETS, LO INCLUYE ABAJO EN EL 'HTML' {}, banner se puede llamar como quieras, no es 'Banner' el componente, llamar abajo igual
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null) /* 'useState(foto[0])' abre la pagina con esa foto modal abierto..... ' vamos a volver a setear en null nuestra fotoSeleccionada, porque no queremos que se abra al principio.' */
  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

    return (
      <>
        <FondoGradiente>
          <GlobalStyles />
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria>
                {/* TRAE EL BANNER IMG DESDE ASSETS, LO INCLUYE ABAJO EN EL 'HTML' {}  banner se puede llamar como quieras, no es 'Banner' el componente*/}
                <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
                {/* ' ¿Quién maneja el tema de las fotos? ¿Quién maneja el mostrar las fotos y demás? La galería. Entonces la galería puede tener un prop, un evento, un elemento que controle eso. Al seleccionar la foto podemos mostrarla, de alguna manera llevarla a este diálogo. Entonces vamos a poner aquí una prop alSeleccionarFoto y le vamos a pasar una función --alSeleccionarFoto={foto =>--. Vamos a llamar foto y aquí vamos a pasarle setFotoSeleccionada y le vamos a mandar la foto que estamos obteniendo.' */}

                {/* control click sobre Galeria, te lleva al index galeria */}
                <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito} />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>

          {/* llamo al modal abajo de todo....angular */}
          <ModalZoom foto={fotoSeleccionada}
            alCerrar={() => setFotoSeleccionada(null)}
            alAlternarFavorito={alAlternarFavorito} />

        </FondoGradiente>
      </>
    )
  }

  export default App
