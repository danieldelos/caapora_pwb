"use client";
import { api } from "@/service/api";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import nookies from "nookies";

export const userContext = createContext({});

type UserType = {
  id: number;
};

export const UserProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType[]>([]);

  const createUser = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.post("/api/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário criado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar o usuário.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const addUser = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário criado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUser((user) => [...user, data])
      
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar o usuário.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // useEffect(() => {
  //   const listUsers = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/users", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listUsers();
  // }, []);

  const editUser = async (formData: any, id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.put(`api/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário atualizado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (user) {
        const userList: any = user.map((elem: any) => {
          if (id === elem.id) {
            return { ...elem, ...formData };
          } else {
            return elem;
          }
        });
        setUser(userList);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao atualizar o usuário.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const deleteUser = async (id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      await api.delete(`api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário removido com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUser((user) => (user as UserType[]).filter((elem) => elem.id !== Number(id)));
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao remover o usuário.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <userContext.Provider value={{ user, createUser, editUser, deleteUser, addUser }}>
      {children}
    </userContext.Provider>
  );
};
