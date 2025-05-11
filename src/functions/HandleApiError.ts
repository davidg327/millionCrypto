import { AxiosError } from 'axios';

export function HandleApiError(error: unknown): never {
  if (error instanceof AxiosError && error.response) {
    const status = error.response.status;
    const data = error.response.data as { error?: string; message?: string };
    if (status === 400) {
      throw "Error de solicitud: datos no válidos";
    } else if (status === 404) {
      throw "No se encontró el servicio";
    } else if (status === 401) {
      throw data?.message;
    } else {
      throw "Error inesperado";
    }
  } else {
    throw `Error: ${error instanceof Error ? error?.message : "desconocido"}`;
  }
}
