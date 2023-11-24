export function GET_CEP(cep) {
    return {
      url: "https://viacep.com.br/ws/" + cep + "/json",
      options: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  }