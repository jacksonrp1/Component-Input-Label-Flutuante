<div style="display: inline">
  <a href="https://www.jacksondev.com.br/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Website&message=JacksonDev&color=red&style=for-the-badge&logo=webflow"/>
  </a>
  <a href="https://pt-br.reactjs.org/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=React Js&color=202124&style=flat-square&logo=react"/>
  </a>
</div>

# Projeto Component Input Com Label Flutuante

### <a href="https://jacksonrp1.github.io/Component-Input-Label-Flutuante/build/">Clique aqui</a> para visualizar o projeto concluído.

#### Scripts Disponíveis

```
git clone https://github.com/jacksonrp1/Component-Input-Label-Flutuante.git
```

#### Dentro do projeto recém-clonado, você pode executar:

```
npm install
```

No diretório do projeto, execute:

```
npm start
```

Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

## Assim que o component for chamado :

### Input com campo vazio:
![image](https://user-images.githubusercontent.com/83042566/214456265-1723618e-c495-41da-a5b2-bbd13e3d55b7.png)

### Input com campo preenchido:
![image](https://user-images.githubusercontent.com/83042566/214456693-112d0711-d548-4642-ba7d-bf6c07a20237.png)

### Input com foco no login:
![image](https://user-images.githubusercontent.com/83042566/214456662-b1870638-8400-450c-9a19-9aa6fcb57aa8.png)

### Input com visualizar senha:
![image](https://user-images.githubusercontent.com/83042566/214456746-f4018594-1432-4436-b957-6dac1d60eb6b.png)

### Por padrão o input já vem com algumas configurações default:
![image](https://user-images.githubusercontent.com/83042566/214457384-c1987086-326d-4889-9a34-05eec3b13d03.png)

![image](https://user-images.githubusercontent.com/83042566/214457753-c3977b87-fd6b-4a70-bdab-9ec5c0711b2f.png)

## Abaixo os parâmetros que podem ser informados:
``` javascript
  tipoInput = 'text', // O tipo de input
  label = 'Label', // A palavra que fica flutuando 
  obrigatorio = false, // Se é obrigatório
  corCampoText = '#cfcfcf', // Cor do texto dentro do input
  corLabel = '#cfcfcf', // Cor do texto dentro da palavra que fica flutuando 
  corEye = '#cfcfcf', // Cor do icone de revelar a senha
  corLinhaBottom = '#cfcfcf' // Cor da linha inferior
```
### Exemplo chamando o componente e passando alguns parâmetros de cores para ele:
![image](https://user-images.githubusercontent.com/83042566/214459586-4221226a-d611-46e2-ba1c-8e339046afbe.png)
### Resuldado:
![image](https://user-images.githubusercontent.com/83042566/214459543-94fc909e-3941-464f-896e-bda76e9ae418.png)
![image](https://user-images.githubusercontent.com/83042566/214459731-c9579ee2-2845-4065-b7f5-15eb750b2f0d.png)



Você também pode ver erros no console.
```
npm test
```
Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre como executar testes para obter mais informações.
```
npm run build
```
Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.
A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!
