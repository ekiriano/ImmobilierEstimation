import { AxiosResponse } from "axios";
import { DeleteResponse } from "../../APIResponsesTypes";
import {
  IHouseProperty,
  HouseWID,
} from "../../pages/user/simple/estimations/PropertyType";
import { http } from "../../utils/http.util";

interface IHouseService {
  getAll: () => Promise<IHouseProperty[]>;
  store: (property: HouseWID) => Promise<AxiosResponse<IHouseProperty>>;
  delete: (id: string) => Promise<AxiosResponse<DeleteResponse>>;
}

export class HouseService implements IHouseService {
  async getAll() {
    return http
      .get<IHouseProperty[]>("/estimation/default/maisons/saved")
      .then((res) => res.data);
  }

  async store(property: HouseWID) {
    return http.post<IHouseProperty>(
      "/estimation/default/house/save",
      property
    );
  }

  async delete(id: string) {
    return http.delete<DeleteResponse>(
      `/estimation/default/maisons/saved/${id}`
    );
  }
}
