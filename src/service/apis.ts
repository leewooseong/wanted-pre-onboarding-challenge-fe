import { instance } from '../utils/axios'

const BASE_URL = 'https://wanted-humanscape.herokuapp.com/'

interface IResponse {
  ok: boolean
  error?: string
  result: {
    sickCd: string
    sickNm: string
  }[]
}

export const getDissNameCodeList = (keyword: string) =>
  instance.get<IResponse>(BASE_URL, { params: { searchText: keyword } }).then((res) => res.data.result)
