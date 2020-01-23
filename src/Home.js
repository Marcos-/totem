import React from 'react';
import logo from './Brasal.png';
import revisao from './technician.png';
import oil from './maintenance.png';
import gol from './gol.png';
import up from './up.png';
import polo from './polo.png';
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        slide: 0,
        carro: null,
        servico: '',
        tab: 1,
        cliente: {
          nome: 'Marcos Marques',
          cpf: '08812592929',
          carro: '',
          km: 0
        }
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleKmChange = this.handleKmChange.bind(this);
    this.handlePicking = this.handlePicking.bind(this);
    this.handlePickingCar = this.handlePickingCar.bind(this);
  }

  handleChange(event) {
    this.setState({cliente: {cpf: event.target.value}});
    console.log(this.state);
  }

  handleKmChange(event) {
    this.setState({cliente: {km: event.target.value}});
  }

  handlePicking(id, event) {
    this.setState({servico: id});
    console.log(this.state.servico);
  }

  handlePickingCar(id, event) {
    this.setState({carro: id});
  }

  getCpf(){
    return (
      <div className="GetCpf">
          <h1 className="label">
            Para começar nos diga o seu <strong>CPF</strong>
          </h1>
          <form onSubmit={() => {this.setState({slide: 2})}}>
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
          <div>
            <button className="botao" value="Voltar" onClick={() => {this.setState({slide: 2})}}>Voltar</button>
            <button className="botao" value="Prosseguir" onClick={() => {this.setState({slide: 4})}}>Prosseguir</button>
          </div>
      </div>
    )
  }

  getCarros(){
    return (
      <div className="GetOpcoes">
          <h1 className="label">
            Bem vindo de volta {this.state.cliente.nome}
          </h1>

          <h1 className="label">
            Qual é o seu carro?
          </h1>
          {this.Carros()}
          <div>
            <button className="botao" value="Voltar" onClick={() => {this.setState({slide: 1})}}>Voltar</button>
            <button className="botao" value="Prosseguir" onClick={() => {this.setState({slide: 3})}}>Prosseguir</button>
          </div>
      </div>
    )
  }
  // <h1 className="label">
  //   Seu carro está com <input className="km" type="text" name="km" value={this.state.cliente.km} onChange={this.handleKmChange}/> kilometros rodados
  // </h1>

  Opcoes() {
    return(
      <div className="options">
        <label className="option" onClick={(e) => this.handlePicking("1ª Revisão", e)}>

              <div className="option-content">
                  <img src={revisao} className="icone" alt="logo" />
                  <h2>1ª Revisão</h2>
                  <ul>
                  <li>Troca de óleo</li>
                  <li>Filtro de óleo</li>
                  <li>Alinhamento e balanceamento</li>
                  <li>Ar condicionado</li>
                  <li>Velas</li>
                  <li><small>(10 mil km)</small></li>
                  </ul>
              </div>
              { this.state.servico == "1ª Revisão" &&
              <div className="on-checked"></div>
              }

        </label>

        <label className="option" onClick={(e) => this.handlePicking("2ª Revisão", e)}>
            <div className="option-content">
            <img src={revisao} className="icone" alt="logo" />
              <h2>2ª Revisão</h2>
              <ul>
              <li>Troca de óleo</li>
              <li>Filtro de óleo</li>
              <li>Alinhamento e balanceamento</li>
              <li>Líquido do arrefecimento</li>
              <li>Fluído da direção hidráulica</li>
              <li><small>(20 mil km)</small></li>
              </ul>
            </div>
            { this.state.servico == "2ª Revisão" &&
            <div className="on-checked"></div>
            }
        </label>

        <label className="option" onClick={(e) => this.handlePicking("3ª Revisão", e)}>
            <div className="option-content">
            <img src={revisao} className="icone" alt="logo" />
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
              <li><small>(30 mil km)</small></li>
              </ul>
            </div>
            { this.state.servico == "3ª Revisão" &&
            <div className="on-checked"></div>
            }
        </label>

        <label className="option" onClick={(e) => this.handlePicking("Troca de óleo", e)}>
            <div className="option-content">
              <img src={oil} className="icone" alt="logo" />
              <h2>Troca de óleo</h2>
              <ul>
              <li>
              <small>(Consulte a kilometragem com um de nossos atendentes)</small>
              </li>
              </ul>
            </div>
            { this.state.servico == "Troca de óleo" &&
            <div className="on-checked"></div>
            }
        </label>

    </div>
    )
  }

  Carros() {
    return(
      <div className="options carros">
        <label className="option" onClick={(e) => this.handlePickingCar("Up", e)}>

              <div className="option-content">
                  <img src={up} className="" alt="logo" />
                  <h2>UP</h2>

              </div>
              { this.state.carro == "Up" &&
              <div className="on-checked"></div>
              }

        </label>

        <label className="option" onClick={(e) => this.handlePickingCar("Gol", e)}>
            <div className="option-content">
            <img src={gol} className="" alt="logo" />
              <h2>Gol</h2>

            </div>
            { this.state.carro == "Gol" &&
            <div className="on-checked"></div>
            }
        </label>

        <label className="option" onClick={(e) => this.handlePickingCar("Polo", e)}>
            <div className="option-content">
            <img src={polo} className="" alt="logo" />
              <h2>Polo</h2>

            </div>
            { this.state.carro == "Polo" &&
            <div className="on-checked"></div>
            }
        </label>


    </div>
    )
  }

  getOs(){
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="box">
           <div className='inner'>
             <h1>{this.state.servico} {this.state.carro}</h1>
             <div className='info clearfix'>
                 <div className='wp'>Serviço<h2 className="h2-nota">{this.state.servico}</h2></div>
                 <div className='wp'>Técnico Mec.<h2 className="h2-nota">Marcos</h2></div>
                 <div className='wp'>Desc<h2 className="h2-nota">5%</h2></div>
             </div>
             <ul>
             <li>Troca de óleo</li>
             <li>Filtro de óleo</li>
             <li>Alinhamento e balanceamento</li>
             <li>Ar condicionado</li>
             <li>Velas</li>
             <li><small>(10 mil km)</small></li>
             </ul>
             <div className='total clearfix'>
                 <h2>Total : <p>R$ 690,00</p></h2>
             </div>
           </div>
         </div>
         <small className="note">Deseja receber o comprovante por e-mail?</small>
         <div>
         <button className="botao" value="Voltar" onClick={() => {this.setState({slide: 3})}}>Voltar</button>
           <button className="botao" value="Finalizar" onClick={() => {this.setState({slide: 0})}}>Finalizar</button>
         </div>
       </div>
    )
  }

  userForm(){
    return (
      <div>
        <h2>Tabs</h2>
        <p>Click on the x button in the top right corner to close the current tab:</p>

        <div className="tab">
        <button className="tablinks" onClick={() => {this.setState({tab: 1})}} id="defaultOpen">Minha Conta</button>
        <button className="tablinks" onClick={() => {this.setState({tab: 2})}}>Meu Carro</button>
        <button className="tablinks" onClick={() => {this.setState({tab: 3})}}>Histórico de serviços</button>
        </div>

        { this.state.tab == 1 &&
        <div id="London" className="tabcontent">
          <span onclick="this.parentElement.style.display='none'" className="topright">&times</span>
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        }
        { this.state.tab == 2 &&
        <div id="Paris" className="tabcontent">
          <span onclick="this.parentElement.style.display='none'" className="topright">&times</span>
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
        }
        { this.state.tab == 3 &&
        <div id="Tokyo" className="tabcontent">
          <span onclick="this.parentElement.style.display='none'" className="topright">&times</span>
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
        }
       </div>
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">

          { this.state.slide > 1 &&
            <div className="conta" onClick={() => {console.log(this.setState({slide: 99}))}}>
              &#9881;
            </div>
          }
          { this.state.slide == 0 &&
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="touch" onClick={() => {this.setState({slide: 1})}}>
              Toque para começar!
            </h1>
          </div>
          }
          { this.state.slide == 1  &&
            this.getCpf()
          }
          { this.state.slide == 2  &&
            this.getCarros()
          }
          { this.state.slide == 3  &&
            this.getOpcoes()
          }
          { this.state.slide == 4  &&
            this.getOs()
          }
          { this.state.slide == 99  &&
            this.userForm()
          }
        </header>
      </div>
    );
  }
}

export default Home;
