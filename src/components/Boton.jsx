function Boton(props) {
   return (<button style={{backgroundColor:props.value}} onClick={() => props.cambiar(props.value)}>
     {props.value}
   </button>)
 }
 export default Boton