import { AxiosResponse } from "axios";
import { DeleteResponse } from "../../APIResponsesTypes";
import {
  IApartmentProperty,
  ApartmentWID,
} from "../../pages/user/simple/estimations/PropertyType";
import { http } from "../../utils/http.util";

interface IApartmentService {
  getAll: () => Promise<IApartmentProperty[]>;
  store: (property: ApartmentWID) => Promise<AxiosResponse<IApartmentProperty>>;
  delete: (id: string) => Promise<AxiosResponse<DeleteResponse>>;
}

export class ApartmentService implements IApartmentService {
  async getAll() {
    return http
      .get<IApartmentProperty[]>("/estimation/default/appartements/saved")
      .then((res) => res.data);
  }

  async store(property: ApartmentWID) {
    return http.post<IApartmentProperty>(
      "/estimation/default/appartement/save",
      property
    );
  }

  async delete(id: string) {
    return http.delete<DeleteResponse>(
      `/estimation/default/appartements/saved/${id}`
    );
  }
}
