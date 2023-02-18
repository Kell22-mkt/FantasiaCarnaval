import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    fantasias: [
      {
        caption: "Thor",
        src:
          "https://uploads.codesandbox.io/uploads/user/33dc685a-c5f5-4ece-a16c-6975682745d6/4FRg-fantasia-thor-infantil-boy-removebg-preview.png"
      },
      {
        caption: "Fantasma",
        src:
          "https://images.tcdn.com.br/img/img_prod/743442/fantasia_fantasma_infantil_675_1_2bff02701ad2f4a4774e4cf3eed974f8.png"
      },
      {
        caption: "Coelho",
        src:
          "https://www.aladinfantasias.com.br/wp-content/uploads/2018/03/coelho2-510x510.png"
      },
      {
        caption: "Perna Longa",
        src:
          "https://uploads.codesandbox.io/uploads/user/33dc685a-c5f5-4ece-a16c-6975682745d6/1JR3-Fantasia_do_Pernalonga-removebg-preview.png"
      },
      {
        caption: "Naruto",
        src:
          "https://uploads.codesandbox.io/uploads/user/33dc685a-c5f5-4ece-a16c-6975682745d6/e3oL-fantasia-naruto-longo-infantil-fantasia-removebg-preview.png"
      },
      {
        caption: "Pinguim",
        src:
          "https://www.superlojadolar.com.br/11130-large_default/fantasia-adulto-traje-pinguim-carnaval-halloween.jpg"
      }
    ]
  };

  render() {
    return (
      <div>
        <header>
          <div>
            <h2>FANTASIAS TABAJARA</h2>
            <img
              src="https://www.gov.br/dnocs/pt-br/conteudo-migrado/carnaval-png/@@images/image.png"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li>Comprar</li>
              <li>Valores</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {/* map the itens  */}
            {this.state.fantasias.map(({ caption, src }, index) => (
              <figure className={index}>
                <figcaption>{caption}</figcaption>
                <img src={src} alt="" />
                <button>Comprar</button>
              </figure>
            ))}
          </section>
        </main>
      </div>
    );
  }
}
