
const ramos = {
  "Introducción al Cálculo": ["Cálculo Diferencial e Integral"],
  "Introducción al Álgebra": ["Álgebra Lineal"],
  "Introducción a la Física Clásica": ["Física Moderna"],
  "Herramientas Computacionales": ["Introducción a la Programación"],
  "Desafíos de Innovación": ["Proyecto de Innovación"],
  "Cálculo Diferencial e Integral": ["Cálculo en Varias Variables"],
  "Álgebra Lineal": ["Ecuaciones Diferenciales Ordinarias", "Cálculo Avanzado y Aplicaciones", "Modelamiento y Optimización"],
  "Física Moderna": ["Mecánica", "Métodos Experimentales"],
  "Introducción a la Programación": ["Módulo Interdisciplinario"],
  "Cálculo en Varias Variables": ["Economía", "Probabilidades", "Cálculo Avanzado y Aplicaciones"],
  "Ecuaciones Diferenciales Ordinarias": ["Electromagnetismo"],
  "Economía": ["Macroeconomía"],
  "Cálculo Avanzado y Aplicaciones": ["Estadística"],
  "Módulo Interdisciplinario": ["Taller de Liderazgo e Innovación Social"],
  "Modelamiento y Optimización": ["Decisiones Bajo Incertidumbre", "Gestión de Operaciones"],
  "Taller de Liderazgo e Innovación Social": ["Práctica Profesional"],
  "Probabilidades": ["Evaluación de Proyectos", "Estadística", "Teoría de Juegos y Estrategia"],
  "Decisiones Bajo Incertidumbre": ["Ingeniería de la Información"],
  "Estadística": ["Análisis de Datos e Inferencia Causal", "Marketing"],
  "Evaluación de Proyectos": ["Finanzas"],
  "Análisis de Datos e Inferencia Causal": ["Dirección Estratégica"],
  "Práctica Profesional": ["Práctica Profesional Extendida"],
  "Gestión de Operaciones": ["Taller de Concepción y Diseño de Proyectos"],
  "Dirección Estratégica": ["Proyecto de Título"],
  "Examen de Suficiencia en Inglés I": ["Examen de Suficiencia en Inglés II"]
};

const malla = {
  "Primer Año": {
    "Semestre I": [
      "Introducción al Cálculo", "Introducción al Álgebra", "Introducción a la Física Clásica",
      "Herramientas Computacionales", "Desafíos de Innovación", "Aplicaciones de la Biología"
    ],
    "Semestre II": [
      "Cálculo Diferencial e Integral", "Álgebra Lineal", "Física Moderna",
      "Introducción a la Programación", "Proyecto de Innovación", "Curso de Formación General"
    ]
  },
  "Segundo Año": {
    "Semestre III": [
      "Cálculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias",
      "Métodos Experimentales", "Mecánica", "Química"
    ],
    "Semestre IV": [
      "Economía", "Cálculo Avanzado y Aplicaciones", "Electromagnetismo",
      "Termodinámica / Termodinámica Química", "Módulo Interdisciplinario",
      "Formación General (Humanistas, Idiomas, Deportes)"
    ]
  },
  "Tercer Año": {
    "Semestre V": [
      "Modelamiento y Optimización", "Taller de Liderazgo e Innovación Social",
      "Probabilidades", "Electivo", "Formación Integral"
    ],
    "Semestre VI": [
      "Decisiones Bajo Incertidumbre", "Teoría de Juegos y Estrategia",
      "Estadística", "Evaluación de Proyectos", "Electivo"
    ]
  },
  "Cuarto Año": {
    "Semestre VII": [
      "Taller de Concepción y Diseño de Proyectos", "Macroeconomía",
      "Análisis de Datos e Inferencia Causal", "Ingeniería de la Información",
      "Electivo", "Práctica Profesional"
    ],
    "Semestre VIII": [
      "Gestión de Operaciones", "Marketing", "Finanzas", "Electivos"
    ]
  },
  "Quinto Año": {
    "Semestre IX": [
      "Especialización", "Dirección Estratégica", "Comportamiento Organizacional",
      "Electivo de Especialidad"
    ],
    "Semestre X": [
      "Especialización", "Electivos de Especialidad"
    ]
  },
  "Sexto Año": {
    "Semestre XI": [
      "Proyecto de Título", "Práctica Profesional Extendida", "Examen de Suficiencia en Inglés II"
    ]
  }
};

const container = document.getElementById("malla-container");
const estado = {};

for (const anio in malla) {
  const anioDiv = document.createElement("div");
  anioDiv.className = "anio";
  anioDiv.textContent = anio;
  container.appendChild(anioDiv);

  for (const semestre in malla[anio]) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    semestreDiv.appendChild(titulo);

    malla[anio][semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo;
      div.onclick = () => {
        div.classList.toggle("aprobado");
        estado[ramo] = div.classList.contains("aprobado");
        desbloquear();
      };
      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  }
}

function desbloquear() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.textContent;
    if (!estado[nombre]) {
      div.classList.remove("aprobado");
    }
  });

  for (const aprobado in estado) {
    if (estado[aprobado] && ramos[aprobado]) {
      ramos[aprobado].forEach(destino => {
        const todos = [...document.querySelectorAll(".ramo")];
        const desbloqueado = todos.find(r => r.textContent === destino);
        if (desbloqueado) {
          desbloqueado.classList.add("aprobado");
          estado[destino] = true;
        }
      });
    }
  }
}
