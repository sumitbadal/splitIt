import axios from "axios";
import { ILogin, Login } from "manish-service-layer";
const log = new Login();
class LoginService {
  login = async ({
    emailId,
    password,
  }: {
    emailId: string;
    password: string;
  }) => {
    try {
      const response = await log.login({ emailId, password });
      return response;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };

  getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}profile/view`,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };
}

export const loginService = new LoginService();
