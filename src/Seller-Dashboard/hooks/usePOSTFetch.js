
export const usePOSTFetch = async (inputOBJ, URL, productImages) => {
    
    const formData = new FormData();

    for (const key in inputOBJ) {
        
        formData.set(`${key}`, inputOBJ[key]);
    } 
    if (productImages) {
        Object.keys(productImages).map((imageFile, index) => {
            formData.set(`productImage${index + 1}`, productImages[imageFile]);
        })
    }

    const OPTIONS = {
        method: 'POST',
        body: formData
    }

    const postRequest = new Request(URL, OPTIONS);
    const response = await fetch(postRequest);
    const data = await response.json();

    return data;
}
