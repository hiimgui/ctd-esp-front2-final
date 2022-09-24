import * as s from "./styled"
import { ModalPremimProps } from "./types";

export function ModalPremium({setModal, close, assinarImage}: ModalPremimProps) {
    return (
        <s.ContainerModal>
            <s.CardModal>
                <s.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </s.CloseButton>
                <s.ImageModal src={assinarImage} alt="mr-burns-excelent" />
                <s.ContainerTexto>
                    <s.TituloModal>Assine a nossa newsletter</s.TituloModal>
                    <s.DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos
                        personagens favoritos
                    </s.DescriptionModal>
                    <s.BotaoAssinar
                        onClick={() =>  
                            setTimeout(() => {
                                alert("Suscripto!");
                                setModal()
                            }, 1000)
                        }
                    >
                        Assinar
                    </s.BotaoAssinar>
                </s.ContainerTexto>
            </s.CardModal>
        </s.ContainerModal>
    )
}