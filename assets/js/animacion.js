	var index = 0;
	$("#OrdenTrabajo").click(function(){
		addTab();
	});

	function addTab(){
		$('#tt').tabs('add',{
			title:"<h4 class='wc-tittle'>Nuevo</h4><span class='tittle-line'></span>",
			content:'Tab Body',
			closable:true
		});
	}
/* colores - estado orden */
	$("#linkNuevo").click(function(){
		$('#tipoOrden').html("Orden <span i class='label label-warning'>Nueva</span>");
	});
	$("#linkAbierto").click(function(){
		$('#tipoOrden').html("Orden <span i class='label label-danger'>Abierta</span>");
	});
	$("#linkPendiente").click(function(){
		$('#tipoOrden').html("Orden <span i class='label label-info'>Pendiente</span>");
	});
	$("#linkResuelto").click(function(){
		$('#tipoOrden').html("Orden <span i class='label label-default'>Resuelta</span>");
	});

