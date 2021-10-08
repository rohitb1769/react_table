import { useState, useEffect } from "react";
import "./App.css";
import Study from "./models/Study";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Services from "./api/Services";
import Switch from "react-switch";
import ColumnMeta from "./models/ColumnsMeta";

function App() {
  const [studyList, setStudyList] = useState<Array<Study>>([]);
  const [columns, setColumns] = useState<Array<ColumnMeta>>([]);

  useEffect(() => {
    if (columns.length < 1) {
      getHeaders();
      getData();
    }
  }, []);

  const studyListBody = {
    sortCriteria: [
      { sortOrder: 1, columnName: "StudyStart", sortDirection: 1 },
    ],
  };

  const sortData = (data: Array<Study>) => {
    return data;
  };

  const getDisplayColumns = (columns: Array<ColumnMeta>): Array<ColumnMeta> => {
    let cols = columns.filter(function (column) {
      return column.isVisible;
    });
    cols = cols.sort((a, b) => (a.order < b.order ? -1 : 1));
    //console.log(cols.);
    return cols;
  };

  const getOnChange = (checked: any, event: any, id: any) => {
    console.log({checked});
    console.log({event});
    console.log({id});
    console.log(columns);
    let cols: ColumnMeta[] = [];
    columns.forEach((col) => {
      let a = col;
      if(a.accessor===id) {
        a.isVisible = checked;
      }
      cols.push(a);
    })
    let a: string[] = [];
    cols.forEach((el)=> {
      a.push(el.accessor);
    });
    console.log(a);
    setColumns(cols);
    //return true;
  };

  const getHeaders = async () => {
    let data = await Services.getStudyListMetadata();
    setColumns(data);
    return data;
  };

  const getData = async () => {
    let data = await Services.getAllStudyLists(studyListBody);
    setStudyList(data);
    return data;
  };

  return (
    <div className="container">
      <div className="filter_class">
        <>
          {columns.map((column) => {
            return (
              //<div className="filters">
              <label className="filters">
                <span className="header_name">{column?.Header}</span>
                <Switch
                  onChange={getOnChange}
                  checked={column.isVisible}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  id={column?.accessor}
                  className="react_switch"
                />
              </label>
              //</div>
            );
          })}
        </>
      </div>
      <div>
        <ReactTable
          data={sortData(studyList)}
          columns={getDisplayColumns(columns)}
          defaultPageSize={10}
          // pageSizeOptions={[2, 4, 6]}
        ></ReactTable>
      </div>
    </div>
  );
}

export default App;
