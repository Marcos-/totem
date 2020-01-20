import React from 'react';
import logo from './Brasal.png';
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        inicio: true,
        comecar: false,
        opcoes: false,
        cliente: {
          nome: 'Marcos Marques',
          cpf: '08812592929',
          carro: '',
          km: 0
        }
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleKmChange = this.handleKmChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePicking = this.handlePicking.bind(this);
  }

  handleChange(event) {
    this.setState({cliente: {cpf: event.target.value}});
  }

  handleKmChange(event) {
    this.setState({cliente: {km: event.target.value}});
  }

  handleClick(event) {
    this.setState({comecar: true, inicio: false});
  }

  handleSubmit(event) {
    this.setState({comecar: false, opcoes : true});
  }

  handlePicking(event) {
    console.log(event);
  }

  getCpf(){
    return (
      <div className="GetCpf">
          <h1 className="label">
            Qual é o seu cpf - {this.state.cliente.cpf}
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input className="cpf" type="number" name="cpf" value={this.state.cliente.cpf} onChange={this.handleChange}/>
          </form>
      </div>
    )
  }

  getOpcoes(){
    return (
      <div className="GetOpcoes">
          <h1 className="label">
            Bem vindo de volta {this.state.cliente.nome}
          </h1>

          <h1 className="label">
            Qual serviço deseja realizar hoje?
          </h1>
          {this.Opcoes()}
      </div>
    )
  }
  // <h1 className="label">
  //   Seu carro está com <input className="km" type="text" name="km" value={this.state.cliente.km} onChange={this.handleKmChange}/> kilometros rodados
  // </h1>

  Opcoes() {
    return(
      <div className="options">
        <label className="option" onClick={this.handlePicking("1")}>
          <a href="/servicos">
              <div className="option-content">
                  <h2>1ª Revisão</h2>
                  <ul>
                  <li>Troca de óleo</li>
                  <li>Filtro de óleo</li>
                  <li>Alinhamento e balanceamento</li>
                  <li>Ar condicionado</li>
                  <li>Velas</li>
                  </ul>
              </div>
              <div className="on-checked"></div>
          </a>
        </label>

        <label className="option">
          <a href="/servicos">
            <div className="option-content">
              <h2>2ª Revisão</h2>
              <ul>
              <li>Troca de óleo</li>
              <li>Filtro de óleo</li>
              <li>Alinhamento e balanceamento</li>
              <li>Líquido do arrefecimento</li>
              <li>Fluído da direção hidráulica</li>
              </ul>
            </div>
            <div className="on-checked"></div>
          </a>
        </label>

        <label className="option">
          <a href="/servicos">
            <div className="option-content">
              <h2>3ª Revisão</h2>
              <ul>
              <li>Troca de óleo</li>
              <li>Filtro de óleo</li>
              <li>Alinhamento e balanceamento</li>
              <li>Ar condicionado</li>
              <li>Velas</li>
              <li>Correia dentada</li>
              <li>Pneus</li>
              <li>Fluído de freio</li>
              </ul>
            </div>
            <div className="on-checked"></div>
          </a>
        </label>

        <label className="option">
          <a href="/servicos">
            <div className="option-content">
              <h2>Troca de óleo</h2>
            </div>
            <div className="on-checked"></div>
          </a>
        </label>

    </div>
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          { this.state.inicio &&
          <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="touch" onClick={this.handleClick}>
            Toque para começar!
          </h1>
          </div>
          }
          { this.state.comecar &&
            this.getCpf()
          }
          { this.state.opcoes &&
            this.getOpcoes()
          }
        </header>
      </div>
    );
  }
}

export default Home;
