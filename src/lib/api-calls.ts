import { IApiError, IApiResponse, IValidationError } from "@/lib/models";

async function handleValidationResponse (response: Response) {
  const issues: IValidationError[] = [];
  const data = await response.json() as { error: { code: string; message: string; path: string[] }[] };
  const validationErrors = data.error;

  validationErrors.forEach(error => {
    issues.push({
      rule: error.code,
      message: error.message,
      field: error.path[0],
    });
  });

  return issues;
}

async function handleServerError (response: Response) {
  return await response.json() as IApiError;
}

export async function handleApiCalls<T> (response: Response): Promise<IApiResponse<T>> {
  try {
    if (response.status >= 400 && response.status <= 499) {
      return { validationErrors: await handleValidationResponse(response) };
    }

    if (response.status >= 500) {
      return { error: await handleServerError(response) };
    }

    return { data: await response.json() as T };
  } catch (error) {
    console.error("API call error : ", error);

    return { ...(error ? { error } : {}) } as IApiResponse<T>;
  }
}

