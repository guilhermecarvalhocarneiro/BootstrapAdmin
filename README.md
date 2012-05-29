BootstrapAdmin
==============

Projeto para customização do Admin utilizando o Bootstrap

Este projeto tem por objetivo a customização do Admin utilizando o Bootstrap.
A customização foi feita adicionando os arquivos css e js do pacote Bootstrap e alterando os arquivos html na 
pasta template.

Como é a primeira fez que compartilho um arquivo no GitHub peço desculpas por algum possível erro.

A instalação

1 - Criar o projeto Django

2 - Criar uma app chamada base onde constam os arquivo staticos para a customização

3 - Adicionar no settings a app base
    INSTALLED_APPS = (...,'base',)
    
4 - Configurando as variáveis STATIC_ROOT STATIC_URL e o TEMPLATE_DIR no settings.
    STATIC_ROOT = 'static'
    STATIC_URL = '/static/'
    TEMPLATE_DIRS = ('templates',    
    )
    
5 - Executar o collecstatic.