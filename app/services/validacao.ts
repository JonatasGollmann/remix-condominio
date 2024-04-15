export const validateNome = (name:string) => {
    if (name === '' ) {
      return "Nome é necessario";
    }
};
export const validateCidade = (cidade:string) => {
    if (cidade === '') {
      return "Cidade é necessaria.";
    }
  };  

export const validadeteTelefone = (telefone:string) => {
    if (telefone == '') {
      return "Telefone é necessario";
    }
};
export const validadeteAps = (aps:string) => {
    if (aps === '') {
      return "Apartamento é necessario";
    }
};