const fs = require('fs');

const nombreCarpeta = 'Carpeta';
const nombreArchivo = 'Carpeta/Archivo.txt';
const textoArchivo = 'Ejemplo de archivo de texto!!!';
const carpetaExiste = fs.existsSync(nombreCarpeta);

if (!carpetaExiste) {

    fs.mkdir(nombreCarpeta, (err) => {
        console.log('Carpeta creada');
        fs.createWriteStream(nombreArchivo); 
        console.log('Archivo creado');
        fs.writeFileSync(nombreArchivo, textoArchivo, 'utf-8');
        console.log('Texto insertado');

        const textoArchivoLeido = fs.readFileSync(nombreArchivo, 'utf-8');
        console.log(`Texto ingresado del archivo: ${textoArchivoLeido}`);
         
        if (err) throw err;
    });

} else {

    fs.rm(nombreArchivo, (err) => {
        console.log('Archivo eliminado');
        fs.rmdirSync(nombreCarpeta);
        console.log('Carpeta eliminada');
        
        if (err) throw err;
    });
    
}




