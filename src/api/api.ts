// api.ts
export const uploadFile = async (file: File): Promise<string> => {
	const API_BASE_URL = ''; // Replace with your actual API base URL
	const endpoint = '/upload'; // Replace with your actual upload endpoint
  
	try {
	  const formData = new FormData();
	  formData.append('file', file);
  
	  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		method: 'POST',
		body: formData,
	  });
  
	  if (response.ok) {
		const responseData = await response.json();
		return responseData.url; // Assuming the server returns the URL of the uploaded file
	  } else {
		throw new Error('File upload failed');
	  }
	} catch (error) {
	  console.error('Error uploading file:', error);
	  throw error;
	}
  };
  