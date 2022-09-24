import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";


import * as S from "./styled"

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <S.botaoBio
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        isActive={
          bioActive.id === nome
            ? true
            : false
        }
      >
        {nome}
      </S.botaoBio>
    ));
  };

  return (
    <S.bioContainer>
      <S.containerBotoes>{criarBotoes()}</S.containerBotoes>
      <div>
        <div>
          <S.bioImage
            src={bioActive.image}
            alt={bioActive.nome}            
          />
        </div>
        <div>
          <S.bioNome>{bioActive.nome}</S.bioNome>
          <S.bioDescription>{bioActive.description}</S.bioDescription>
        </div>
      </div>
    </S.bioContainer>
  );
};

export default Bio;
