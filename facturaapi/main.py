from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import os
import fitz  # PyMuPDF
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción usar solo tu frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def extraer_texto_pdf(ruta_archivo):
    doc = fitz.open(ruta_archivo)  # abre el PDF
    texto = ""
    for pagina in doc:
        texto += pagina.get_text() + "\n--- PAGINA ---\n"
    doc.close()
    return texto.strip()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # 1. Validar tipo MIME
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Solo se permiten archivos PDF.")

    try:
        # 2. Guardar el archivo
        contents = await file.read()
        file_path = os.path.join(UPLOAD_DIR, file.filename)

        with open(file_path, "wb") as f:
            f.write(contents)

        # 3. Extraer texto
        texto = extraer_texto_pdf(file_path)

        # 4. Devolver respuesta exitosa
        return JSONResponse(
            status_code=201,
            content={
                "filename": file.filename,
                "message": "Archivo procesado correctamente",
                "contenido_extraido": texto
            }
        )

    except Exception as e:
        # 5. Capturar y devolver error
        raise HTTPException(
            status_code=500,
            detail=f"Ocurrió un error al procesar el archivo: {str(e)}"
        )