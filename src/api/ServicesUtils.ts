import React from "react";
import ColumnMeta from "../models/ColumnsMeta";
import Study from "../models/Study";

const mapStudyList = (studies: Array<any>): Array<Study> => {
  return studies.map(function (study) {
    let stu = {
      studyStart:
        study[1].studyStart?.primaryValue ||
        study[1].studyStart?.secondaryValue,
      totalTimeSpan:
        study[1].totalTimeSpan?.primaryValue ||
        study[1].totalTimeSpan?.secondaryValue,
      studyType:
        study[1].studyType?.primaryValue || study[1].studyType?.secondaryValue,
      studyStatus:
        study[1].studyStatus?.primaryValue ||
        study[1].studyStatus?.secondaryValue,
      name: study[1].name?.primaryValue || study[1].name?.secondaryValue,
      recordedTimeSpan:
        study[1].recordedTimeSpan?.primaryValue ||
        study[1].recordedTimeSpan?.secondaryValue,
      identityString:
        study[1].identityString?.primaryValue ||
        study[1].identityString?.secondaryValue,
      dateOfBirth:
        study[1].dateOfBirth?.primaryValue ||
        study[1].dateOfBirth?.secondaryValue,
      ageAtStudy:
        study[1].ageAtStudy?.primaryValue ||
        study[1].ageAtStudy?.secondaryValue,
      indicationForEeg:
        study[1].indicationForEeg?.primaryValue ||
        study[1].indicationForEeg?.secondaryValue,
      clinicalDiagnosis:
        study[1].clinicalDiagnosis?.primaryValue ||
        study[1].clinicalDiagnosis?.secondaryValue,
      diagnosticSignificance:
        study[1].diagnosticSignificance?.primaryValue ||
        study[1].diagnosticSignificance?.secondaryValue,
      clinicalComments:
        study[1].clinicalComments?.primaryValue ||
        study[1].clinicalComments?.secondaryValue,
      summary:
        study[1].summary?.primaryValue || study[1].summary?.secondaryValue,
      lastEpisode:
        study[1].lastEpisode?.primaryValue ||
        study[1].lastEpisode?.secondaryValue,
      episodeFrequency:
        study[1].episodeFrequency?.primaryValue ||
        study[1].episodeFrequency?.secondaryValue,
      medication:
        study[1].medication?.primaryValue ||
        study[1].medication?.secondaryValue,
      brainMriCt:
        study[1].brainMriCt?.primaryValue ||
        study[1].brainMriCt?.secondaryValue,
      functionalNeuroimaging:
        study[1].functionalNeuroimaging?.primaryValue ||
        study[1].functionalNeuroimaging?.secondaryValue,
      medicationAdministeredDuringTheRecording:
        study[1].medicationAdministeredDuringTheRecording?.primaryValue ||
        study[1].medicationAdministeredDuringTheRecording?.secondaryValue,
      medicationWithdrawal:
        study[1].medicationWithdrawal?.primaryValue ||
        study[1].medicationWithdrawal?.secondaryValue,
      latestMeal:
        study[1].latestMeal?.primaryValue ||
        study[1].latestMeal?.secondaryValue,
      alertness:
        study[1].alertness?.primaryValue || study[1].alertness?.secondaryValue,
      studyEnd:
        study[1].studyEnd?.primaryValue || study[1].studyEnd?.secondaryValue,
      externalDatabase:
        study[1].externalDatabase?.primaryValue ||
        study[1].externalDatabase?.secondaryValue,
      postmenstrualAge:
        study[1].postmenstrualAge?.primaryValue ||
        study[1].postmenstrualAge?.secondaryValue,
      correctedAgeAtStudy:
        study[1].correctedAgeAtStudy?.primaryValue ||
        study[1].correctedAgeAtStudy?.secondaryValue,
      postMenstrualAgeAtStudy:
        study[1].postMenstrualAgeAtStudy?.primaryValue ||
        study[1].postMenstrualAgeAtStudy?.secondaryValue,
      externalStudyId:
        study[1].externalStudyId?.primaryValue ||
        study[1].externalStudyId?.secondaryValue,
      studyName:
        study[1].studyName?.primaryValue || study[1].studyName?.secondaryValue,
      scalfDefects:
        study[1].scalfDefects?.primaryValue ||
        study[1].scalfDefects?.secondaryValue,
      studyNotes:
        study[1].studyNotes?.primaryValue ||
        study[1].studyNotes?.secondaryValue,
    };
    return stu;
  });
};

const getColumnsMeta = (res: Array<any>): Array<ColumnMeta> => {
  return res.map(function (meta) {
    let colMeta = {
      isVisible: meta.isVisible,
      Header: meta.name.primaryValue || meta.name.secondaryValue,
      accessor: meta.propertyName || meta.propertyName,
      order: meta.order,
    };
    return colMeta;
  });
};

const ServicesUtils = {
  mapStudyList,
  getColumnsMeta,
};
export default ServicesUtils;
