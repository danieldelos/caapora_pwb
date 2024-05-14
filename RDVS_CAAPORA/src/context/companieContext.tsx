"use client";
import { api } from "@/service/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import nookies from "nookies";
import axios from "axios";

export const companieContext = createContext({});

type CompanieType = {
  id: number;
};

type CropType = {
  id: number;
};

type HarvestType = {
  id: number;
};

type PlotType = {
  id: number;
};

export const CompanieProvider = ({ children }: any) => {
  const [companie, setCompanie] = useState<CompanieType[]>([]);

  const addCompanie = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/company", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Empresa cadastrada com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCompanie((companie) => [...companie, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar o usuário.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // useEffect(() => {
  //   const listCompanies = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/company", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setCompanie(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listCompanies();
  // }, []);

  const editCompanie = async (formData: any, id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.put(`/api/company/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Empresa atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (companie) {
        const companieList: any = companie.map((elem: any) => {
          if (Number(id) === elem.id) {
            return { ...elem, ...formData };
          } else {
            return elem;
          }
        });
        setCompanie(companieList);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao atualizar dados.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const deleteCompanie = async (id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      await api.delete(`/api/company/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Empresa removida com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCompanie((companie) =>
        (companie as CompanieType[]).filter((elem) => elem.id !== Number(id))
      );
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao remover a Empresa.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ===============CRUD Crop==========================
  const [crop, setCrop] = useState<CropType[]>([]);

  const addCrop = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/vintage", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Safra cadastrada com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCrop((crop) => [...crop, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar a Safra.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };


  // useEffect(() => {
  //   const listCrops = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/vintage", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setCrop(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listCrops();

  // }, []);
  // console.log(crop)




  const editCrop = async (formData: any, id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.put(`/api/vintage/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Safra atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (crop) {
        const cropList: any = crop.map((elem: any) => {
          if (id === elem.id) {
            return { ...elem, ...formData };
          } else {
            return elem;
          }
        });
        setCrop(cropList);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao atualizar a Safra.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const deleteCrop = async (id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      await api.delete(`/api/vintage/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Safra removida com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCrop((safra) =>
        (safra as CropType[]).filter((elem) => elem.id !== Number(id))
      );
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao remover a Safra.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ===============CRUD Harvest==========================
  const [harvest, setHarvest] = useState<HarvestType[]>([]);

  const addHarvest = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/culture", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cultura cadastrada com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setHarvest((harvest) => [...harvest, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar a Cultura.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // useEffect(() => {
  //   const listHarvest = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/culture", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setHarvest(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listHarvest();
  // }, []);

  const editHarvest = async (formData: any, id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.put(`/api/culture/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cultura atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (harvest) {
        const harvestList: any = harvest.map((elem: any) => {
          if (id === elem.id) {
            return { ...elem, ...formData };
          } else {
            return elem;
          }
        });
        setHarvest(harvestList);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao atualizar a Cultura.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const deleteHarvest = async (id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      await api.delete(`/api/culture/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cultura removida com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setHarvest((harvest) =>
        (harvest as HarvestType[]).filter((elem) => elem.id !== Number(id))
      );
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao remover a Cultura.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ===============CRUD - Plot==========================
  const [plot, setPlot] = useState<PlotType[]>([]);
  // useEffect(() => {
  //   const listPlot = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/plot", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setPlot(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listPlot();
  // }, []);

  const addPlot = async (formData: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/plot", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Talhão cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPlot((plot) => [...plot, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar o Talhão.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const editPlot = async (formData: any, id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const res = await api.put(`/api/plot/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Talhão atualizado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (plot) {
        const plotList: any = plot.map((elem: any) => {
          if (id === elem.id) {
            return { ...elem, ...formData };
          } else {
            return elem;
          }
        });
        setPlot(plotList);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao atualizar o Talhão.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const deletePlot = async (id: any) => {
    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      await api.delete(`/api/plot/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Talhão removido com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPlot((plot) =>
        (plot as HarvestType[]).filter((elem) => elem.id !== Number(id))
      );
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao remover o Talhão.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ===============CRUD - Plano de contas==========================
  const [chartAccounting, setChartAccounting] = useState<any>([]);
  const [count, setCount] = useState<any>([]);

  const addChartAccounting = async (formData: any) => {

    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/accounts-plan/import", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)
      toast.success("Plano de contas cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setChartAccounting((plan: any) => [...plan, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro ao cadastrar o Plano de contas.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };


  // useEffect(() => {
  //   const listCounts = async () => {
  //     const cookie = nookies.get();
  //     const token = cookie["SisCount.token"];
  //     try {
  //       const res: any = await api.get("/api/list-analytic", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setCount(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   listCounts();
  // }, [chartAccounting]);


  // ===============CRUD - Razão==========================
  const [ratio, setRatio] = useState<any>([]);

  const addratio = async (formData: any) => {

    for (const pair of formData.entries()) {
      const [key, value] = pair;
      console.log(`Chave: ${key}, Valor: ${value}`);
    }

    const cookie = nookies.get();
    const token = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/ratio/import", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)
      toast.success("Razão cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRatio((plan: any) => [...plan, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro ao cadastrar o Razão.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  // ===============CRUD - "Balancete"==========================

  const [balance, setBalance] = useState<any>([])
  const [temp, setTemp] = useState<any>([])
  const [system, setSystem] = useState<any>('padrao')
  const [idFromTo, setIdFromTo] = useState<any>({})

  const addBalanceSSCROP = async (formData: any) => {
    const cookie = nookies.get();
    const token: string = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/balancete/import", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      //  setChartAccounting((plan: any) => [...plan, data]);
      console.log(data)  
      setTemp(data.data)
      // addSSCROP(token, data.data)
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
      });

    }
  };

  const addSSCROP = async (formData: any) => {
    const cookie = nookies.get();
    const token: string = cookie["SisCount.token"];
    console.log(JSON.stringify(formData))
    try {
      const { data } = await api.post("/api/balancete/process_temp_to_plan_account", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.combinationsFile.length > 0) {

        toast.warning("Faça o de Para", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success(data.planAccount.description, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setBalance((blc: any) => [...blc, data]);
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.error[0].message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const addFromTo = async (formData: any) => {
    const cookie = nookies.get();
    const token: string = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/accounts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIdFromTo(data.id)
      console.log(data)
      toast.success("De Para feito Com sucesso.", {
        position: toast.POSITION.TOP_CENTER,
      });
      //  setBalance((blc: any) => [...blc, data]);
      
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro ao cadastrar o De Para", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  

  const updateFromTo = async (formData: any) => {
    const cookie = nookies.get();
    const token: string = cookie["SisCount.token"];
    try {
      const { data } = await api.post("/api/accounts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Atualização feita Com sucesso.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      //  setBalance((blc: any) => [...blc, data]);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum erro ao atualizar o De Para", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const processBlc = async (formData: any) => {
    const cookie = nookies.get();
    const token: string = cookie["SisCount.token"];
    try {
      const { data } = await api.post("api/balancete/process_temp", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)
      toast.success(data.message[0].message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(data)
      setBalance((blc: any) => [...blc, data]);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error[0].message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

      const [imports, setImports]=useState<any[]>([])
      const listImpotsBalance = async () => {
        const cookie = nookies.get();
        const token = cookie["SisCount.token"];
        try {
          const res: any = await api.get("/api/balancete/import-files", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setImports(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      const deleteImport = async (id: any) => {
        const cookie = nookies.get();
        const token = cookie["SisCount.token"];
        try {
         const { data } = await api.delete(`/api/balancete/import-files/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          toast.success("importação removida com sucesso", {
            position: toast.POSITION.TOP_CENTER,
          });
          setImports((imports) =>
            (imports).filter((elem) => elem.id !== id)
          );
          console.log(imports)
        } catch (error) {
          console.log(error);
          toast.error("Ocorreu um erro ao remover a Safra.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      };

  

  return (
    <companieContext.Provider
      value={{
        companie,
        addCompanie,
        editCompanie,
        deleteCompanie,
        crop,
        addCrop,
        editCrop,
        deleteCrop,
        harvest,
        addHarvest,
        editHarvest,
        deleteHarvest,
        plot,
        addPlot,
        editPlot,
        deletePlot,
        addChartAccounting,
        chartAccounting,
        addratio,
        ratio,
        count,
        setSystem,
        system,
        addBalanceSSCROP,
        addSSCROP,
        balance,
        addFromTo,
        idFromTo,
        updateFromTo,
        temp,
        processBlc,
        listImpotsBalance,
        imports,
        deleteImport,
      }}
    >
      {children}
    </companieContext.Provider>
  );
};
