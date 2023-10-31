function TabelaVagas({vetor, selecionar}){
    return(
        <table className="table">
            <thead value="table-header">
                <tr value="indice">
                    <th>ID</th>
                    <th>Tipo de vaga</th>
                    <th>Cargo</th>
                    <th>Salário</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice} value="linhas">
                            <td>{indice+1}</td>
                            <td>{obj.tipo}</td>
                            <td>{obj.cargo}</td>
                            <td>{obj.salario}</td>
                            <td><button onClick={() => {selecionar(indice)}} value="Selecionar">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TabelaVagas;