import ColumnMeta from "../models/ColumnsMeta";
import Meta from "../models/Meta";
import Constants from "./Constants";
import http from "./HttpCommon";
import ServicesUtils from "./ServicesUtils";

const initialStudy:Meta ={data:[],pagedMetaData:{
    pageNumber: 0,
    pageSize: 20,
    nextPage: null,
    previousPage: null,
    totalRecords: 0
  }};

const initialMetada:ColumnMeta = {
    isVisible: false,
    Header: "",
    accessor: "",
    order: 0
}

const getAuthentication = (body: Object) => {
    return http.post(Constants.API_TOKEN, body);
}

const getStudyListMetadata = async() => {
    let res = {columnsMetaInformation:[]};
    await http.get(Constants.API_STUDYLIST_INFO)
    .then((response: any) => {
        res = response.data;
      })
      .catch((e: any) => {
        console.log(e);
        return e;
      });
      let columns:Array<ColumnMeta> = ServicesUtils.getColumnsMeta(res.columnsMetaInformation);
      //console.log(res);
    return columns;
}

const getStudyLists = async( body: Object) => {
    let result =  await getStudyListsPage(Constants.API_STUDYLIST, body);
    return ServicesUtils.mapStudyList(Object.entries(result));
}

const getStudyListsPage = async( url:string, body: Object) => {
    let data:Meta = initialStudy;
    await http.post(url, body)
    .then((response: any) => {
        data = response.data;
      })
      .catch((e: any) => {
        console.log(e);
        return e;
      });
     return data;
}

const getAllStudyLists = async( body: Object) => {
    let data=await getStudyListsPage(Constants.API_STUDYLIST,body);
    let result:Array<Meta> = [];
    result = data.data;
    for (let num = Number(data.pagedMetaData.pageNumber)+1; num <(data.pagedMetaData.totalRecords/data.pagedMetaData.pageSize);num++) {
        let url = Constants.API_STUDYLIST_PAGES(num);
        let pageRes = await getStudyListsPage(url, body);
        result = [...result, ...pageRes.data]
    }
    return ServicesUtils.mapStudyList(Object.entries(result));
}

const Services = {
    getAuthentication,
    getStudyListMetadata,
    getAllStudyLists
}

export default Services;

