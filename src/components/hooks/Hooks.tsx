import { useEffect, useState } from "react";
interface IFriends {
  name: string;
  id: string;
  owe: string;
  due: string;
  value: string;
}
export const useFetchFriends = () => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState<IFriends[]>([]);

  const getFriends = () => {
    setLoading(true);
    setTimeout(() => {
      setFriends([
        {
          id: "test-1",
          name: "Manish",
          owe: "10",
          due: "200",
          value: "manish",
        },
        {
          id: "test-2",
          name: "Ravi",
          owe: "50",
          due: "",
          value: "rav",
        },
        {
          id: "test-3",
          name: "Sita",
          owe: "30",
          due: "100",
          value: "sita",
        },
        {
          id: "test-4",
          name: "Gita",
          owe: "",
          due: "50",
          value: "git",
        },
        {
          id: "test-5",
          name: "Anil",
          owe: "75",
          due: "",
          value: "anil",
        },
        {
          id: "test-6",
          name: "Sunil",
          owe: "20",
          due: "150",
          value: "sun",
        },
        {
          id: "test-7",
          name: "Arun",
          owe: "",
          due: "90",
          value: "aru",
        },
        {
          id: "test-8",
          name: "Amit",
          owe: "100",
          due: "",
          value: "amit",
        },
        {
          id: "test-9",
          name: "Rahul",
          owe: "60",
          due: "300",
          value: "rah",
        },
        {
          id: "test-10",
          name: "Rakesh",
          owe: "",
          due: "120",
          value: "rak",
        },
        {
          id: "test-11",
          name: "Rita",
          owe: "40",
          due: "",
          value: "rit",
        },
        {
          id: "test-12",
          name: "Seema",
          owe: "90",
          due: "80",
          value: "sem",
        },
        {
          id: "test-13",
          name: "Anita",
          owe: "",
          due: "110",
          value: "anit",
        },
        {
          id: "test-14",
          name: "Suresh",
          owe: "30",
          due: "",
          value: "sur",
        },
        {
          id: "test-15",
          name: "Mahesh",
          owe: "150",
          due: "210",
          value: "mah",
        },
        {
          id: "test-16",
          name: "Karan",
          owe: "",
          due: "250",
          value: "kar",
        },
        {
          id: "test-17",
          name: "Rohit",
          owe: "70",
          due: "",
          value: "roh",
        },
        {
          id: "test-18",
          name: "Vikas",
          owe: "45",
          due: "85",
          value: "vik",
        },
        {
          id: "test-19",
          name: "Pooja",
          owe: "",
          due: "95",
          value: "poo",
        },
        {
          id: "test-20",
          name: "Manish",
          owe: "25",
          due: "",
          value: "Mnaih",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return { loading, friends };
};
