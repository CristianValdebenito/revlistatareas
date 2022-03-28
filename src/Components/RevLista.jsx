import React, { useState, useEffect } from "react";

const RevLista = (props) => {
  const { tareas, setTareas } = props;
  

  const [tareaInfo, setTareaInfo] = useState({
    tareaLista: false,
    tarea: "",
    id:0
  });

  useEffect(() => {
    console.log(tareaInfo,"tareaInfo");
  }, [tareaInfo]);

  useEffect(() => {
      console.log(tareas,"Tareas");
  }, [tareas]);

  const onChange = (e) => {
     // console.log(e.target.id, "e.target.id, antes del if, setTareas y del map") 
    if(e.target.type === "checkbox"){
       let objId = tareas.
        map((tarem,i)=>{
            
            if(i===parseInt(e.target.id)){
                tarem.tareaLista=e.target.checked
                //console.log(tarem, "taremmmm")
                return tarem
            }else{
                return tarem
            }
            
             //volver 
        })
        console.log(objId,"objid")
        //console.log(tareas[parseInt(e.target.id)].tareaLista, "objID")
        setTareas(objId);
         
    }else{
    setTareaInfo({
        ...tareaInfo,
        [e.target.name]: e.target.value,
     });
 }
  
  };
  const handleRemoveTarea = (id) => {
    const newTareas = tareas.filter((elemTareas) => elemTareas.id !== id)
            setTareas(newTareas)
    
  
  }
  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    
    setTareaInfo({
        ...tareaInfo,
        id: tareaInfo.id + 1
    })

    setTareas([...tareas, tareaInfo]);
    
    //console.log(tareaInfo)
  };

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="formgroup">
          <label htmlFor="tarea">Agrega una Tarea &nbsp;&nbsp; </label>
          <input type="text" name="tarea" onChange={onChange}></input>
        </div>
        <div className="insertaTarea">
        <input type="submit" value="Agregar Tarea"></input>
        </div>
        
        <div>
            {
                
                tareas.map((tar)=>
                <div className='tareass' key={tar.id}>
                {!tar.tareaLista?<p> {tar.tarea} </p>: <s>{tar.tarea}</s>}&nbsp;&nbsp;
                <input type="checkbox" name="tareaLista"   id={tar.id} value={tar.tareaLista} onChange={(e) => onChange(e)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onClick={()=>handleRemoveTarea(tar.id)} key={tar.id} value="Eliminar Tarea"></input>
                </div>)
                //leer sobre "parametros adicionales callbacks" en react que es el envio de parametros en eventos
            }
        </div>
        
      </form>
      
    </div>
  );
};

export default RevLista;