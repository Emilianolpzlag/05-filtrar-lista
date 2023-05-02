
function ListView({elements, funcfilterItems}){// Este sera mi componente que presente los datos
  return(
    <div>
      <input type="text" onChange={e => {
        console.log(e)
        funcfilterItems(e.target.value)
        }}/>
      <ul>
      {
       elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
      }
      </ul>
    </div>
  );
}
export default ListView;