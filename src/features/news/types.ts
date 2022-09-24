export type CardNoticiaProps = {
    image: string;
    titulo: string;
    date: number | string;
    descriptionCurto?: string;
    setModal: () => void;
}

export type ModalProps = {
    setModal: () => void;
    close: string;
    image: string;
    titulo: string;
    description: string;
}

export type ModalPremimProps = {
    setModal: () => void;
    close: string;
    assinarImage: string;
}

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    description: string;
    date: number | string;
    premium: boolean;
    image: string;
    descriptionCurto?: string;
  }