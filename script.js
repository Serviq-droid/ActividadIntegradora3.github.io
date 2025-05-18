function descargarInforme() {
    const enlace = document.createElement('a');
    enlace.href = 'Estructura/INFORME DE ACTIVIDADES FINAL (2).pdf';
    enlace.download = 'Informe_de_actividades_final.pdf';
    enlace.click();
  }
  