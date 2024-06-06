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

              <Galeria fotos={fotosDeGaleria} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
