"""Gera o caderno de exercícios em PDF a partir do markdown."""
import re
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor, black, white, grey
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, PageBreak,
                                Table, TableStyle, KeepTogether)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "caderno-exercicios.md"
OUT = ROOT / "caderno-exercicios.pdf"

# Cores alinhadas ao tema do PPTX
ORANGE = HexColor("#F46800")
INK = HexColor("#1F2937")
MUTED = HexColor("#4B5563")
BG_BAND = HexColor("#FFF3E5")
BORDER = HexColor("#E5E7EB")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Helvetica-Bold", fontSize=30, leading=36,
    textColor=ORANGE, spaceAfter=12, alignment=TA_LEFT
))
styles.add(ParagraphStyle(
    name="CoverSub", fontName="Helvetica", fontSize=14, leading=18,
    textColor=INK, spaceAfter=6
))
styles.add(ParagraphStyle(
    name="H1", fontName="Helvetica-Bold", fontSize=20, leading=26,
    textColor=ORANGE, spaceBefore=8, spaceAfter=10
))
styles.add(ParagraphStyle(
    name="H2", fontName="Helvetica-Bold", fontSize=15, leading=20,
    textColor=INK, spaceBefore=14, spaceAfter=6
))
styles.add(ParagraphStyle(
    name="H3", fontName="Helvetica-Bold", fontSize=12, leading=16,
    textColor=ORANGE, spaceBefore=10, spaceAfter=4
))
styles.add(ParagraphStyle(
    name="Body", fontName="Helvetica", fontSize=10.5, leading=15,
    textColor=INK, spaceAfter=6, alignment=TA_JUSTIFY
))
styles.add(ParagraphStyle(
    name="MyCode", fontName="Courier", fontSize=9, leading=12,
    textColor=INK, backColor=BG_BAND, leftIndent=10, rightIndent=10,
    spaceBefore=2, spaceAfter=8, borderPadding=6
))
styles.add(ParagraphStyle(
    name="MyBullet", fontName="Helvetica", fontSize=10.5, leading=15,
    textColor=INK, leftIndent=14, bulletIndent=2, spaceAfter=2
))
styles.add(ParagraphStyle(
    name="Small", fontName="Helvetica", fontSize=9, leading=12,
    textColor=MUTED
))


def md_to_flowables(md_text: str):
    flow = []
    in_code = False
    code_buf = []
    for raw in md_text.splitlines():
        line = raw.rstrip()
        if line.startswith("```"):
            if in_code:
                # fecha bloco
                code = "\n".join(code_buf)
                flow.append(Paragraph(_escape(code).replace("\n", "<br/>"), styles["MyCode"]))
                code_buf = []
                in_code = False
            else:
                in_code = True
            continue
        if in_code:
            code_buf.append(line)
            continue
        if not line:
            flow.append(Spacer(1, 4))
            continue
        if line.startswith("# "):
            flow.append(Paragraph(_escape(line[2:]), styles["H1"]))
        elif line.startswith("## "):
            flow.append(Paragraph(_escape(line[3:]), styles["H2"]))
        elif line.startswith("### "):
            flow.append(Paragraph(_escape(line[4:]), styles["H3"]))
        elif line.startswith("|") and "|" in line[1:]:
            flow.extend(_md_table_to_flowables(line, raw, md_text))
        elif line.startswith("- "):
            flow.append(Paragraph("• " + _inline(_escape(line[2:])), styles["MyBullet"]))
        elif re.match(r"^\d+\.\s", line):
            content = re.sub(r"^\d+\.\s", "", line)
            flow.append(Paragraph("• " + _inline(_escape(content)), styles["MyBullet"]))
        elif line.startswith(">"):
            flow.append(Paragraph(_inline(_escape(line[1:].strip())), styles["Small"]))
        else:
            flow.append(Paragraph(_inline(_escape(line)), styles["Body"]))
    return flow


def _inline(s: str) -> str:
    # converte **bold** e `code` para tags do ReportLab
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"`([^`]+)`", r'<font face="Courier" color="#1F2937">\1</font>', s)
    return s


def _escape(s: str) -> str:
    return (s.replace("&", "&amp;")
             .replace("<", "&lt;")
             .replace(">", "&gt;"))


def _md_table_to_flowables(first_line, raw_line, full_md):
    """Lê tabela markdown (conjunto de linhas começando com |) e renderiza."""
    # Pega linhas vizinhas: para simplicidade, o caller já passou um grupo.
    # Aqui, como fomos chamados a partir de uma linha só, vamos reconstruir
    # lendo do texto completo linhas subsequentes.
    lines = full_md.splitlines()
    idx = lines.index(raw_line)
    table_lines = [raw_line]
    j = idx + 1
    while j < len(lines) and lines[j].startswith("|"):
        table_lines.append(lines[j])
        j += 1
    if len(table_lines) < 2:
        return [Paragraph(_inline(_escape(raw_line)), styles["Body"])]
    # remove separador (linha com ---)
    rows = [r for r in table_lines if not re.match(r"^\|\s*-+", r)]
    data = []
    for r in rows:
        cells = [c.strip() for c in r.strip("|").split("|")]
        data.append([Paragraph(_inline(_escape(c)), styles["Small"]) for c in cells])
    # anota consumo
    _consume = len(table_lines)
    t = Table(data, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), ORANGE),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return [t, Spacer(1, 6)]


def cover_page():
    flow = []
    flow.append(Spacer(1, 4 * cm))
    flow.append(Paragraph("Caderno de Exercícios", styles["CoverTitle"]))
    flow.append(Paragraph("Curso de Grafana — Visualizando dados", styles["CoverSub"]))
    flow.append(Spacer(1, 1 * cm))
    flow.append(Paragraph("Instrutor: Fabio Silva", styles["CoverSub"]))
    flow.append(Paragraph("Carga horária: 16h (4 noites)", styles["CoverSub"]))
    flow.append(Paragraph("18:30 às 22:30, com 20 min de intervalo", styles["CoverSub"]))
    flow.append(Spacer(1, 2 * cm))
    box = Table(
        [[Paragraph("Este caderno contém os exercícios guiados pelo instrutor em cada noite.<br/>"
                    "Imprima ou abra em PDF lado a lado com o terminal.", styles["Body"])]],
        colWidths=[16 * cm]
    )
    box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BG_BAND),
        ("BOX", (0, 0), (-1, -1), 1, ORANGE),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
    ]))
    flow.append(box)
    flow.append(PageBreak())
    return flow


def main():
    doc = SimpleDocTemplate(
        str(OUT), pagesize=A4,
        leftMargin=2 * cm, rightMargin=2 * cm,
        topMargin=2 * cm, bottomMargin=2 * cm,
        title="Caderno de Exercícios — Grafana"
    )
    md = SRC.read_text(encoding="utf-8")
    # Remove o cabeçalho de índice longo (mantém o texto principal)
    flow = cover_page()
    flow.extend(md_to_flowables(md))
    doc.build(flow)
    print(f"OK -> {OUT}")


if __name__ == "__main__":
    main()

