// Exportar funcionalidad
import promptSync from 'prompt-sync';
const prompt = promptSync();

export function getUserName(){
    const result = prompt('Your Name: ');
    return result
}
