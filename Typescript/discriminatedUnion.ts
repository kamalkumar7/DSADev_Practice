interface SuccessResponse {
    type: "success"; // The discriminant
    data: any;
  }
  
  interface ErrorResponse {
    type: "error";   // The discriminant
    message: string;
  }
  
  interface LoadingResponse {
    type: "loading"; // The discriminant
    isLoading: boolean;
  }
  
  type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;
  
  function handleResponse(response: ApiResponse) {
    switch (response.type) {
      case "success":
        console.log("Data:", response.data); // TypeScript knows it's a SuccessResponse
        break;
      case "error":
        console.log("Error:", response.message); // TypeScript knows it's an ErrorResponse
        break;
      case "loading":
        console.log("Loading:", response.isLoading); // TypeScript knows it's a LoadingResponse
        break;
      // Exhaustiveness checking! If you add a new type to ApiResponse
      // and forget to handle it here, TypeScript will give you an error
      default:
        const _exhaustiveCheck: never = response;
        return _exhaustiveCheck;
    }
  }