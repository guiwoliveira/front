function FormularioCadastro({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
           
            <input type="text" value={obj.tipo} onChange={eventoTeclado} name="tipo" placeholder="Tipo de vaga" className="form-control"/>
            <textarea type="text" value={obj.descricao} onChange={eventoTeclado} name="descricao" placeholder="Descrição" class="form-control" rows="5"/>
            <input type="text" value={obj.cargo} onChange={eventoTeclado} name="cargo" placeholder="Cargo" class="form-control"/>
            <input type="text" value={obj.local} onChange={eventoTeclado} name="local" placeholder="Local" class="form-control"/>
            <input type="text" value={obj.turno} onChange={eventoTeclado} name="turno" placeholder="Turno" class="form-control"/>
            <input type="text" value={obj.salario} onChange={eventoTeclado} name="salario" placeholder="Salário" class="form-control"/>
            
            {
                botao?
                <input type="button" onClick={cadastrar} value="Cadastrar" />
                :
                <div>
                    <input type="button" value="Editar" onClick={alterar} />
                    <input type="button" value="Excluir" onClick={remover}/>
                    <input type="button" value="Cancelar" onClick={cancelar}/>
                </div>
            }
  
        </form>
    )
}

export default FormularioCadastro;