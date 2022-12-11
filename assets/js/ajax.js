/*$('document').ready(function(){
	$("#btn-login").click(function(){
		var data = $("#login-form").serialize();
			
		$.ajax({
			type : 'POST',
			url  : 'login.php',
			data : data,
			dataType: 'json',
			beforeSend: function()
			{	
				$("#btn-login").html('Validando ...');
			},
			success :  function(response){						
				if(response.codigo == "1"){	
					$("#btn-login").html('Entrar');
					$("#login-alert").css('display', 'none')
					window.location.href = "home.php";
				}
				else{			
					$("#btn-login").html('Entrar');
					$("#login-alert").css('display', 'block')
					$("#mensagem").html('<strong>Erro! </strong>' + response.mensagem);
				}
		    }
		});
	});

});*/

function login(){
	var email=$("#nickname").val();
	var pass=$("#password").val();
	if(email!="" && pass!=""){
		$.ajax({
			type: 'post',
			url: 'ajax_login.php',
			data: {
				do_login: "do_login",
				nickname: email,
				password: pass
			},
			beforeSend: function()
			{	
				$("#btn-login").html('Validando...');
			},
			success:function(response) {
				if(response=="success"){
					iziToast.success({title: "Uhuul!", message: 'Você logou com sucesso'});
					window.location.href = "../";
				} else if (response == "password") {
					iziToast.error({title: "Erro", message: "Senha incorreta"});
				} else {
					console.log(response);
					iziToast.error({title: "Erro", message: "Nenhuma conta com usúario ou e-mail informado foi encontrada"});
				}
			}
		});
	} else {
		iziToast.error({title: 'Erro', message: "Preencha todos os campos corretamente"});
	}
	return false;
}