import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { CardNoticia } from "./CardNoticia";
import { Modal } from "./ModalNormal";
import { ModalPremium } from "./ModalPremium";
import { stringFormatter, dateFormatter } from "./auxiliarFunctions";
import { INoticiasNormalizadas } from "./types";
import * as s from "./styled";

/**
 * /
 * - Mudando os types para somente um arquivo
 * - Extraindo componentes Modal, Modal Premium e CardNoticias para seus próprios arquivos
 * - Extraindo funções que formatam data e titulo
 * - Mudando nome de variáveis para uma forma mais descritiva
 *  */

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  
  const obterData = async () => {
    const resposta = await obterNoticias();
    const data = resposta.map((noticia) => {

      return {
        id: noticia.id,
        titulo: stringFormatter(noticia.titulo),
        description: noticia.description,
        date: `Faz ${dateFormatter(noticia.date)} minutos`,
        premium: noticia.premium,
        image: noticia.image,
        descriptionCurto: noticia.description.substring(0, 100),
      };
    });

    setNoticias(data);
  };

  useEffect(() => {
    obterData();
  }, []);

  return (
    <s.ContainerNoticias>
      <s.TituloNoticias>Noticias dos Simpsons</s.TituloNoticias>
      <s.ListaNoticias>
        {noticias.map((noticia) => (
          <CardNoticia image={noticia.image} titulo={noticia.titulo} date={noticia.date}  descriptionCurto={noticia.descriptionCurto} setModal={() => setModal(noticia)} />
        ))}
        {modal ? (
          modal.premium ? (
           <ModalPremium 
              setModal={() => setModal(null)}
              close={Close}
              assinarImage={AssinarImage}
           />
          ) : (
            <Modal 
              setModal={() => setModal(null)}
              close={Close}
              image={modal.image}
              titulo={modal.titulo}
              description={modal.description}
            />
          )
        ) : null}
      </s.ListaNoticias>
    </s.ContainerNoticias>
  );
};

export default Noticias;
