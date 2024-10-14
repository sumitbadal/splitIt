import axios from "axios";
class LoginService {
  login = async ({
    emailId,
    password,
  }: {
    emailId: string;
    password: string;
  }) => {
    axios
      .post("http://13.235.83.111/clusterApi/login", {
        emailId,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export const loginService = new LoginService();
