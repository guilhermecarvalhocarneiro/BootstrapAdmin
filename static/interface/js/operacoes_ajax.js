//var $ = django.jQuery;
$(document).ready(function(){
    var tempo_janela_dialogo = 3000;
    /*JS para gravação de atividade a partir do recorte*/
   $('div[id ^= "div_resposta_operacao_ajax_"]').hide();
   $('div[id ^= "div_resposta_operacao_ajax_"]').html('');

   $('#link_gravar_atividade_recorte').click(function(){
       var dados = $('#form_gravar_atividade_recorte').serialize();
       $('#div_resposta_operacao_ajax').show();
       $('#div_resposta_operacao_ajax').html('Processando...');
       $.ajax({
           url: '/processo/gravar_atividade_recorte/',
           type: "POST",
           data: dados,
           dataType: "text",
           success: function(data, textStatus){
              $('#div_resposta_operacao_ajax').html('Atividade cadastrada com sucesso.');
              $('#div_resposta_operacao_ajax').addClass("alert-success");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
           },
           error: function(mensagem){
              $('#div_resposta_operacao_ajax').html('Ocorreu um erro no procesamento, favor tentar novamente.');
              $('#div_resposta_operacao_ajax').addClass("alert-error");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
           }
       });
   });

   /*JS para gravação de prazo a partir do recorte*/
   $('#link_gravar_prazo_recorte').click(function(){
      var dados = $('#form_gravar_prazo_processual').serialize();
      $('#div_resposta_operacao_ajax').show();
      $('#div_resposta_operacao_ajax').html('Processando...');
      $.ajax({
          url: '/processo/gravar_prazo_recorte/',
          type: "POST",
          data: dados,
          dataType: "text",
          success: function(data, textStatus){
              $('#div_resposta_operacao_ajax').html('Prazo cadastrado.');
              $('#div_resposta_operacao_ajax').addClass("alert-success");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          },
          error: function(xhr, error){
              $('#div_resposta_operacao_ajax').html(xhr.status);
              $('#div_resposta_operacao_ajax').addClass("alert-error");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          }
      });
   });

   /*JS para gravação de andamento a partir do recorte*/
  $('#link_gravar_andamento_recorte').click(function(){
      var dados = $('#form_gravar_andamento_processual').serialize();
      $('#div_resposta_operacao_ajax').show();
      $('#div_resposta_operacao_ajax').html('Processando...');
      $.ajax({
          url: '/processo/gravar_andamento_recorte/',
          type: "POST",
          data: dados,
          dataType: "text",
          success: function(data, textStatus){
              $('#div_resposta_operacao_ajax').html('Andamento cadastrado.');
              $('#div_resposta_operacao_ajax').addClass("alert-success");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          },
          error: function(xhr, error){
              $('#div_resposta_operacao_ajax').html('Ocorreu um erro no procesamento, favor tentar novamente.');
              $('#div_resposta_operacao_ajax').addClass("alert-error");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          }
      });
  });
  /*JS para setar o recorte como processado*/
  $('#link_confirmar_processamento_recorte').click(function(){
      var dados = $('#form_processar_recorte').serialize();
      $('#div_resposta_operacao_ajax').show();
      $('#div_resposta_operacao_ajax').html('Processando...');
       $.ajax({
          url:'/processo/processar_recorte/',
          type: "POST",
          data: dados,
          dataType: "text",
          success: function(data, textStatus){
              $('#div_resposta_operacao_ajax').html('Recorte processado.');
              $('#div_resposta_operacao_ajax').addClass("alert-success");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          },
          error: function(xhr, error){
              $('#div_resposta_operacao_ajax').html('Ocorreu um erro no procesamento, favor tentar novamente.');
              $('#div_resposta_operacao_ajax').addClass("alert-error");
              setTimeout(function(){$('#div_resposta_operacao_ajax').slideUp();},tempo_janela_dialogo);
          }
       });
   });
  /*JS para envio do andamento via SMS para o cliente*/
  $('#link_enviar_sms_andamento_cliente').click(function(){
    var dados = $('#form_envio_sms_andamento_cliente').serialize();
    $('#div_resposta_operacao_envio_sms_ajax').show();
    $('#div_resposta_operacao_envio_sms_ajax').html('Processando...');
    $.ajax({
        url:'/processo/enviar_andamento_sms/',
        type: "POST",
        data: dados,
        dataType: "text",
        success: function(data, textStatus){
              $('#div_resposta_operacao_envio_sms_ajax').html(data);
              $('#div_resposta_operacao_envio_sms_ajax').addClass("alert-success");
              setTimeout(function(){$('#div_resposta_operacao_envio_sms_ajax').slideUp();},tempo_janela_dialogo);
          },
        error: function(xhr, error){
            $('#div_resposta_operacao_envio_sms_ajax').html(xhr.statusText);
            $('#div_resposta_operacao_envio_sms_ajax').addClass("alert-error");
            setTimeout(function(){$('#div_resposta_operacao_envio_sms_ajax').slideUp();},tempo_janela_dialogo);
        }
    });
  });
/* Fim do document.read*/
});
