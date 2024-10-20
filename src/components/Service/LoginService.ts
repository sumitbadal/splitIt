import axios from "axios";
class LoginService {
  login = async ({
    emailId,
    password,
  }: {
    emailId: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        "http://13.235.83.111/clusterApi/auth/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return response; // Return response here
    } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Throw the error to be caught outside
    }
  };
}

export const loginService = new LoginService();
