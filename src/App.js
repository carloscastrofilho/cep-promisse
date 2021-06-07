import './App.css';
import cep from "cep-promise";
import React, {useState} from "react" ;

function App() {

  const [cepvalue, setCepvalue] = React.useState("");
  const [search, setSearch] = React.useState({});

  const [cepR, setCepR] = React. useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [cidade,setCidade] = React.useState("") ;
  const [estado, setEstado] = React.useState("") ;
  const [bairro,setBairro] = React.useState("") ;
 

  // funcao de busca acionada pelo button
  const searchCep = async() => {
    try {
      //
      const retorno = await cep(cepvalue) ;
      if (retorno){
                        
        setSearch(retorno);

        setCepR(retorno.cep) ;
        setLogradouro(retorno.street);
        setCidade(retorno.city) ;
        setEstado(retorno.state) ;
        setBairro(retorno.neighborhood);
        setCepvalue("") ;
      
      }  
    } catch (error) {
      switch(error.type) {
        case "service_error":
          setSearch({error:" CEP não localizado"});
          break;
        case "validation_error":
          setSearch({error:" CEP possui um formao invalido"});
            break;  
        default:
          setSearch({error});
      }      
    } 

  };

  const handleChangeCep = evt => setCepvalue(evt.target.value) ; 

  return (

    <div className="Container">

      <header className="App-header">
        <p>
          busca cep via api cep-promisse
        </p>        
      </header>

      <div className="Cep">        
        <label>CEP:</label>
        <input type="text" name="cep" value={cepvalue} onChange={handleChangeCep} />
        <button type="button" onClick={searchCep} >pesquisar</button>
      </div>

      <div className="Cepretorno">        
        <p>
          retorno consulta:
        </p>    
        <label>CEP:</label>
        <input type="text" name="cepr" value={cepR} onChange={()=>{}}/>

        <label>Logradouro:</label>
        <input type="text" name ="logradouro" value={logradouro} onChange={()=>{}}/>

        <label>Bairro:</label>
        <input type="text" name ="bairro" value={bairro} onChange={()=>{}}/>

        <label>Cidade:</label>
        <input type="text" name="cidade" value={cidade} onChange={()=>{}}/>

        <label>Estado:</label>
        <input type="text" name="estado" value={estado} onChange={()=>{}} />
      </div>


    </div>

  );
}

export default App;
