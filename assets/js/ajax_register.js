function register(){
	var nickname = $("#nickname").val();
	var email = $("#email").val();
	var pass = $("#password").val();
	var passVerify = $("#password-1").val();
	if(nickname != "" && email != "" && pass != "" && passVerify != ""){
		$.ajax({
			type: 'post',
			url: 'ajax_register.php',
			data: {
				do_register: "do_register",
				nickname: nickname,
				email: email,
				password: pass,
				passwordVerify: passVerify,
			},
			success: function(response) {
				if(response=="success"){
					iziToast.success({title: "Uhuul!", message: 'Você registrou sua conta com sucesso'});
					window.location.href = "../";
				} else if (response == "username") {
					iziToast.error({title: "Erro", message: "Uma conta já foi registrada com o nome de usúario informado"});
				} else if (response == "email") {
					iziToast.error({title: "Erro", message: "Uma conta já foi registrada com o e-mail informado"});
				} else if (response == "password") {
					iziToast.error({title: "Erro", message: "As senhas digitadas não coincidem"});
				} else {
					iziToast.error({title: "Ué?", message: "Ocorreu um erro e sua conta não foi registrada"});
				}
			}
		});
	} else {
		iziToast.error({title: 'Erro', message: "Preencha todos os campos corretamente"});
	}
	return false;
}