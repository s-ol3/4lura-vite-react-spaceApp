import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import Cargando from "./components/Cargando"

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

  const [consulta, setConsulta] = useState('')
  const [fotosDeGaleria, setFotosDeGaleria] = useState([])
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

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


  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/fotos');
      const data = await res.json();
      setFotosDeGaleria([...data]);
      /* Si nosotros venimos ahora, a nuestra aplicación, y vemos a nuestra consola. Acá vamos a limpiar, nuevamente. Vamos a decirle que se cargue. Y vean que acá están. Están los 10 registros de las 10 fotos. Aún no ha cambiado la foto. Aún no ha cambiado la imagen de loading. ¿Por qué? Porque no le hemos asignado los datos al estado. Entonces, el estado de fotos de galería, sigue estando vacío. ¿Dónde hacemos eso? Aquí. Aquí le decimos. Ok. Set, con la función que coloca valor al estado, setFotosDeGalería. Por favor, coloca. Vamos a llamarla. Vamos a llamar esto data. Ok. Data. Perfecto. Guardamos. ¿Y ahora qué va a pasar? Oh, que aparecieron las fotos. Aparecieron las fotos ya. Perfecto. Dos detalles más. Primero, vamos a, siempre cuando hagamos asignación, vamos a garantizar que va a ser un nuevo estado para que se redibuje. ¿Por qué? Porque yo debo siempre que ese arreglo se regenere. Entonces yo le digo acá. Por favor, esto va a ser un nuevo arreglo que va a copiar los datos a través del Sprite Operator de ese otro arreglo. Entonces lo hacemos así. No va a haber cambios acá. No va a haber cambios acá. Pero es la forma, digamos, la buena práctica */
      
    }

    setTimeout(() => getData(), 5000); /* Y para finalizar, vamos a simularnos que nuestra aplicación tarda un poquito en cargar los datos. Porque aquí es instantáneo. Estamos en la máquina. ¿Cómo podemos simular ello? Vamos a hacer uso del SetTimeout. ¿Sí? Y acá le decimos, por favor, espera tantos segundos. Vamos a decirle unos 5 segundos, que serían 5000 milisegundos, para traer los datos. Por favor, vean acá. Venimos a la aplicación. Vamos a ejecutarla nuevamente. Sale, se dan los datos. Perdonen la imagen. Está un poquito fea, pero no consigo una imagen mejor. Espero que ustedes usen una mejor imagen. Vean de qué funcionó. Consumimos los datos y realizamos la simulación de la API. Entonces, ya tenemos al UseEffect bien definido, bien conocido y hasta bien usado */
  }, [])

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera setConsulta={setConsulta} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
              {
                fotosDeGaleria.length == 0 ?
                  <Cargando></Cargando> :
                  <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                    fotos={fotosDeGaleria}
                    alAlternarFavorito={alAlternarFavorito}
                    consulta={consulta} />
              }
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
        <Pie />
      </FondoGradiente>
    </>
  )
}

export default App
