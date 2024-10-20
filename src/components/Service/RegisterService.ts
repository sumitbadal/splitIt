import axios from "axios";

interface IRegister {
  emailId: string;
  password: string;
  fullName: string;
  phone: string;
}

class RegisterService {
  signup = async ({ emailId, password, fullName, phone }: IRegister) => {
    try {
      const response = await axios.post(
        "http://13.235.83.111/clusterApi/auth/signup",
        {
          emailId,
          password,
          fullName,
          phone,
        }
      );
      return response; // Return response here
    } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Throw the error to be caught outside
    }
  };
}

export const registerService = new RegisterService();
