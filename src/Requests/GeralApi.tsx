import React from "react";
import Axios, { AxiosResponse } from "axios";
import { University } from "../Model/University";

export type TUniversityList = University[];

const universityApi = "https://api.meuguru.net/global/university";

export function getUniversityCollection(): Promise<TUniversityList> {
  const response = Axios.get<TUniversityList>(universityApi).then((res) => {
    return res.data;
  });
  return response;
}
