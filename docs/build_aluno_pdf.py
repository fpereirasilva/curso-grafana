"""Adiciona marca d'água "Cópia do Aluno" e cabeçalho/rodapé em cada página
do PDF gerado a partir do PPTX, para diferenciar a versão do instrutor."""
from pathlib import Path
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.colors import HexColor, Color
from io import BytesIO

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "Grafana_Visualizando_Dados_V1.pdf"
OUT_INSTRUTOR = ROOT / "Grafana_Visualizando_Dados_V1_instrutor.pdf"
OUT_ALUNO = ROOT / "Grafana_Visualizando_Dados_V1_aluno.pdf"

# Landscape A4 = 842 x 595 pt
PAGE_W, PAGE_H = landscape(A4)


def make_overlay(text, color=Color(1, 0.4, 0, alpha=0.18), rotate=30, font_size=72):
    """Cria um PDF temporário com o texto como marca d'água diagonal."""
    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=landscape(A4))
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", font_size)
    c.translate(PAGE_W / 2, PAGE_H / 2)
    c.rotate(rotate)
    c.drawCentredString(0, 0, text)
    c.save()
    buf.seek(0)
    return buf


def add_footer_overlay(text, color=HexColor("#1F2937"), font_size=8):
    """Adiciona um rodapé institucional em cada página."""
    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=landscape(A4))
    c.setFillColor(color)
    c.setFont("Helvetica", font_size)
    c.drawString(20, 20, text)
    c.drawRightString(PAGE_W - 20, 20, "Grafana — Visualizando Dados  |  v1.0")
    c.save()
    buf.seek(0)
    return buf


def stamp(input_pdf: Path, output_pdf: Path, overlay_pdf: BytesIO):
    reader = PdfReader(str(input_pdf))
    writer = PdfWriter()
    overlay_page = PdfReader(overlay_pdf).pages[0]
    footer_pdf = add_footer_overlay("Material do aluno — uso pessoal, sem redistribuição")
    footer_page = PdfReader(footer_pdf).pages[0]
    for page in reader.pages:
        # watermark
        page.merge_page(overlay_page)
        # footer
        page.merge_page(footer_page)
        writer.add_page(page)
    with open(output_pdf, "wb") as f:
        writer.write(f)


def main():
    # Versão instrutor: limpa, sem marca d'água
    instrutor_pdf = PdfReader(str(SRC))
    w = PdfWriter()
    footer_pdf = add_footer_overlay("Material do instrutor — versão de apresentação", color=HexColor("#F46800"))
    footer_page = PdfReader(footer_pdf).pages[0]
    for page in instrutor_pdf.pages:
        page.merge_page(footer_page)
        w.add_page(page)
    with open(OUT_INSTRUTOR, "wb") as f:
        w.write(f)
    print(f"OK instrutor -> {OUT_INSTRUTOR}")

    # Versão aluno: marca d'água diagonal
    aluno_overlay = make_overlay("CÓPIA DO ALUNO")
    stamp(SRC, OUT_ALUNO, aluno_overlay)
    print(f"OK aluno      -> {OUT_ALUNO}")


if __name__ == "__main__":
    main()
