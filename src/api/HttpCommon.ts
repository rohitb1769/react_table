import axios from "axios";
import Constants from "./Constants";

const tok = "Bearer "+"eyJhbGciOiJSUzI1NiIsImtpZCI6IkRoeGVWYzBM"+
"UXRsLVZnbDl0cFJhckEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2M"+
"zM1MDcwODQsImV4cCI6MTk0OTA3NjM0NCwiaXNzIjoiaHR0cDovL2lkZW"+
"50aXR5c2VydmljZS8iLCJhdWQiOiJFZHVjYXRpb25hbFBsYXRmb3JtIiw"+
"iY2xpZW50X2lkIjoiRWR1Y2F0aW9uYWxQbGF0Zm9ybVNQQSIsInN1YiI6"+
"ImE2NmQxYzQxLTRiZDktNDNkZS1iODJmLTAyNDYxZmJiN2U4OSIsImF1d"+
"GhfdGltZSI6MTYzMzUwNzA4NCwiaWRwIjoibG9jYWwiLCJuYW1lIjoiRGVmY"+
"XVsdCBBZG1pbiIsImdpdmVuX25hbWUiOiJBZG1pbmlzdHJhdG9yIiwiZmFtaW"+
"x5X25hbWUiOiJBY2NvdW50IiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJI"+
"U2l0ZUFkbWluIjoidHJ1ZSIsInNjb3BlIjpbIkFwaS5Vc2VyQWNjZXNzIl0s"+
"ImFtciI6WyJwd2QiXX0.c0pO51g7gBTVuPsm0O1-Y1I00KwXoAuoowQZvV3i9"+
"qOKjv4DdbEL-sUOt8s5liWZKp5X7oMiXQ8EH9ZWeLbV9Vc7UltkDd8pyRRs-h"+
"qNxEm45uVAj0iVCKLNPrTdVn9LmDf6Wa_tEG4KAcTe2gE7As-L2W8OQ4E2Nyu"+
"Ophr705NCmQvdSxjja72ylSJXspvWr8LScrRhRfwllqPrDWAUMNp0D-5_fbyE"+
"pWrPOBPzdb6RklptOVJQ-VM0ozLh4ZEhliUFGwq4WFWbZUx1KTOwX8tE2uU_4yU"+
"_SXAwtpLJNXvgWo027vGSoMyIulN5fqEq6M_OiNJT_FuSh7Kqcup8TA"



export default axios.create({
  baseURL: Constants.API,
  headers: {
    "Content-type": "application/json",
    "Authorization": tok
  }
});