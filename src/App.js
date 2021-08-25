import React, { Component } from "react";
import add from "./component/img/add.svg";
import remove from "./component/img/remove.svg";
import car from "./component/img/car.svg";
import styled from "styled-components";

const Conteiner = styled.section`
  width: 100%;
  height: 100%;
  background-color: #373300;
  opacity: 95%;
`;

const WrapConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Container1 = styled.section`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
`;

const BoxCars = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: #976031;

  border-radius: 15px;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const SubTitle = styled.h2`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 18px;
  margin: 0.5rem;
`;

const Container2 = styled.section`
  width: 15%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffcf3a;
  background-image: url(${car});
  background-repeat: no-repeat;
`;

const InfoCarrinho = styled.div`
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-itens: center;
  text-align: center;
  justify-content: space-evenly;
  text-aling: center;
  background-color: #908279;
`;

const Total = styled.section`
  font-size: 20px;
  background-color: #ff5b00;
  border-radius: 15px;
  width: 100%;
`;

class App extends Component {
  state = {
    cars: [
      {
        title: "Jetta",
        assembler: "Volkswagen",
        price: "R$144.000,00",
        type: "Sedan",
        id: "01"
      },
      {
        title: "Polo",
        assembler: "Volkswagen",
        price: "R$70.000,00",
        type: "Hatch",
        id: "02"
      },
      {
        title: "T-Cross",
        assembler: "Volkswagen",
        price: "R$123.000,00",
        type: "SUV",
        id: "03"
      },
      {
        title: "Tinguan R-line",
        assembler: "Volkswagen",
        price: "R$146.000,00",
        type: "SUV",
        id: "04"
      },
      {
        title: "Golf GTI",
        assembler: "Volkswagen",
        price: "R$138.000,00",
        type: "Hatch"
      },
      {
        title: "Civic",
        assembler: "Honda",
        price: "R$70.000,00",
        type: "Sedan",
        id: "06"
      },
      {
        title: "Corolla",
        assembler: "Toyota",
        price: "R$110.000,00",
        type: "Sedan",
        id: "07"
      },
      {
        title: "Corolla Cross",
        assembler: "Toyota",
        price: "R$184.000,00",
        type: "SUV",
        id: "08"
      },
      {
        title: "Compass",
        assembler: "Jeep",
        price: "R$132.000,00",
        type: "SUV",
        id: "09"
      }
    ],
    shoppingCars: [],
    total: ""
  };

  addCars = (item) => {
    this.setState(
      {
        shoppingCars: this.state.shoppingCars.concat(item)
      },
      () =>
        this.setState({
          total: this.state.total.concat(this.state.shoppingCars)
        })
    );

    console.log(this.state.shoppingCars);
  };

  removeCars = (id) => {
    this.setState({
      shoppingCars: this.state.shoppingCars.filter((carro) => carro.id !== id)
    });
  };

  render() {
    return (
      <Conteiner>
        <BoxTitle>
          <Title>Carros</Title>
        </BoxTitle>

        <WrapConteiner>
          <Container1>
            {this.state.cars.map((item, index) => (
              <div key={index}>
                <BoxCars>
                  <SubTitle>
                    {" "}
                    {item.title}
                    <button onClick={() => this.addCars(item)}>
                      <img src={add} alt="Add" />
                    </button>
                  </SubTitle>

                  <Description>
                    <p>Montadora: {item.assembler} </p>
                    <p> Tipo: {item.type} </p>
                    <p>
                      {" "}
                      Preço:{" "}
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        currencyDisplay: "symbol"
                      })}
                    </p>
                  </Description>
                </BoxCars>
              </div>
            ))}
          </Container1>

          <Container2>
            {this.state.shoppingCars.map((item) => (
              <div>
                <InfoCarrinho>
                  <h2>
                    {" "}
                    {item.marca}
                    <button onClick={() => this.removeCars(item.id)}>
                      <img src={remove} alt="Remove" />
                    </button>
                  </h2>

                  <p> Tipo: {item.type} </p>
                  <p>
                    {" "}
                    Preço:{" "}
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      currencyDisplay: "symbol"
                    })}{" "}
                  </p>
                </InfoCarrinho>
              </div>
            ))}

            <Total>
              <h3> Total</h3>
              <p>
                {" "}
                {this.state.shoppingCars
                  .reduce((a, c) => a + c.preco, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    currencyDisplay: "symbol"
                  })}{" "}
              </p>
            </Total>
          </Container2>
        </WrapConteiner>
      </Conteiner>
    );
  }
}
export default App;
