import React from 'react';
import logo from './Brasal.png';
import revisao from './technician.png';
import oil from './maintenance.png';
import gol from './gol.png';
import up from './up.png';
import polo from './polo.png';
import lavagem from './lavagem.png';
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        slide: 0,
        carro: null,
        km: 0,
        servico: "",
        maodeobra: 0,
        pecas: 0,
        tab: 1,
        lavagem: true,
        total: 0,
        cliente: {
          nome: 'Marcos Marques',
          cpf: '08812592929',
        }
      };

    // this.opcionais = [
    //   "Aditivo Tanque", "Correia", "Elemento", "Espuma Limpad", "Estopa", "Filtro Compressor", "Filtro",
    //   "Filtro Oleo", "Higienizador de AC", "JG Peças", "Kit lubrificante F.K", "Oleo 508 5W40", "Parafuso",
    //   "Rolo", "Trava", "Alinhamento e balanceamento", "Correia Dentada. Remov+Inst", "Higienização Americana",
    //   "Troca de óleo"
    // ]

    this.handleChange = this.handleChange.bind(this);
    this.handleKmChange = this.handleKmChange.bind(this);
    this.handlePicking = this.handlePicking.bind(this);
    this.handlePickingCar = this.handlePickingCar.bind(this);
    this.handleCheckOpt = this.handleCheckOpt.bind(this);

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

  handleCheckOpt(event){
    this.setState({lavagem: !this.state.lavagem})
  }

  calcularTotal(){
    var subtotal = 0;
    if (this.state.servico == "1ª Revisão"){
      subtotal += 690;
    }else
    if (this.state.servico == "2ª Revisão"){
      subtotal += 890;
    }else
    if (this.state.servico == "3ª Revisão"){
      subtotal += 690;
    }else
    if (this.state.servico == "Troca de óleo"){
      subtotal += 190;
    }
    if (this.state.lavagem == true){
      subtotal += 170;
    }else{
      subtotal -= 170;
    }
    this.setState({total: subtotal, slide: 5})
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
             {
               this.state.servico != "Troca de óleo" &&
               [<li>Filtro de óleo</li>,
               <li>Alinhamento e balanceamento</li>,
               <li>Ar condicionado</li>,
               <li>Velas</li>,
               <li><small>({this.state.km} mil km)</small></li>]
             }
             {
               this.state.lavagem &&
               <li>+ Higienização Americana</li>
             }
             </ul>
             <div className='total clearfix'>
                 <h2>Total : <p>R$ {this.state.total},00</p></h2>
             </div>
           </div>
         </div>
         <small className="note">Deseja receber o comprovante por e-mail?</small>
         <div>
         <button className="botao" value="Voltar" onClick={() => {this.setState({slide: 4})}}>Voltar</button>
           <button className="botao" value="Finalizar" onClick={() => {this.setState({slide: 0})}}>Finalizar</button>
         </div>
       </div>
    )
  }

  getOpcionais(){
    return (
      <div>
        <h1 className="label">
          Adicionar Higienização Americana?
        </h1>
        <div className="addOn">
          <img src={lavagem} className="lavagem" alt="lavagem" />
        </div>
        <div className="addOn-checkbox">
          <small>De R$ <span>199,00</span> por R$ 179,00 ao adicionar no carrinho agora.</small>
          <div className="opcional">
            <input type="checkbox" id="1" name="lavagem" value="lavagem" defaultChecked={this.state.lavagem} onChange={this.handleCheckOpt}/>
            <label for="1">Adicionar ao carrinho</label>
          </div>
        </div>
        <div>
          <button className="botao" value="Voltar" onClick={() => {this.setState({slide: 3})}}>Voltar</button>
          <button className="botao" value="Proximo" onClick={() => {this.calcularTotal()}}>Proximo</button>
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
        <div id="MinhaConta" className="tabcontent">
          <h3>{this.state.cliente.nome}</h3>
          <p>{this.state.cliente.cpf}</p>
          <p>{this.state.carro}</p>
        </div>
        }
        { this.state.tab == 2 &&
        <div id="MeuCarro" className="tabcontent">
          <h3>{this.state.carro}</h3>
          <p>{this.state.km} km</p>
        </div>
        }
        { this.state.tab == 3 &&
        <div id="Servicos" className="tabcontent">
          <p>1ª revisão</p>
        </div>
        }
       </div>
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">

          { (this.state.slide > 1 || this.state.slide < 0) &&
            <div className="conta" onClick={() => {console.log(this.setState({slide: this.state.slide*(-1)}))}}>
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
            this.getOpcionais()
          }
          { this.state.slide == 5  &&
            this.getOs()
          }
          { this.state.slide < 0  &&
            this.userForm()
          }
        </header>
      </div>
    );
  }
}

export default Home;

// <div className="opcionais">
//   {
//     this.opcionais.map(function(name, index){
//               console.log(name);
//               return <div className="opcional">
//                       <input type="checkbox" id={index} name={name} value={name}/>
//                       <label for={index}> {name}</label>
//                     </div>;
//     })
//   }
// </div>


// <small>
//   Lavagem da parte externa e da caixa de rodas, limpeza do painel, de vidros e carpete, aspiração interna e pretinho dos pneus. Dê brilho à lataria com cera líquida ou Jet Brite e polimento cristalizado, que busca
// </small>
