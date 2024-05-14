"use client"
import TablePivotComponent from "@/components/dashboardComponents/TablePivot"
import { dreMensal, dreAnual, dreFazenda } from "@/app/(dashboard)/(indicators)/DRE_RuralProducer/dataServiceTeste"
import { RadioButton } from 'primereact/radiobutton';
import { Box, Flex, Select } from "@chakra-ui/react"
import { useState } from "react";
import FilterDemo from "@/components/dashboardComponents/TableTeste";

const DRE_RuralProducerPage = () => {
  const [viewOption, setviewOption] = useState('mensal');

  interface ColumnMeta {
    field: string;
    header: string;
  }

  const initialColumns: ColumnMeta[] = [
    { field: 'Jan', header: 'Jan' },
    { field: 'Feb', header: 'Fev' },
    { field: 'Mar', header: 'Mar' },
    { field: 'Apr', header: 'Abr' },
    { field: 'May', header: 'Mai' },
    { field: 'Jun', header: 'Jun' },
    { field: 'Jul', header: 'Jul' },
    { field: 'Aug', header: 'Ago' },
    { field: 'Sep', header: 'Set' },
    { field: 'Oct', header: 'Out' },
    { field: 'Nov', header: 'Nov' },
    { field: 'Dec', header: 'Dez' },
    { field: 'Total', header: 'Total' },
  ];

  const optionsMes: any[]  = 
  [
    { name: 'Jan', code: 'Jan' },
    { name: 'Feb', code: 'Fev' },
    { name: 'Mar', code: 'Mar' },
    { name: 'Abr', code: 'Abr' },
    { name: 'Mai', code: 'Mai' },
    { name: 'Jun', code: 'Jun' },
    { name: 'Jul', code: 'Jul' },
    { name: 'Aug', code: 'Ago' },
    { name: 'Set', code: 'Set' },
    { name: 'Out', code: 'Out' },
    { name: 'Nov', code: 'Nov' },
    { name: 'Dez', code: 'Dez' },
  ]
  
  const anualColumns: ColumnMeta[] = [
    { field: '2020', header: '2020' },
    { field: '2021', header: '2021' },
    { field: '2022', header: '2022' },
    { field: '2023', header: '2023' },
    { field: '2024', header: '2024' },
    { field: 'Total', header: 'Total' },
  ];

  const optionsAno: any[] = 
  [
    { name: '2020', code: '2020' },
    { name: '2021', code: '2021' },
    { name: '2022', code: '2022' },
    { name: '2023', code: '2023' },
    { name: '2024', code: '2024' },
  ];
  
  const fazendaColumns: ColumnMeta[] = [
    { field: 'Fazenda_1', header: 'Fazenda_1' },
    { field: 'Fazenda_2', header: 'Fazenda_2' },
    { field: 'Fazenda_3', header: 'Fazenda_3' },
    { field: 'Fazenda_4', header: 'Fazenda_4' },
    { field: 'Fazenda_5', header: 'Fazenda_5' },
    { field: 'Total', header: 'Total' },
  ];
  
  const optionsFazenda: any[] = [
    { name: 'Fazenda_1', code: '1' },
    { name: 'Fazenda_2', code: '2' },
    { name: 'Fazenda_3', code: '3' },
    { name: 'Fazenda_4', code: '4' },
    { name: 'Fazenda_5', code: '5' }
  ];

  const safraColumns: ColumnMeta[] = [
    { field: 'safra_1', header: 'safra_1' },
    { field: 'safra_2', header: 'safra_2' },
    { field: 'safra_3', header: 'safra_3' },
    { field: 'safra_4', header: 'safra_4' },
    { field: 'safra_5', header: 'safra_5' },
    { field: 'Total', header: 'Total' },
  ];

  const optionsSafra : any[] = [
    { name: 'safra_1', code: 'safra_1' },
    { name: 'safra_2', code: 'safra_2' },
    { name: 'safra_3', code: 'safra_3' },
    { name: 'safra_4', code: 'safra_4' },
    { name: 'safra_5', code: 'safra_5' },
  ];

  return (
    <>
      <Box>
        <Box mb={5}>
          <div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                <RadioButton inputId="view1" name="view" value="anual" onChange={(e) => setviewOption(e.value)} checked={viewOption === 'anual'} />
                <label htmlFor="view1" className="ml-2">Anual</label>
              </div>
              <div className="flex align-items-center">
                <RadioButton inputId="view2" name="view" value="mensal" onChange={(e) => setviewOption(e.value)} checked={viewOption === 'mensal'} />
                <label htmlFor="view2" className="ml-2">Mensal</label>
              </div>
              <div className="flex align-items-center">
                <RadioButton inputId="view3" name="view" value="fazenda" onChange={(e) => setviewOption(e.value)} checked={viewOption === 'fazenda'} />
                <label htmlFor="view3" className="ml-2">Fazenda</label>
              </div>
            </div>
          </div>
        </Box>
        {
          viewOption === 'mensal' && (
            <>
              <TablePivotComponent itensTable={dreMensal} optionView={viewOption} typeColumn={initialColumns} ano={optionsAno} mes={optionsMes} fazenda={optionsFazenda} safra={optionsSafra} />
            </>
          )
        }
        {
          viewOption === 'anual' && (
            <>
              <TablePivotComponent itensTable={dreAnual} optionView={viewOption} typeColumn={anualColumns} ano={optionsAno} mes={optionsMes} fazenda={optionsFazenda} safra={optionsSafra}  />
            </>
          )
        }
        {
          viewOption === 'fazenda' && (
            <>
              <TablePivotComponent itensTable={dreFazenda} optionView={viewOption} typeColumn={fazendaColumns} ano={optionsAno} mes={optionsMes} fazenda={optionsFazenda} safra={optionsSafra}  />
            </>
          )
        }
      </Box>
    </>
  )
}
export default DRE_RuralProducerPage