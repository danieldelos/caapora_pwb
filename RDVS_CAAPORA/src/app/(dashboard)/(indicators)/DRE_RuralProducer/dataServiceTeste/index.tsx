import ModalTable from "@/components/dashboardComponents/ModalTable"
const dreMensal =
  [
    {
      "key": "0",
      "data": {
        "name": "Receita Operacional",
      },
      "children": [
        {
          "key": "0-0",
          "data": {
            "name": "Venda Produção",
          },
          "children": [
            {
              "key": "0-0-0",
              "data": {
                "name": "Categorty",
              },
              "children": [
                {
                  "key": "0-0-0-0",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "0-0-0-0-0",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "1-1",
      "data": {
        "name": "Impostos S/ Receita",
      },
      "children": [
        {
          "key": "1-1-1",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "1-1-1-1",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "1-1-1-1-1",
                  "data": {
                    "name": "Person Name",
                    "Jan": 22,
                    "Feb": 33,
                    "Mar": 44,
                    "Apr": 55,
                    "May": 66,
                    "Jun": 77,
                    "Jul": 88,
                    "Aug": 99,
                    "Sep": 21,
                    "Oct": 31,
                    "Nov": 41,
                    "Dec": 51
                  },
                }
              ]
            },
            // Adicione mais "Person Name" aqui, se necessário
          ]
        }
        // Adicione mais "Subcategorias" aqui, se necessário
      ]
    },
    {
      "key": "3",
      "data": {
        "name": "Receita Líquida",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "4",
      "data": {
        "name": "Custo",
      },
      "children": [
        {
          "key": "4-4",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "4-4-4",
              "data": {
                "name": "Subcategory",
              },
              "children": [
                {
                  "key": "4-4-4-4",
                  "data": {
                    "name": "Person Name",
                    "Jan": 22,
                    "Feb": 33,
                    "Mar": 44,
                    "Apr": 55,
                    "May": 66,
                    "Jun": 77,
                    "Jul": 88,
                    "Aug": 99,
                    "Sep": 21,
                    "Oct": 31,
                    "Nov": 41,
                    "Dec": 51
                  },
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "5",
      "data": {
        "name": "Receita - Custo",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "55",
      "data": {
        "name": "Margem %",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "6",
      "data": {
        "name": "Despesas/Receitas Operacionais",
      },
      "children": [
        {
          "key": "6-6",
          "data": {
            "name": "Despesas com diretores",
          },
          "children": [
            {
              "key": "6-6-6",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "6-6-6-6",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "6-6-6-6-6",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },

        {
          "key": "9-9",
          "data": {
            "name": "Despesas com RH",
          },
          "children": [
            {
              "key": "9-9-9",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "9-9-9-9",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "9-9-9-9-9",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "10-10",
          "data": {
            "name": "Despesas Comerciais",
          },
          "children": [
            {
              "key": "10-10-10",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "10-10-10-10",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "10-10-10-10-10",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "11-11",
          "data": {
            "name": "Despesas Administrativas",
          },
          "children": [
            {
              "key": "11-11-11",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "11-11-11-11",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "11-11-11-11-11",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "12-12",
          "data": {
            "name": "Despesas de Funcionamento",
          },
          "children": [
            {
              "key": "12-12-12",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "12-12-12-12",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "12-12-12-12-12",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "13-13",
          "data": {
            "name": "Serviços Profissionais",
          },
          "children": [
            {
              "key": "13-13-13",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "13-13-13-13",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "13-13-13-13-13",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "14-14",
          "data": {
            "name": "Impostos e Taxas",
          },
          "children": [
            {
              "key": "14-14-14",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "14-14-14-14",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "14-14-14-14-14",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "15-15",
          "data": {
            "name": "Frota",
          },
          "children": [
            {
              "key": "15-15-15",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "15-15-15-15",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "15-15-15-15-15",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "16-16",
          "data": {
            "name": "Investimentos",
          },
          "children": [
            {
              "key": "16-16-16",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "16-16-16-16",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "16-16-16-16-16",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "7-7",
          "data": {
            "name": "Outras Receitas",
          },
          "children": [
            {
              "key": "7-7-7",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "7-7-7-7",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "7-7-7-7-7",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "8-8",
          "data": {
            "name": "Outras Despesas",
          },
          "children": [
            {
              "key": "8-8-8",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "8-8-8-8",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "8-8-8-8-8",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "17",
      "data": {
        "name": "EBITDA",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "177",
      "data": {
        "name": "% Margem EBTIDA ",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "18",
      "data": {
        "name": "Despesa Indedutivel",
      },
      "children": [
        {
          "key": "18-18-18",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "18-18-18-18",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "18-18-18-18-18",
                  "data": {
                    "name": "Person Name",
                    "Jan": 22,
                    "Feb": 33,
                    "Mar": 44,
                    "Apr": 55,
                    "May": 66,
                    "Jun": 77,
                    "Jul": 88,
                    "Aug": 99,
                    "Sep": 21,
                    "Oct": 31,
                    "Nov": 41,
                    "Dec": 51
                  },
                }
              ]
            },
            // Adicione mais "Person Name" aqui, se necessário
          ]
        }
      ]
    },
    {
      "key": "19",
      "data": {
        "name": "Resultado Financeiro",
      },
      "children": [
        {
          "key": "19-19-19",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "19-19-19-19",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "19-19-19-19-19",
                  "data": {
                    "name": "Person Name",
                    "Jan": 22,
                    "Feb": 33,
                    "Mar": 44,
                    "Apr": 55,
                    "May": 66,
                    "Jun": 77,
                    "Jul": 88,
                    "Aug": 99,
                    "Sep": 21,
                    "Oct": 31,
                    "Nov": 41,
                    "Dec": 51
                  },
                }
              ]
            },
            // Adicione mais "Person Name" aqui, se necessário
          ]
        },
        {
          "key": "20-20",
          "data": {
            "name": "Despesas Financeiras",
          },
          "children": [
            {
              "key": "20-20-20",
              "data": {
                "name": "Category",
              },
              "children": [
                {
                  "key": "20-20-20-20",
                  "data": {
                    "name": "SubCategory",
                  },
                  "children": [
                    {
                      "key": "20-20-20-20-20",
                      "data": {
                        "name": "Person Name",
                        "Jan": 22,
                        "Feb": 33,
                        "Mar": 44,
                        "Apr": 55,
                        "May": 66,
                        "Jun": 77,
                        "Jul": 88,
                        "Aug": 99,
                        "Sep": 21,
                        "Oct": 31,
                        "Nov": 41,
                        "Dec": 51
                      },
                    }
                  ]
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "0",
      "data": {
        "name": "Resultado Líquido",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    },
    {
      "key": "0",
      "data": {
        "name": "% Margem Líquida",
        "Jan": 22,
        "Feb": 33,
        "Mar": 44,
        "Apr": 55,
        "May": 66,
        "Jun": 77,
        "Jul": 88,
        "Aug": 99,
        "Sep": 21,
        "Oct": 31,
        "Nov": 41,
        "Dec": 51
      },
    }
    // Adicione mais "rubricas" aqui, se necessário
  ]

const dreAnual =
  [
    {
      "key": "0",
      "data": {
        "name": "Receita Operacional",
      },
      "children": [
        {
          "key": "0-0",
          "data": {
            "name": "Venda Produção",
          },
          "children": [
            {
              "key": "0-0-0",
              "data": {
                "name": "Subcategoria_1",
              },
              "children": [
                {
                  "key": "0-0-0-0",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "1-1",
      "data": {
        "name": "Impostos S/ Receita",
      },
      "children": [
        {
          "key": "1-1-1",
          "data": {
            "name": "Subcategoria_2",
          },
          "children": [
            {
              "key": "1-1-1-1",
              "data": {
                "name": "Person Name",
                "2020": 22,
                "2021": 33,
                "2022": 44,
                "2023": 55,
                "2024": 66,

              }
            },
            // Adicione mais "Person Name" aqui, se necessário
          ]
        }
        // Adicione mais "Subcategorias" aqui, se necessário
      ]
    },
    {
      "key": "3",
      "data": {
        "name": "Receita Líquida",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },
    {
      "key": "4",
      "data": {
        "name": "Custo",
      },
      "children": [
        {
          "key": "4-4",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "4-4-4",
              "data": {
                "name": "Subcategory",
              },
              "children": [
                {
                  "key": "4-4-4-4",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  },
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "5",
      "data": {
        "name": "Receita - Custo",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },
    {
      "key": "55",
      "data": {
        "name": "% Margem",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },


    {
      "key": "6",
      "data": {
        "name": "Despesas Operacionais",
      },
      "children": [
        {
          "key": "6-6",
          "data": {
            "name": "Despesas com diretores",
          },
          "children": [
            {
              "key": "6-6-6",
              "data": {
                "name": "Subcategoria_1",
              },
              "children": [
                {
                  "key": "6-6-6-6",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "7-7",
          "data": {
            "name": "Outras Receitas",
          },
          "children": [
            {
              "key": "7-7-7",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "7-7-7-7",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "8-8",
          "data": {
            "name": "Outras Despesas",
          },
          "children": [
            {
              "key": "8-8-8",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "8-8-8-8",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "9-9",
          "data": {
            "name": "Despesas com RH",
          },
          "children": [
            {
              "key": "9-9-9",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "9-9-9-9",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "10-10",
          "data": {
            "name": "Despesas Comerciais",
          },
          "children": [
            {
              "key": "10-10-10",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "10-10-10-10",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "11-11",
          "data": {
            "name": "Despesas Administrativas",
          },
          "children": [
            {
              "key": "11-11-11",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "11-11-11-11",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "12-12",
          "data": {
            "name": "Despesas de Funcionamento",
          },
          "children": [
            {
              "key": "12-12-12",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "12-12-12-12",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "13-13",
          "data": {
            "name": "Serviços Profissionais",
          },
          "children": [
            {
              "key": "13-13-13",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "13-13-13-13",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "14-14",
          "data": {
            "name": "Impostos e Taxas",
          },
          "children": [
            {
              "key": "14-14-14",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "14-14-14-14",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "15-15",
          "data": {
            "name": "Frota",
          },
          "children": [
            {
              "key": "15-15-15",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "15-15-15-15",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "15-15",
          "data": {
            "name": "Investimentos",
          },
          "children": [
            {
              "key": "15-15-15",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "15-15-15-15",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "16",
      "data": {
        "name": "EBITDA",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },
    {
      "key": "166",
      "data": {
        "name": "% Margem EBTIDA ",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },
    {
      "key": "17",
      "data": {
        "name": "Despesa Indedutivel",
      },
      "children": [
        {
          "key": "17-17",
          "data": {
            "name": "SubCategory",
          },
          "children": [
            {
              "key": "17-17-17",
              "data": {
                "name": "Person Name",
                "2020": 22,
                "2021": 33,
                "2022": 44,
                "2023": 55,
                "2024": 66,
              }
            }
          ]
        }
      ]
    },
    {
      "key": "18",
      "data": {
        "name": "Resultado Financeiro",
      },
      "children": [
        {
          "key": "18-18",
          "data": {
            "name": "Receitas Financeiras",
          },
          "children": [
            {
              "key": "18-18-18",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "18-18-18-18",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                }
              ]
            }
          ]
        },
        {
          "key": "19-19",
          "data": {
            "name": "Despesas Financeiras",
          },
          "children": [
            {
              "key": "19-19-19",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "19-19-19-19",
                  "data": {
                    "name": "Person Name",
                    "2020": 22,
                    "2021": 33,
                    "2022": 44,
                    "2023": 55,
                    "2024": 66,

                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "0",
      "data": {
        "name": "Resultado Líquido",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    },
    {
      "key": "0",
      "data": {
        "name": "% Margem Líquida",
        "2020": 22,
        "2021": 33,
        "2022": 44,
        "2023": 55,
        "2024": 66,
      },
    }
    // Adicione mais "rubricas" aqui, se necessário
  ]

const dreFazenda =
  [
    {
      "key": "0",
      "data": {
        "name": "Receita Operacional",
      },
      "children": [
        {
          "key": "0-0",
          "data": {
            "name": "Venda Produção",
          },
          "children": [
            {
              "key": "0-0-0",
              "data": {
                "name": "Subcategoria_1",
              },
              "children": [
                {
                  "key": "0-0-0-0",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "1-1",
      "data": {
        "name": "Impostos S/ Receita",
      },
      "children": [
        {
          "key": "1-1-1",
          "data": {
            "name": "Subcategoria_2",
          },
          "children": [
            {
              "key": "1-1-1-1",
              "data": {
                "name": "Person Name",
                "Fazenda_1": 22,
                "Fazenda_2": 33,
                "Fazenda_3": 44,
                "Fazenda_4": 55,
                "Fazenda_5": 66,

              }
            },
            // Adicione mais "Person Name" aqui, se necessário
          ]
        }
        // Adicione mais "Subcategorias" aqui, se necessário
      ]
    },
    {
      "key": "3",
      "data": {
        "name": "Receita Líquida",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },
    {
      "key": "4",
      "data": {
        "name": "Custo",
      },
      "children": [
        {
          "key": "4-4",
          "data": {
            "name": "Category",
          },
          "children": [
            {
              "key": "4-4-4",
              "data": {
                "name": "Subcategory",
              },
              "children": [
                {
                  "key": "4-4-4-4",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,
                  },
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "5",
      "data": {
        "name": "Receita - Custo",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },
    {
      "key": "55",
      "data": {
        "name": "% Margem",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },


    {
      "key": "6",
      "data": {
        "name": "Despesas Operacionais",
      },
      "children": [
        {
          "key": "6-6",
          "data": {
            "name": "Despesas com diretores",
          },
          "children": [
            {
              "key": "6-6-6",
              "data": {
                "name": "Subcategoria_1",
              },
              "children": [
                {
                  "key": "6-6-6-6",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "7-7",
          "data": {
            "name": "Outras Receitas",
          },
          "children": [
            {
              "key": "7-7-7",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "7-7-7-7",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "8-8",
          "data": {
            "name": "Outras Despesas",
          },
          "children": [
            {
              "key": "8-8-8",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "8-8-8-8",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "9-9",
          "data": {
            "name": "Despesas com RH",
          },
          "children": [
            {
              "key": "9-9-9",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "9-9-9-9",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "10-10",
          "data": {
            "name": "Despesas Comerciais",
          },
          "children": [
            {
              "key": "10-10-10",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "10-10-10-10",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "11-11",
          "data": {
            "name": "Despesas Administrativas",
          },
          "children": [
            {
              "key": "11-11-11",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "11-11-11-11",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "12-12",
          "data": {
            "name": "Despesas de Funcionamento",
          },
          "children": [
            {
              "key": "12-12-12",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "12-12-12-12",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "13-13",
          "data": {
            "name": "Serviços Profissionais",
          },
          "children": [
            {
              "key": "13-13-13",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "13-13-13-13",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "14-14",
          "data": {
            "name": "Impostos e Taxas",
          },
          "children": [
            {
              "key": "14-14-14",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "14-14-14-14",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "15-15",
          "data": {
            "name": "Frota",
          },
          "children": [
            {
              "key": "15-15-15",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "15-15-15-15",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        {
          "key": "15-15",
          "data": {
            "name": "Investimentos",
          },
          "children": [
            {
              "key": "15-15-15",
              "data": {
                "name": "Subcategoria_2",
              },
              "children": [
                {
                  "key": "15-15-15-15",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                },
                // Adicione mais "Person Name" aqui, se necessário
              ]
            }
            // Adicione mais "Subcategorias" aqui, se necessário
          ]
        },
        // Adicione mais "Categorias" aqui, se necessário
      ]
    },
    {
      "key": "16",
      "data": {
        "name": "EBITDA",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },
    {
      "key": "166",
      "data": {
        "name": "% Margem EBTIDA ",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },
    {
      "key": "17",
      "data": {
        "name": "Despesa Indedutivel",
      },
      "children": [
        {
          "key": "17-17",
          "data": {
            "name": "SubCategory",
          },
          "children": [
            {
              "key": "17-17-17",
              "data": {
                "name": "Person Name",
                "Fazenda_1": 22,
                "Fazenda_2": 33,
                "Fazenda_3": 44,
                "Fazenda_4": 55,
                "Fazenda_5": 66,
              }
            }
          ]
        }
      ]
    },
    {
      "key": "18",
      "data": {
        "name": "Resultado Financeiro",
      },
      "children": [
        {
          "key": "18-18",
          "data": {
            "name": "Receitas Financeiras",
          },
          "children": [
            {
              "key": "18-18-18",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "18-18-18-18",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                }
              ]
            }
          ]
        },
        {
          "key": "19-19",
          "data": {
            "name": "Despesas Financeiras",
          },
          "children": [
            {
              "key": "19-19-19",
              "data": {
                "name": "SubCategory",
              },
              "children": [
                {
                  "key": "19-19-19-19",
                  "data": {
                    "name": "Person Name",
                    "Fazenda_1": 22,
                    "Fazenda_2": 33,
                    "Fazenda_3": 44,
                    "Fazenda_4": 55,
                    "Fazenda_5": 66,

                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "0",
      "data": {
        "name": "Resultado Líquido",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    },
    {
      "key": "0",
      "data": {
        "name": "% Margem Líquida",
        "Fazenda_1": 22,
        "Fazenda_2": 33,
        "Fazenda_3": 44,
        "Fazenda_4": 55,
        "Fazenda_5": 66,
      },
    }
    // Adicione mais "rubricas" aqui, se necessário
  ]


export { dreMensal, dreAnual, dreFazenda }