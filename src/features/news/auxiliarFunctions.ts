export const stringFormatter = (titulo : string) => {
    return  titulo.split(" ").map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
}

export const dateFormatter = (time:Date) => {
    const hora = new Date();
    const minutosDecorrido = Math.floor(
    (hora.getTime() - time.getTime()) / 60000);

    return minutosDecorrido
}
        

