# jsml

## Description
A library to render HTML

### Features

 - Create an HTML using a lightway notation in JSON

 > Project Status: in progress :warning:

 ## instalation
 - just run: node index.js

## Test
> cd test
> node index.js

## alguns apelidos:
Createmeals - (create) create (atemeal) html (s) specification
rango - abreviando e abrasileirando
hango - americanizando o abrasileirado.

### Atributos

A forma mais fácil de definir um atributo, é coloca-lo juntamente com o nome de uma tag:

```
{"!DOCTYPE html":null} //<html lang="pt-BR"></html>
```

Também é possível defini-lo como um valor de propriedade de uma tag, mas neste caso existem algumas restrições:

* O valor de um atributo, sermpre será uma string.
* O valor de um atributo, nunca será nulo, mas pode ser uma string vazia.

```
{"!DOCTYPE":[{"html":""}}]//<!DOCTYPE html></!DOCTYPE>
{"html":{"lang":"pt-BR"}}//<html lang="pt-BR"></html>
{"html":[{"lang":"pt-BR"}}]//<html lang="pt-BR"></html>
{"div":[{"lang":"pt-BR"}}]//<html lang="pt-BR"></html>
{"p":[{"title":"Free Web tutorials"}, "W3Schools.com"]}//<p title="Free Web tutorials">W3Schools.com</p>
```
