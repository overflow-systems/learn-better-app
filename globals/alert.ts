interface Validation {
  validation: String,
  field?: String
}

export const _alert = {
  error: (errors:Array<Validation>) => {
    let message;

    //  REQUIRED
    if(errors.find(e => e.validation == "required")) {
      let required = errors.filter(e => e.validation.includes("required"));
      message = required.length > 1 ? "Preencha os campos " : "Preencha o campo ";
      
      message += required.map(e => {return e.field}).join(", ");
    }

    //  EMAIL
    else if(errors.find(e => e.validation == "email")) {
      let field = errors.filter(e => e.validation == "email");
      message = field.map(e => { return e.field }) + " inválido";
    }

    //  CELULAR
    else if(errors.find(e => e.validation == "celular")) {
      let field = errors.filter(e => e.validation == "celular");
      message = field.map(e => { return e.field }) + " inválido";
    }

    //  CPF
    else if(errors.find(e => e.validation == "cpf")) {
      let field = errors.filter(e => e.validation == "cpf");
      message = field.map(e => { return e.field }) + " inválido";
    }

    //  DATE
    else if(errors.find(e => e.validation == "date")) {
      let field = errors.filter(e => e.validation == "date");
      message = field.map(e => { return e.field }) + " inválido";
    }

    //  PASSWORD
    else if(errors.find(e => e.validation == "password")) {
      message = "Senha muito fraca";
    }

    //  SAME PASSWORD
    else if(errors.find(e => e.validation == "same_password")) {
      message = "As senhas não coincidem";
    }

    alert(message);
  }
}