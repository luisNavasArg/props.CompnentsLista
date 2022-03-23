function Boton(props) {
   return (<button onClick={() => props.cambiar(props.value)}>
     {props.value}
   </button>)
 }
 export default Boton