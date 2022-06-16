import axios from 'axios';

interface Session {
  id: string,
  token: string,
  tipo: string  
}

export const api = {
  baseURL: "http://192.168.15.12:3333",
  // baseURL: "https://learnbetter-api.herokuapp.com",

  request_post: {
    method: 'POST',
    validateStatus: (status:number) => { return status >= 0 && status < 900 }
  },

  request_put: {
    method: 'PUT',
    validateStatus: (status:number) => { return status >= 0 && status < 900 }
  },

  methods: {
    mentoriaQuantidade: async (session:Session) => {
      let retorno = {
        qtAguardando: 0,
        qtAndamento: 0,
        qtFinalizadas: 0
      }

      //  ANDAMENTO
      await axios
        .get(`${api.baseURL}/mentoria/quantidade`, {
          params: { status: 1 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.qtAndamento = res.data;
        }).catch(res => {
          console.log(res)
        })

      //  AGUARDANDO
      await axios
        .get(`${api.baseURL}/mentoria/quantidade`, {
          params: { status: 2 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.qtAguardando = res.data;
        }).catch(res => {
          console.log(res)
        })

      //  FINALIZADAS
      await axios
        .get(`${api.baseURL}/mentoria/quantidade`, {
          params: { status: 3 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.qtFinalizadas = res.data;
        }).catch(res => {
          console.log(res)
        })

      return retorno;
    },

    mentoriaPerfil: async (session:Session) => {
      let retorno = {
        aguardando: [],
        andamento: [],
        finalizadas: []
      }

      //  ANDAMENTO
      await axios
        .get(`${api.baseURL}/mentoria/buscar/usuario`, {
          params: { status: 1 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.andamento = res.data;
          
        }).catch(res => {
          console.log(res)
        })

      //  AGUARDANDO
      await axios
        .get(`${api.baseURL}/mentoria/buscar/usuario`, {
          params: { status: 2 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.aguardando = res.data;
          
        }).catch(res => {
          console.log(res)
        })
      //  ANDAMENTO
      await axios
        .get(`${api.baseURL}/mentoria/buscar/usuario`, {
          params: { status: 3 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno.finalizadas = res.data;
          
        }).catch(res => {
          console.log(res)
        })

      return retorno;
    },

    buscarMentor: async (session:Session) => {
      let retorno:any[] = [];

      //  ANDAMENTO
      await axios
        .get(`${api.baseURL}/mentoria/mentores`, {
          params: { status: 1 },
          headers: {
            id: session.id,
            token: session.token,
            tipo: session.tipo
          }
        }).then(res => {
          retorno = res.data;
          
        }).catch(res => {
          console.log(res)
        })

        return retorno;
    },

    buscarPerfil: async (session:Session) => {
      let retorno;

      await axios({
        method: "GET",
        url: `${api.baseURL}/usuario/buscarLogin`,
        headers: {
          id: session.id,
          token: session.token,
          tipo: session.tipo
        }
      })
      .then(res => {
        retorno = res.data;
      })
      .catch(res => { 
        console.log(res);
        alert("Ocorreu um erro inesperado");
      });

      return retorno;
    }
  }
}