import axios from "axios";

interface GroupList {
  name: string;
  description?: string;
  icon?: string;
}
class GroupServices {
  private static instance: GroupServices;

  private constructor() {}

  private cache: { [key: string]: Promise<GroupList[]> };

  public static getInstance(): GroupServices {
    if (!GroupServices.instance) {
      GroupServices.instance = new GroupServices();
    }
    return GroupServices.instance;
  }

  createGroup = async ({ name, description = "", icon = "" }: GroupList) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}group/create`,
        {
          name,
          description,
          icon,
        },
        {
          withCredentials: true,
        }
      );
      return { group: response };
    } catch (error) {
      console.error(`Error during signup:`, error);
      throw error;
    }
  };

  getGroups = async () => {
    if (this.cache) {
      return this.cache;
    }
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}group/get`,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (err) {}
  };

  getGroupById = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}group/get`,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (err) {}
  };
}

export const groupServices = GroupServices.getInstance();
