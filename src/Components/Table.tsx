import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { getUniversityCollection, TUniversityList } from "../Requests/GeralApi";

export default function DataTable() {
  const [data, setData] = React.useState<TUniversityList>([]);

  function StructObjectId(): void {
    getUniversityCollection()
      .then((data) => {
        const newArrayObject = data.map((item, indice) => ({
          id: indice + 1,
          Name: item.Name || "NOME NÃO ENCONTRADO",
          Initial: item.Initial || "INICIAL NÃO ENCONTRADA",
          Region: item.Region || "REGIÃO NÃO ENCONTRADA",
          State: item.State || "ESTADO NÃO ENCONTRADO",
          RegionType: item.RegionType || "TIPO DE REGIÃO NÃO ENCONTRADO",
          Type: item.Type || "TIPO NÃO ENCONTRADO"
        }));
        setData(newArrayObject);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Não foi obtido resposta do servidor.");
        } else if (error.request) {
          console.log("Erro a tentar requisitar dados");
        } else {
          console.log("Error", error.message);
        }
      });
  }

  React.useEffect(() => {
    StructObjectId();
  }, []);

  const columns: GridColDef[] = [
    { field: "Name", headerName: "Name", width: 250, headerAlign: "center" },
    {
      field: "Initial",
      headerName: "Inicial",
      width: 350,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "Region",
      headerName: "Region",
      align: "center",
      width: 350,
      headerAlign: "center"
    },
    {
      field: "State",
      headerName: "State",
      align: "center",
      width: 350,
      headerAlign: "center"
    },
    {
      field: "RegionType",
      align: "center",
      headerName: "RegionType",
      headerAlign: "center",
      width: 350
    },
    {
      field: "Type",
      align: "center",
      headerName: "Type",
      headerAlign: "center",
      width: 350
    }
  ];

  return (
    <div
      style={{
        height: "90vh",
        width: "auto",
        minWidth: "auto",
        margin: "30px"
      }}
    >
      <DataGrid
        rows={data ? data : []}
        columns={columns ? columns : []}
        pageSize={30}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
