export const validation = {
  required: (val:string) => {
    if(val.length < 1) return false

    return true;
  },

  cpf: (val:string) => {
    if(val.length != 11) return false

    return true;
  },

  celular: (val:string) => {
    if(val.length != 11) return false
    
    return true;
  },

  email: (val:string) => {
    if(!val.includes("@")) return false

    let [before_arroba, after_arroba] = val.split("@")

    if(before_arroba.length < 3) return false;
    if(after_arroba.length < 3) return false;
    
    return true;
  },

  date: (val:string) => {
    if(val.length < 10) return false;
  
    const ano = Number(val[0] + val[1] + val[2] + val[3]);
    const mes = Number(val[5] + val[6]);
    const dia = Number(val[8] + val[9]);
  
    const today = new Date();
  
    if(dia > 31 || dia < 1 || dia == NaN) return false;
  
    if(mes > 12 || mes < 1 || mes == NaN) return false;
  
    if(ano > today.getFullYear() || ano < (today.getFullYear() - 100)) return false;
  
    return true;
  },

  password: (val:string) => {
    //  AT LEAST 8 CHARS
    if(val.length < 8) return false;

    //  LOWERCASE
    if(!(/[a-z]/).test(val)) return false;
    
    //  UPPERCASE
    if(!(/[A-Z]/).test(val)) return false;

    //  AT LEAST 1 NUMBER
    if(!(/[0-9]/).test(val)) return false;
  
    return true;
  }
}