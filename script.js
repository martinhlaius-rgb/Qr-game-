// Datos del Juego - Preguntas sobre seguridad en internet para niños de 11 años
const preguntasJuego = [
    {
        pregunta: "¿Cuál es la mejor práctica para crear una contraseña segura?",
        opciones: [
            "Usar tu nombre o fecha de nacimiento",
            "Usar una combinación de letras, números y símbolos, sin información personal",
            "Usar una contraseña muy corta pero fácil de recordar",
            "Compartir tu contraseña con tus amigos"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Una contraseña segura debe tener letras, números y símbolos, y nunca debe contener información personal como tu nombre o fecha de nacimiento.",
        consejos: "💡 Consejo: Usa contraseñas diferentes para cada cuenta importante."
    },
    {
        pregunta: "¿Qué debes hacer si un extraño te pide información personal en internet?",
        opciones: [
            "Compartirla porque es seguro en internet",
            "Decirle la verdad para ser amable",
            "Rechazar y avisar a un adulto de confianza",
            "Responder solo si parece una persona agradable"
        ],
        correcta: 2,
        explicacion: "¡Correcto! Nunca debes compartir información personal con extraños en internet. Siempre debes avisar a un adulto de confianza.",
        consejos: "💡 Consejo: Información personal incluye tu nombre completo, dirección, teléfono y escuela."
    },
    {
        pregunta: "¿Es seguro hacer clic en enlaces de correos electrónicos desconocidos?",
        opciones: [
            "Sí, siempre es seguro",
            "No, pueden ser virus o trampas para robarte información",
            "Sí, si el correo se ve profesional",
            "Sí, especialmente si promete un premio"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Estos correos (phishing) pueden contener virus o ser trampas. Siempre verifica el remitente antes de hacer clic.",
        consejos: "💡 Consejo: Si no reconoces al remitente, no hagas clic en sus enlaces."
    },
    {
        pregunta: "¿Qué información es seguro compartir en tus redes sociales?",
        opciones: [
            "Tu ubicación exacta y horarios de clases",
            "Tu número de teléfono y dirección",
            "Tus intereses, hobbies y fotos apropiadas (sin información personal)",
            "Tu contraseña para que tus amigos puedan acceder"
        ],
        correcta: 2,
        explicacion: "¡Correcto! Puedes compartir tus intereses y hobbies, pero nunca tu ubicación, horarios o información de contacto personal.",
        consejos: "💡 Consejo: Revisa las configuraciones de privacidad de tus redes sociales regularmente."
    },
    {
        pregunta: "¿Qué haces si ves contenido inapropiado o que te asusta en internet?",
        opciones: [
            "Guárdalo en secreto",
            "Comparte el contenido con más amigos",
            "Dile a un adulto de confianza inmediatamente",
            "Ignóralo y continúa navegando"
        ],
        correcta: 2,
        explicacion: "¡Correcto! Siempre debes contarle a un adulto de confianza como tus padres, maestros o consejeros.",
        consejos: "💡 Consejo: Los adultos pueden ayudarte a reportar contenido inapropiado a las plataformas."
    },
    {
        pregunta: "¿Es buena idea usar la misma contraseña para todas tus cuentas?",
        opciones: [
            "Sí, así es más fácil de recordar",
            "No, debes usar contraseñas diferentes para cada cuenta importante",
            "Solo para redes sociales está bien",
            "Sí, pero cambiándola ligeramente en cada cuenta"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Usar contraseñas diferentes es muy importante. Si una cuenta se compromete, las otras permanecen seguras.",
        consejos: "💡 Consejo: Puedes usar un administrador de contraseñas para ayudarte a recordarlas."
    },
    {
        pregunta: "¿Qué significa 'ciberacoso' (cyberbullying)?",
        opciones: [
            "Una nueva aplicación de redes sociales",
            "Acoso o intimidación que ocurre en internet o por dispositivos electrónicos",
            "Un tipo de virus informático",
            "Un juego en línea popular"
        ],
        correcta: 1,
        explicacion: "¡Correcto! El ciberacoso es cuando alguien te intimida, burla o amenaza a través de internet.",
        consejos: "💡 Consejo: Si sufres ciberacoso, no respondas, guarda evidencia y cuéntale a un adulto."
    },
    {
        pregunta: "¿Es seguro descargar archivos de sitios desconocidos?",
        opciones: [
            "Sí, siempre",
            "No, pueden contener virus o malware",
            "Sí, solo si están en formato .exe",
            "Sí, si el sitio tiene muchas visitas"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Los archivos descargados pueden contener virus. Solo descarga de sitios confiables y oficiales.",
        consejos: "💡 Consejo: Siempre pide permiso a un adulto antes de descargar algo."
    },
    {
        pregunta: "¿Cuál es una buena práctica cuando usas Wi-Fi público?",
        opciones: [
            "Compartir todo tu contenido sin preocupaciones",
            "Evitar hacer transacciones bancarias o compartir información sensible",
            "Conectarse es completamente seguro",
            "Usar cualquier red sin verificar"
        ],
        correcta: 1,
        explicacion: "¡Correcto! El Wi-Fi público no es seguro. Evita usar información personal o bancaria en redes públicas.",
        consejos: "💡 Consejo: Usa VPN o espera a estar en una red segura para transacciones importantes."
    },
    {
        pregunta: "¿Qué debes hacer si alguien en línea te pide que te encuentres con ellos?",
        opciones: [
            "Ir directamente sin decirle a nadie",
            "Decirle que sí pero no ir",
            "Informar inmediatamente a tus padres o un adulto de confianza",
            "Preguntarle más información personal primero"
        ],
        correcta: 2,
        explicacion: "¡Correcto! Nunca debes reunirte con alguien que conociste en línea sin avisar a tus padres.",
        consejos: "💡 Consejo: Las personas en línea no siempre son quiénes dicen ser. Siempre informa a adultos."
    }
];

// Estado del Juego
let estadoJuego = {
    preguntaActual: 0,
    puntos: 0,
    nivel: 1,
    vidas: 3,
    enPausa: false,
    respuestas: [],
    logros: []
};

// Iniciar Juego
function iniciarJuego() {
    estadoJuego = {
        preguntaActual: 0,
        puntos: 0,
        nivel: 1,
        vidas: 3,
        enPausa: false,
        respuestas: [],
        logros: []
    };
    mostrarPantallaDeTienda();
    cargarPregunta();
}

// Mostrar Pantallas
function mostrarBienvenida() {
    document.getElementById('welcomeScreen').classList.add('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('endScreen').classList.remove('active');
}

function mostrarPantallaDeTienda() {
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    document.getElementById('endScreen').classList.remove('active');
}

function mostrarPantallaFinal() {
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('endScreen').classList.add('active');
    mostrarPantallaFinal();
}

// Cargar y Mostrar Pregunta
function cargarPregunta() {
    const pregunta = preguntasJuego[estadoJuego.preguntaActual];
    
    document.getElementById('questionNum').textContent = estadoJuego.preguntaActual + 1;
    document.getElementById('question').textContent = pregunta.pregunta;
    
    pregunta.opciones.forEach((opcion, index) => {
        document.getElementById(`option${index}`).textContent = opcion;
        const btn = document.querySelector(`.option-btn:nth-child(${index + 1})`);
        btn.classList.remove('correct', 'incorrect', 'disabled');
        btn.style.pointerEvents = 'auto';
    });
    
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').classList.remove('correct', 'incorrect');
    
    actualizarPlacar();
}

// Seleccionar Respuesta
function seleccionarRespuesta(index) {
    if (estadoJuego.enPausa) return;
    
    const pregunta = preguntasJuego[estadoJuego.preguntaActual];
    const esCorrecta = index === pregunta.correcta;
    
    // Desactivar todas las opciones
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.style.pointerEvents = 'none';
        if (i === pregunta.correcta) {
            btn.classList.add('correct');
        }
    });
    
    // Mostrar retroalimentación
    const feedback = document.getElementById('feedback');
    if (esCorrecta) {
        feedback.classList.add('correct');
        feedback.innerHTML = `<div>✅ ${pregunta.explicacion}<br><small>${pregunta.consejos}</small></div>`;
        estadoJuego.puntos += 10;
        
        // Verificar si sube de nivel
        if ((estadoJuego.preguntaActual + 1) % 4 === 0) {
            estadoJuego.nivel++;
            agregarLogro(`🎖️ Nivel ${estadoJuego.nivel}`);
        }
    } else {
        feedback.classList.add('incorrect');
        document.querySelector(`.option-btn:nth-child(${index + 1})`).classList.add('incorrect');
        feedback.innerHTML = `<div>❌ Respuesta Incorrecta<br><strong>${pregunta.explicacion}</strong><br><small>${pregunta.consejos}</small></div>`;
        estadoJuego.vidas--;
        
        if (estadoJuego.vidas <= 0) {
            setTimeout(() => {
                alert('¡Juego Terminado! No te desanimes, aprendiste mucho. 💪');
                mostrarPantallaFinal();
            }, 2000);
            return;
        }
    }
    
    estadoJuego.respuestas.push({
        pregunta: pregunta.pregunta,
        respuestaUsuario: pregunta.opciones[index],
        respuestaCorrecta: pregunta.opciones[pregunta.correcta],
        esCorrecta: esCorrecta
    });
    
    actualizarPlacar();
    
    // Siguiente pregunta
    setTimeout(() => {
        estadoJuego.preguntaActual++;
        if (estadoJuego.preguntaActual < preguntasJuego.length) {
            cargarPregunta();
        } else {
            mostrarPantallaFinal();
        }
    }, 3000);
}

// Actualizar Placar
function actualizarPlacar() {
    document.getElementById('score').textContent = estadoJuego.puntos;
    document.getElementById('level').textContent = estadoJuego.nivel;
    document.getElementById('lives').textContent = estadoJuego.vidas;
}

// Pausar/Reanudar
function pausarJuego() {
    estadoJuego.enPausa = true;
    document.getElementById('pauseModal').classList.add('show');
}

function reanudarJuego() {
    estadoJuego.enPausa = false;
    document.getElementById('pauseModal').classList.remove('show');
}

function reiniciarJuego() {
    document.getElementById('pauseModal').classList.remove('show');
    iniciarJuego();
}

// Pantalla Final
function mostrarPantallaFinal() {
    const porcentaje = (estadoJuego.puntos / (preguntasJuego.length * 10)) * 100;
    let mensaje = '';
    let emoji = '';
    
    if (porcentaje >= 90) {
        mensaje = '¡EXCELENTE! Eres un experto en seguridad en internet 🌟';
        emoji = '🏆';
        agregarLogro('🌟 Experto en Seguridad');
    } else if (porcentaje >= 70) {
        mensaje = '¡MUY BIEN! Tienes buenos conocimientos de seguridad 👏';
        emoji = '🎉';
        agregarLogro('🎯 Muy Seguro');
    } else if (porcentaje >= 50) {
        mensaje = 'Bien hecho, pero puedes mejorar. ¡Intenta de nuevo!';
        emoji = '💪';
        agregarLogro('🚀 En Progreso');
    } else {
        mensaje = 'Necesitas aprender más sobre seguridad. ¡Sigue practicando!';
        emoji = '📚';
        agregarLogro('🌱 Principiante');
    }
    
    document.getElementById('endTitle').textContent = `${emoji} ${mensaje}`;
    document.getElementById('finalScore').textContent = estadoJuego.puntos;
    document.getElementById('endMessage').textContent = `Respondiste correctamente ${Math.round(porcentaje)}% de las preguntas.`;
    
    mostrarLogros();
}

// Logros
function agregarLogro(logro) {
    if (!estadoJuego.logros.includes(logro)) {
        estadoJuego.logros.push(logro);
    }
}

function mostrarLogros() {
    const lista = document.getElementById('achievementsList');
    lista.innerHTML = '';
    estadoJuego.logros.forEach(logro => {
        const insignia = document.createElement('div');
        insignia.className = 'achievement-badge';
        insignia.textContent = logro;
        lista.appendChild(insignia);
    });
}

// Código QR
function mostrarCodigoQR() {
    const url = window.location.href;
    document.getElementById('urlInput').value = url;
    
    // Generar Código QR
    document.getElementById('qrCode').innerHTML = '';
    new QRCode(document.getElementById('qrCode'), {
        text: url,
        width: 250,
        height: 250,
        colorDark: '#667eea',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    document.getElementById('qrModal').classList.add('show');
}

function cerrarModalQR() {
    document.getElementById('qrModal').classList.remove('show');
}

function copiarURL() {
    const urlInput = document.getElementById('urlInput');
    urlInput.select();
    document.execCommand('copy');
    alert('¡URL copiada al portapapeles! 📋');
}

// Compartir Puntuación
function compartirPuntuacion() {
    const texto = `¡Acabo de jugar Guardián de Internet y obtuve ${estadoJuego.puntos} puntos! 🎮 ¿Puedes superarme? ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Guardián de Internet',
            text: texto
        });
    } else {
        copiarURL();
        alert('Comparte este texto: ' + texto);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar modales al hacer clic afuera
    window.onclick = function(event) {
        const qrModal = document.getElementById('qrModal');
        const pauseModal = document.getElementById('pauseModal');
        
        if (event.target === qrModal) {
            qrModal.classList.remove('show');
        }
        if (event.target === pauseModal) {
            pauseModal.classList.remove('show');
        }
    }
    
    // Mostrar bienvenida al cargar
    mostrarBienvenida();
});

// Soporte de teclado
document.addEventListener('keydown', (e) => {
    if (!estadoJuego.enPausa && document.getElementById('gameScreen').classList.contains('active')) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') seleccionarRespuesta(0);
        if (e.key === '2' || e.key === 'b' || e.key === 'B') seleccionarRespuesta(1);
        if (e.key === '3' || e.key === 'c' || e.key === 'C') seleccionarRespuesta(2);
        if (e.key === '4' || e.key === 'd' || e.key === 'D') seleccionarRespuesta(3);
    }
});