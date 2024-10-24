import axios from "axios";

interface ICreateGroup {
  name: string;
  description?: string;
  icon?: string;
}

class GroupServices {
  private static instance: GroupServices;

  private constructor() {}

  public static getInstance(): GroupServices {
    if (!GroupServices.instance) {
      GroupServices.instance = new GroupServices();
    }
    return GroupServices.instance;
  }

  createGroup = async ({ name, description = "", icon = "" }: ICreateGroup) => {
    try {
      const response = await axios.post(
        "http://13.200.237.131/clusterApi/group/create",
        {
          name,
          description,
          icon,
        },
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

export default GroupServices;
