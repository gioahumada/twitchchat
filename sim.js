// prototypes

// chatter class
var Chatter = function(name, color) {

	// name not given? generate a cool one
	if(name == undefined) {
		this.name = this.generateName();
	} else {
		this.name = name;
	}

	//
	if(color == undefined) {
		this.color = this.generateColor();
	} else {
		this.color = color;
	}

	this.messages = [
		"¿Cuál es tu juego favorito?",
		"¿Cómo te iniciaste en el mundo del streaming?",
		"¿Cuánto tiempo llevas siendo streamer?",
		"¿Prefieres juegos de un solo jugador o multijugador?",
		"¿Cuál es tu género de juego favorito?",
		"¿Tienes algún ritual antes de comenzar a transmitir?",
		"¿Cuál fue tu momento más épico en un juego?",
		"¿Cómo eliges los juegos que vas a transmitir?",
		"¿Qué consejo le darías a alguien que quiere comenzar a hacer streaming?",
		"¿Tienes alguna meta específica como streamer?",
		"¿Cuál es tu mayor desafío al hacer streaming?",
		"¿Cuál es tu parte favorita de interactuar con la audiencia?",
		"¿Cómo manejas los comentarios negativos en el chat?",
		"¿Cuál es tu configuración de hardware para transmitir?",
		"¿Tienes algún juego al que siempre vuelves?",
		"¿Cuál es tu personaje de videojuego favorito?",
		"¿Cómo decidiste tu nombre de usuario en Twitch?",
		"¿Qué tan importante es para ti la calidad de la transmisión?",
		"¿Cuál es tu platillo de comida chatarra favorito para comer mientras transmites?",
		"¿Tienes algún momento vergonzoso o gracioso durante una transmisión?",
		"¿Qué tipo de música te gusta escuchar mientras juegas?",
		"¿Cuál es tu juego más esperado del próximo año?",
		"¿Cuál es tu estrategia para mantener a la audiencia comprometida?",
		"¿Has tenido alguna experiencia extraña o graciosa con un seguidor?",
		"¿Prefieres PC o consola para tus transmisiones?",
		"¿Cuál es tu juego menos favorito?",
		"¿Tienes alguna rutina de calentamiento antes de empezar a jugar?",
		"¿Cuál es la historia detrás de tu emote favorito?",
		"¿Qué cambios te gustaría ver en la plataforma de Twitch?",
		"¿Tienes algún momento favorito de tu carrera como streamer hasta ahora?",
		"¿Cómo manejas la multitarea durante la transmisión?",
		"¿Qué haces cuando no estás transmitiendo?",
		"¿Cómo decides cuándo cambiar de juego durante una transmisión?",
		"¿Cuál es tu estrategia para interactuar con la audiencia mientras juegas?",
		"¿Tienes algún juego que ames pero que nunca has transmitido?",
		"¿Cuál es tu habilidad más destacada en un juego?",
		"¿Qué opinas sobre las colaboraciones con otros streamers?",
		"¿Cuál es tu mayor logro como streamer hasta ahora?",
		"¿Prefieres jugar con amigos o en solitario durante las transmisiones?",
		"¿Tienes alguna historia divertida de tus primeros días como streamer?",
		"¿Cuál es tu parte menos favorita de ser un streamer?",
		"¿Has tenido algún encuentro memorable con un desarrollador de juegos?",
		"¿Cuál es tu mecánica de juego favorita en un juego?",
		"¿Cómo eliges las configuraciones de tus transmisiones?",
		"¿Cuál es tu opinión sobre los mods en los juegos?",
		"¿Qué es lo más emocionante que te ha pasado durante una transmisión en vivo?",
		"¿Tienes algún juego al que te gustaría ser realmente bueno?",
		"¿Cuál es tu juego retro favorito?",
		"¿Prefieres jugar en una consola clásica o en una más moderna?",
		"¿Cómo te relajas después de una larga sesión de streaming?",
		"¿Cuál es tu lugar favorito para jugar?",
		"¿Tienes algún hábito peculiar mientras transmites?",
		"¿Cuál es tu arma favorita en un juego?",
		"¿Cómo gestionas el tiempo entre transmitir y mantener una vida personal?",
		"¿Cuál es tu opinión sobre los juegos de mundo abierto?",
		"¿Tienes alguna tradición especial durante las transmisiones festivas?",
		"¿Cómo eliges tus metas para las transmisiones benéficas?",
		"¿Cuál es tu logro más difícil en un juego?",
		"¿Prefieres juegos competitivos o cooperativos?",
		"¿Cuál es tu momento más gracioso durante una transmisión?",
		"¿Cómo eliges tu horario de transmisión?",
		"¿Tienes alguna mascota que te acompañe durante las transmisiones?",
		"¿Qué opinas sobre los esports?",
		"¿Cómo eliges tus emotes y gráficos para la transmisión?",
		"¿Cuál es tu momento más épico de falla en un juego?",
		"¿Tienes alguna rutina de enfriamiento después de una transmisión intensa?",
		"¿Cuál es tu opinión sobre los juegos de mundo virtual y realidad aumentada?",
		"¿Tienes algún juego que te haya hecho llorar?",
		"¿Cómo te recuperas después de una derrota frustrante en un juego?",
		"¿Cuál es tu opinión sobre los juegos de terror?",
		"¿Tienes alguna meta específica para el próximo año como streamer?",
		"¿Cómo eliges tus retos personales durante las transmisiones?",
		"¿Prefieres jugar en modo historia o multijugador en línea?",
		"¿Cuál es tu juego más relajante para jugar después de un día agotador?",
		"¿Cómo manejas los momentos incómodos o embarazosos durante una transmisión?",
		"¿Tienes alguna historia graciosa de interacción con otros streamers?",
		"¿Cuál es tu opinión sobre los juegos de mundo persistente?",
		"¿Cómo decides cuándo cambiar de juego durante una transmisión?",
		"¿Qué consejo le darías a alguien que está considerando convertirse en streamer?",
		"¿Cuál es tu snack fav mientras ves TikToks? 🍿",
		"¿Eres de los que le dan like antes de ver todo el video? 👍",
		"¿Algún TikToker que te haga morir de risa siempre? 😂",
		"¿Prefieres bailar o hacer lip-sync en tus videos? 💃",
		"¡Dime tu TikTok guilty pleasure! 🙊",
		"¿Has intentado recrear un baile viral y terminaste en el suelo? 😅",
		"¿Cuánto tiempo pasas en TikTok al día? ⏰",
		"¿Alguna canción que descubriste gracias a TikTok y ahora amas? 🎶",
		"¿Tienes un filtro favorito que usas todo el tiempo? 🌈",
		"¿Cuál es tu reacción cuando ves un TikTok ultra creativo? 😱",
		"¿Te unirías a una tendencia de baile aunque sea un desastre? 🕺",
		"¿Has tenido algún video que se volvió viral inesperadamente? 🚀",
		"¿Cuál es tu consejo para hacer un TikTok exitoso? 🌟",
		"¿Cuántas veces editas un video antes de publicarlo? ✂️",
		"¿Has conocido a alguien interesante a través de TikTok? 🤝",
		"¿Cuál es el meme de TikTok que siempre te hace reír? 😆",
		"¿Algún truco para aprenderse los bailes rápidamente? 🔄",
		"¡PogChamp! Esa jugada estuvo increíble. 🎮",
		"F en el chat por esa derrota. 😢",
		"¿Alguien más está viendo esto con una bolsa de papitas? 🥔",
		"¡Hype train en el chat! 🚂",
		"Me encanta tu emote nuevo. ¿Cómo lo consigo? 😍",
		"¿Cuándo es la próxima transmisión? No me la quiero perder. ⏰",
		"¡Saludos desde [nombre del país]! 🌍",
		"¿Alguien tiene tips para mejorar en [nombre del juego]? 🤔",
		"¡Ese juego es una joya! ¿Cuántas horas llevas jugando? ⏳",
		"¡Tus reacciones son lo mejor! 😂",
		"¿Has considerado hacer un meetup con tus seguidores? 👥",
		"¿Cuál es tu opinión sobre el último parche del juego? 🛠️",
		"¡Chat, decidamos qué juego juega la próxima vez! 🗳️",
		"¡Fiesta de emotes en el chat! 🎉",
		"¡Esa skin que usas es épica! 🔥",
		"¿Cómo mantienes el pelo tan bien durante las transmisiones? 💇",
		"¡Sorpresa en 3... 2... 1...! ¿Nos cuentas? 🤐",
		"¡Saludos desde el futuro! ⏩",
		"¿Alguien más lloró con la historia de ese juego? 😢",
		"¡Ese momento merece un clip! 📹",
		"¿Cuál es tu snack de batalla para ver TikToks? 🍿",
		"¿Te ha pasado que pasas más tiempo viendo TikToks que grabándolos? 😅",
		"Si pudieras colaborar con un TikToker famoso, ¿quién sería? 👀",
		"¿Alguna vez te han reconocido en la calle gracias a TikTok? 😎",
		"¿Prefieres los TikToks divertidos o los que te hacen reflexionar?",
		"¿Cuál es tu peor experiencia grabando un TikTok? 🤪",
		"¿Has tenido alguna canción de TikTok pegada en tu cabeza por días? 🎵",
		"¿Cuántos intentos necesitas para grabar el TikTok perfecto? 🔁",
		"¿Usas TikTok para descubrir nuevas tendencias de moda? 👗",
		"¿Te consideras parte del lado divertido o del lado artístico de TikTok? 🎨",
		"¿Cuál es tu reacción cuando ves que un TikTok tuyo tiene millones de vistas? 😱",
		"¿Has participado en algún reto de TikTok? ¿Cuál fue? 💃",
		"¿Cómo describirías tu estilo de TikTok en tres palabras? 🌈",
		"¿Qué es lo más loco que has hecho por un desafío de TikTok? 😜",
		"¿Algún TikToker que te inspire constantemente? 🌟",
		"¿Tienes algún TikTok que nunca publicaste por ser demasiado vergonzoso? 🙈",
		"¡Esa jugada estuvo OP! 🔥",
		"F por esa derrota, pero con estilo. 😎",
		"¿Quién más está viendo esto mientras come helado? 🍦",
		"¡Hype train en el chat! Todos a bordo. 🚂",
		"¿Dónde consigo esos stickers tan chulos que usas en el chat? 🤩",
		"¿Cuándo es la próxima transmisión? No quiero perderme el show. 📅",
		"¡Saludos desde el sofá de casa! 🏡",
		"¿Tips para ser tan pro como tú en [nombre del juego]? 🎮",
		"Esa skin que llevas puesta es más bonita que mi armario entero. 😂",
		"¿Cómo haces para que tu micrófono suene tan bien? 🎤",
		"¡Chat, opinemos sobre qué juego toca después! 🗣️",
		"¡Clipazo para ese momento épico! ¿Ya está en YouTube? 🎬",
		"¿Alguien más se queda despierto hasta tarde viendo streams? 🌙",
		"¡Este chat es mi segunda familia! ❤️",
		"¿Algún encuentro raro con seguidores que puedas contar? 🤪",
		"¿Has probado las galletas nuevas de la tienda? Recomiéndamelas. 🍪",
		"¡Ese juego es un tesoro escondido! ¿Cuántas horas le has dedicado? ⏰",
		"¡Esa revelación merece un clip instantáneo! 📹",
		"¿Alguien más viendo esto desde la cama? 🛌",
		"¿Cuál fue el momento más emotivo que viviste en un juego? 😢",
		"¡Ese momento es digno de meme! ¿Ya lo pusieron en el Discord? 😂"
	  ];
	  

}

Chatter.prototype.generateName = function() {

	// adjective list
	var adjectives = new Array(	"Juan", "María", "Pedro", "Ana", "Carlos", "Laura", "Andrés", "Elena", "Luis", "Isabel",
	"Javier", "Sofía", "Miguel", "Carmen", "José", "Marta", "Pablo", "Patricia", "Alejandro", "Luisa",
	"Fernando", "Beatriz", "Diego", "Lucía", "Manuel", "Paula", "Jorge", "Raquel", "Alberto", "Silvia",
	"Ricardo", "Natalia", "Gabriel", "Adriana", "Federico", "Mónica", "Francisco", "Victoria", "Antonio", "Rosa",
	"Roberto", "Verónica", "Daniel", "Cristina", "Héctor", "Alejandra", "Gonzalo", "Clara", "Raúl", "Nuria",
	"Fabián", "Valeria", "Joaquín", "Diana", "Emilio", "Camila", "Gustavo", "Miriam", "Sebastián", "Catalina",
	"Martín", "Claudia", "Rafael", "Inés", "Arturo", "Eva", "Ignacio", "Alicia", "Hugo", "Sara",
	"Oscar", "Luciana", "Xavier", "Irene", "Álvaro", "Elsa", "Felipe", "Lorena", "Julio", "Esther",
	"Enrique", "Monica", "Víctor", "Yolanda", "Nelson", "Olga", "Leonardo", "Rocio", "Roberto", "Marina");

	// noun list
	var nouns = new Array(	"Gómez", "Rodríguez", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "González", "García", "Romero",
	"Díaz", "Hernández", "Torres", "Ruiz", "Álvarez", "Jiménez", "Moreno", "Molina", "Ortega", "Navarro",
	"Ramírez", "Medina", "Herrera", "Castro", "Serrano", "Flores", "Aguilar", "Vargas", "Suárez", "Ramos",
	"Vázquez", "Reyes", "Alonso", "Jiménez", "Fuentes", "Cruz", "Morales", "Iglesias", "López", "Silva",
	"Ferrer", "Méndez", "Campos", "Núñez", "Cabrera", "Salazar", "Mendoza", "Estévez", "Arias", "Camacho",
	"Aguirre", "Figueroa", "Peña", "Gallego", "Cortés", "Valencia", "Aguayo", "Fuentes", "Santos", "Hidalgo",
	"Calderón", "Guerra", "Valenzuela", "Vega", "Guillén", "Lara", "Valdés", "Bermúdez", "Parra", "Miranda");

	var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
	var noun = nouns[Math.floor(Math.random()*nouns.length)];

	var number;

	// force 10% of users to have 69 in their name
	// force 10% of users to have 420 in their name
	// force 20% of users to have no number in their name

	var numberDecider = Math.floor(Math.random()*9);

	if(numberDecider == 0 || numberDecider == 1) {
		number = "";
	} else if(numberDecider == 2) {
		number = Math.floor(Math.random()*1000);
	} else if(numberDecider == 3) {
		number = Math.floor(Math.random()*1000);
	} else {
		number = Math.floor(Math.random()*1000);
	}


	var username = '@' + adjective + noun.toLowerCase() + number;

	return username;

};

Chatter.prototype.generateColor = function() {

	// var colors = new Array("Blue", "Coral", "DodgerBlue", "SpringGreen", "YellowGreen", "Green", "OrangeRed", "Red", "GoldenRod", "HotPink", "CadetBlue", "SeaGreen", "Chocolate", "BlueViolet", "Firebrick");
	var colors = new Array("0000FF", "FF7F50", "1E90FF", "00FF7F", "9ACD32", "008000", "FF4500", "FF0000", "DAA520", "FF69B4", "5F9EA0", "2E8B57", "D2691E", "8A2BE2", "B22222");

	var colorIndex = Math.floor(Math.random()*colors.length);

	return "#" + colors[colorIndex];
};

Chatter.prototype.speak = function() {

	// check if we're gonna do the main meme or not
	// currently 33% chance
	var mainMemeDecider = Math.floor(Math.random()*2);

	var chatMessage;

	// we're copying the main meme!
	if(mainMemeDecider == 0 && mainMemeIndex != undefined && mainMemeDuration >= 0) {
		chatMessage = this.messages[mainMemeIndex];
		mainMemeDuration--;
	} else {
		// randomly grab a message from message array
		var messageDecider = Math.floor(Math.random()*this.messages.length);
		chatMessage = this.messages[messageDecider];

		var mainMemeOverwriteDecider = Math.floor(Math.random()*50);

		// let's start a new main meme!
		if(mainMemeOverwriteDecider == 0) {
			mainMemeIndex = messageDecider;
			mainMemeDuration = mainMemeDurationStartValue;
			console.log("overwriting main meme! to: " + this.messages[messageDecider]);
		}

	}

	// append the message as a paragraph, including username and name color
	var stringToAppend = "<p><span style=\"font-weight:bold; color:" + this.color + ";\">" + this.name + "</span>: " + chatMessage + "</p>";
	$("#chat").append(stringToAppend);

	// grab chat height and wrapper height
	var chatHeight = $("#chat").height();

	var firstChildHeight = 0;

	// if chat height is over 3000 pixels, remove the first paragraph inside it
	if(chatHeight >= 3000) {
		firstChildHeight = $("#chat p:first-child").height() + 12;
		$("#chat p:first-child").remove();
	}

	var wrapperHeight = $("#chatWrapper").height();

	// calculate the new height of the chatbox based on how big the last message sent was
	var newHeight = chatHeight + $("#chat p:last-child").height() + 12 - firstChildHeight;

	// apply the new chatbox height
	$("#chat").css("height", newHeight);

	// if chat height is taller than the wrapper, force bottom alignment
	if(chatHeight >= wrapperHeight) {
		$("#chat").css("bottom", "0px");
	}
};

Chatter.prototype.attemptToSpeak = function() {

	var chatDecider = Math.floor(Math.random()*49);

	// let's chat!
	if(chatDecider == 3) {
		this.speak();
	}


};

// main logic
var chatters = new Array();
var mainMemeIndex;
var mainMemeDuration;
var mainMemeDurationStartValue = 50;

for(i = 0; i < 30; i++) {
	chatters.push(new Chatter());
}

function attemptToChat() {

	var speakDecider = Math.floor(Math.random()*3);

	if(speakDecider == 0) {
		var chatterPicker = Math.floor(Math.random()*chatters.length);

		chatters[chatterPicker].speak();

	}

}

setInterval(function() { attemptToChat(); }, 3000);
