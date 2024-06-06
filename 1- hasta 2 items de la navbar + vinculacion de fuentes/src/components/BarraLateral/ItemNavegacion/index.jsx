import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    font-size:24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap:16px;
// '' si el ítem estilizado está activo va a tener un color y si está inactivo, si el valor es false va a tener otro color de fuente.'' 
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
`

//CREA UN COMPONENTE PARA TODOS LOS ITEMS DE LA NAV
// ''Entonces, aquí lo que vamos a hacer es si activo y aquí vamos a poner el signo de interrogación para declarar el operador ternario. Entonces, vamos a pasar iconoActivo dos puntos iconoInactivo. Entonces, si es verdadero, vamos a pasar el iconoActivo y si es falso, vamos a pasar el iconoInactivo. Y en alt lo dejamos por defecto "icono", vamos a poner ahí para que tenga algún alt.''
const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
    return <ItemListaEstilizado $activo={activo}>
        <img src={activo ? iconoActivo : iconoInactivo} />
        {children}
    </ItemListaEstilizado>
}


export default ItemNavegacion