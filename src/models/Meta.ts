export default interface Meta {
  data: [];
  pagedMetaData: {
    pageNumber: number;
    pageSize: number;
    nextPage: string|null;
    previousPage: number|null;
    totalRecords: number;
  };
}
