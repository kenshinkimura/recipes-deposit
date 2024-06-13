import { FormData } from '@/types/FormData.ts';

export const getRecipeList = async() => {
    return new Promise <FormData[] >((resolve, reject) => {
        const dataString = localStorage.getItem('formData');

        if (dataString) {
            try {
                const parsedData: FormData[] = JSON.parse(dataString);
                setTimeout(() => {
                    resolve(parsedData);
                }, 20);
            } catch (e) {
                // console.error('Error parsing data:', e);
                reject(e);
            }
        } else {
            reject('No data found in localStorage');
        }
    });
};

export const getRecipeDetail = async(id: string): Promise<FormData | undefined> => {
    return new Promise<FormData | undefined>((resolve, reject) => {
        const dataString = localStorage.getItem('formData');
        if (dataString) {
            try {
                const parsedData: FormData[] = JSON.parse(dataString);
                setTimeout(() => {
                    const detail = parsedData.find(item => item.id === id);
                    resolve(detail);
                }, 20);
            } catch (e) {
                reject(e);
            }
        } else {
            reject('No data found in localStorage');
        }
    });
};
