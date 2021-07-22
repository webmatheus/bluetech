  $( document ).ready(function() {
	  
	//inicializa mascara financeira
	$('.price').maskMoney();
	
	//oculta painel de resultados
	$("#results").hide();

	//form  ================================
	$('#form-send-loan').submit(function(){	
		
		//capta e trata valores
		var needed_val = $("#place-loan-value").val().replace(",", "");
		var home_val = $("#place-value").val().replace(",", "");
		var fee = 0;
		var months = $("#loan-val").val();
		
		//descobre taxa
		if (parseInt(home_val) <= 100000){
			fee = 1;
		}else{
			fee = 1.5;
		}

		//descobre valor da parcela
		var single_val = parseInt(needed_val)/parseInt(months)*fee;

		//descobre valor final
		var final_val = single_val.toFixed(2)*parseInt(months);
		
		//define valores de saida
		$("#fee-info").html(fee+"%");
		$("#value-final-info").html(final_val.toFixed(2));
		$("#part-value-info").html(single_val.toFixed(2));
		
		$("#results").show();
		
		return false;
	});
	  
  });