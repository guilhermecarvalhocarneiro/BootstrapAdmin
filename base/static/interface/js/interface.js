/* Ativando os tabs da tela inicial*/

$(document).ready(function(){     
   $('input[id^="id_data"][class^="vDateField"]').datepicker({ dateFormat: "dd/mm/yy" }); 
   $('input[id^="id_data"][class^="vDateField"]').datepicker("option", "monthNames", ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]);
   $('input[id^="id_data"][class^="vDateField"]').datepicker("option", "dayNamesMin", ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]);
   $('input[id^="id_data"][class^="vDateField"]').datepicker("option", "gotoCurrent", true );
   $('div[class="actions row"]').css("margin-right","3px");

   $remover();
   /*Js para exibir o modal das atividades do processamento do recorte jurídico*/   
   $('#link_adicionar_atividade').click(function(){
       $('#form_gravar_atividade_recorte').show();
       $('div[id ^= "div_resposta_operacao_ajax_"]').html('');
       $('#div_dialog_adicionar_atividade').dialog("open");      
   });
   
   $('#link_adicionar_prazo').click(function(){
       $('#form_gravar_prazo_processual').show();
       $('div[id ^= "div_resposta_operacao_ajax_"]').html('');
       $('#div_dialog_adicionar_prazo').dialog("open");
   });
   
   $('#link_adicionar_andamento').click(function(){
       $('#form_gravar_andamento_processual').show();
       $('div[id ^= "div_resposta_operacao_ajax_"]').html('');
       $('#div_dialog_adicionar_andamento').dialog("open");
   });
   
   $('#link_processar_recorte').click(function(){
       $('#div_resposta_processamento_recorte').toggle();       
       $('#div_envio_processamento_recorte').toggle();
       $('#div_dialog_processar_recorte').dialog("open");
       
   });
   // Verificar o motivo do não aplicação do efeito.
   $('input[id*="telefone"]').mask("(99) 9999-9999");
   $('input[id^="id_data"][class="vTimeField"]').mask("99:99");
   $('input[id^="id_data"][class^="vDateField"]').mask("99/99/9999");

   /*Js para exibição do formulário de contato nas janelas modal JQuery*/
    $('a[id^="link_div_filha_modal_"]').click(function(){
       $('div[id^="div_filha_modal_"]').toggle('slow');
       $('#div_resposta_envio_andamento').html('');
    });

  /*Fim do Js para formulário de contato nas janelas modal JQuery*/
});

(function($){
    $remover = function(){
            $.ajax({
                beforeSend: function(){
                },
                complete: function(){                    
                    $('div[class="selector"]').addClass('well');                    
                    $('div[class="selector-available"] p').css('background','none').css('border','none');
                    $('div[class="selector-available"] label').hide();
                    $('div[class="selector-chosen"] select').css('border-top', 'solid 1px #CCCCCC');
                },

            });
    }
})(window.jQuery);