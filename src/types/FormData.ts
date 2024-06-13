import { Form } from './Form';

class base64 {
}

export interface FormData {
    formData: Form[];
    id: string;
    recipeName: string;
    description: string;
    photo: base64;
}
