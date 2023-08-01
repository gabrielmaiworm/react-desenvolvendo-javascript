import './Formulario.css'
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.onCreateColaborator({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <DropDown 
                obrigatorio={true} 
                label="Time" 
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Button title="Criar Card"/> 
            </form>
        </section>
    )
}

export default Formulario;