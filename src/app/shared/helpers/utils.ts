export class Utils {
    static convertFileToBase64(file: File | any): Promise<string> {
        if (this.isBase64(file)) {
            return file;
        } else {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = error => reject(error);
              });
        }
        
    }
  
    static async convertFilesToBase64(files: File[]): Promise<string[]> {
        const promises = files.map(file => this.convertFileToBase64(file));
        return Promise.all(promises);
    }

    static isBase64(variable) {
        const base64Regex = /^\s*data:([a-z]+\/[a-z0-9-.+]+)?;base64,[a-z0-9+/]+={0,2}\s*$/i;
        return typeof variable === 'string' && base64Regex.test(variable);
    }

    static generateUniqueId(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = 8; // Length of the ID

        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return result;
    }

    static generateFormData(obj, formData = new FormData(), parentKey = '', parentIsArray = false): FormData {
        
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              let arrayKey = parentIsArray ? `${parentKey}[${key}]` : `${parentKey}${key}`;
        
              if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                  if (typeof item === 'object' && !(item instanceof File) && !(item instanceof Date)) {
                    this.generateFormData(item, formData, `${arrayKey}[${index}]`, true);
                  } else {
                    if (item instanceof Date) {
                      formData.append(`${arrayKey}[${index}]`, item.toISOString());
                    } else {
                      formData.append(`${arrayKey}[${index}]`, item);
                    }
                  }
                });
              } else if (typeof obj[key] === 'object' && !(obj[key] instanceof File) && !(obj[key] instanceof Date)) {
                this.generateFormData(obj[key], formData, `${arrayKey}`, true);
              } else {
                if (obj[key] instanceof Date) {
                  formData.append(arrayKey, obj[key].toISOString());
                } else {
                  formData.append(arrayKey, obj[key]);
                }
              }
            }
          }
          return formData;
    }
}