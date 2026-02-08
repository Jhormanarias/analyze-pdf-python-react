import pdfplumber
import re
import pandas as pd
import json

def extraer_precios(pdf_path):
    productos = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()  # Extrae tablas si el catálogo las tiene[web:19]
            if tables:
                df = pd.DataFrame(tables[0][1:], columns=tables[0][0])  # Asume primera fila como headers
                for _, row in df.iterrows():
                    precio_match = re.search(r'\$?(\d+(?:,\d{3})*(?:\.\d{2})?)', str(row))  # Regex para precios como $1,234.56 o 1234.56[web:3][web:9]
                    if precio_match:
                        productos.append({
                            'producto': row.get('Producto', 'N/A'),  # Ajusta columnas según tu PDF
                            'precio_original': float(precio_match.group(1).replace(',', '')),
                            'pagina': page.page_number
                        })
            else:
                text = page.extract_text()
                # Fallback: regex en texto plano para listas[web:3]
                for linea in text.split('\n'):
                    precio_match = re.search(r'(.+?)\s*\$?(\d+(?:,\d{3})*(?:\.\d{2})?)', linea)
                    if precio_match:
                        productos.append({
                            'producto': precio_match.group(1).strip(),
                            'precio_original': float(precio_match.group(2).replace(',', ''))
                        })
    return productos

""" import pdfplumber
import re
import pandas as pd
import json
from pdfminer.high_level import extract_pages, extract_text

def extraer_precios(pdf_path):
    productos = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            words = page.extract_words(x_tolerance=2, y_tolerance=5, keep_blank_chars=False)  # Palabras con posiciones[web:19][web:62]
            
            # Ordena por y0 (vertical), luego x0 (horizontal)
            words.sort(key=lambda w: (w['top'], w['x0']))
            
            i = 0
            while i < len(words):
                word = words[i]
                texto = word['text'].strip()
                precio_match = re.search(r'(\d+(?:,\d{3})*(?:\.\d{2})?)', texto)
                
                if precio_match:  # Es precio
                    precio = float(precio_match.group(1).replace(',', ''))
                    # Busca nombre arriba (mismo x, y cercana)
                    nombre = []
                    j = i - 1
                    while j >= 0 and words[j]['top'] > word['top'] - 50 and abs(words[j]['x0'] - word['x0']) < 100:
                        nombre.append(words[j]['text'])
                        j -= 1
                    nombre = ' '.join(reversed(nombre)).strip()
                    
                    if nombre:
                        productos.append({
                            'producto': nombre,
                            'precio_original': precio,
                            'pagina': page_num
                        })
                
                i += 1
    return productos """

""" def extractPdf():
    for page_layout in extract_pages("uploads/LISTA 6 DE FEBRERO DE 2026_portatiles.pdf"):
        for element in page_layout:
            print(element)

text=extract_text("uploads/LISTA 6 DE FEBRERO DE 2026_portatiles.pdf")
print(text)
 """