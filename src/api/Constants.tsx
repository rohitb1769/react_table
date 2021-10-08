import React from 'react';

const API = "https://api.f3.k.scoreeeg.com";
const API_TOKEN = "/api/v1/account/token";
const API_STUDYLIST_INFO = "/api/v1/studyList/metaInfo";
const API_STUDYLIST = "/api/v1/studyList";
const API_STUDYLIST_PAGE_SIZE = (number:number,size:number) => { return "/api/v1/studyList?PageNumber=" + number +"&PageSize=" + size};
const API_STUDYLIST_PAGES = (number:number) => { return "/api/v1/studyList?PageNumber=" + number +"&PageSize=20"};

const Constants = {
    API,
    API_TOKEN,
    API_STUDYLIST_INFO,
    API_STUDYLIST,
    API_STUDYLIST_PAGE_SIZE,
    API_STUDYLIST_PAGES
}

export default Constants;