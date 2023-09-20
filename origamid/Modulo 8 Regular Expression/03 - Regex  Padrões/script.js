/*
(?:) Item na frente do grupo nao seleciona.

**Validar CEP

/\d{5}[\s-]?\d{3}/

00000-000
00000 000
00000000

Legenda:
[\s-]? - qualquer caractere de espaços ou traços (opcional).
\d{5} - cinco dígitos numéricos.
\d{3} - três digitos numericos no final


**Validar CPF
/\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/
ou
/(\d{3}[.-]?){3}\d{2}/

000.000.000-00
000-000-000-00
000.000.000.00
000000000-00
000000000.00
00000000000

Legenda:
\d{3} - tres digitos numericos
[.-]? - Seguidos de ponto ou traço opcional
\d{2} - dois digitos numericos

**Validar CNPJ
\d{2}[.-]?(?:\d{3}[.-]?){2}[/.-]?\d{3,4}[.-]?\d{2}

00.000.000/000-00
00000000000000
00.000.000/0000-00
19.678.428/0001-68
00-000-000-0000-00
00.000.000/000000
00.000.000.000000
00.000.000.0000.00


**Telefone 
    (?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}


+55 11 98888-8888
+55 11 98888 8888
+55 11 988888888
+55 11988888888
+5511988888888
5511988888888
11 98888-8888
11 98888 8888
(11) 98888 8888
(11) 98888-8888
11-98888-8888
11 98888 8888
11988888888
11988888888
988888888
(11)988888888


**Email
[\w.-]+@[\w-]+\.[\w-.]+


email@email.com  
  email@email.com.org  
  email-email@email.com  
  email_email@email.com  
  email.email23@email.com.br  
  email.email23@empresa-sua.com.br  
  c@contato.cc  


  
*/