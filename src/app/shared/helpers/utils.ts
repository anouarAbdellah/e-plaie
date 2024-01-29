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
}