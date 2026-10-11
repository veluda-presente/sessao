# Sessão a Dois: como publicar (uma vez só)

O app inteiro é esta pasta. Não tem planilha, nem Apps Script, nem conta Google. Os dados de cada casal ficam no celular deles.

## O que tem na pasta

- **index.html**: o app
- **sw.js**: faz o app funcionar sem internet
- **manifest.webmanifest**: nome e ícone do app na tela inicial
- **icons/**: ícones (monograma VV provisório)
- **fonts/**: fontes da Veluda, guardadas junto para funcionar offline

## Publicar no GitHub Pages

1. Crie a conta em **github.com**. Escolha o nome de usuário com calma: ele fica no link das tags para sempre. Exemplo: `veludapresente`.
2. Clique em **New repository**. Nome: `sessao`. Marque **Public**. Clique em **Create repository**.
3. Clique em **uploading an existing file**. Abra a pasta descompactada no computador, selecione **todo o conteúdo dela** (arquivos e as pastas icons e fonts) e arraste para a página. Clique em **Commit changes**.
4. Vá em **Settings > Pages**. Em Branch, escolha **main** e **/ (root)**. Clique em **Save**.
5. Espere 2 minutos. O app estará em: `https://SEUUSUARIO.github.io/sessao/`

## Gravar as tags

O link é **o mesmo para todos os clientes**. Não precisa cadastrar nada por casal.

1. App **NFC Tools** > **Escrever** > **Adicionar um registro** > **URL** > cole o link.
2. Toque em **Escrever** e encoste a tag. Teste.
3. Depois de testar, pode **bloquear** a tag (Outros > Bloquear tag). O bloqueio é permanente.

## Regras fixas

- Nunca renomear o usuário do GitHub nem o repositório `sessao`, e nunca apagá-los.
- Se um dia alterar o app, aumente a versão na primeira linha útil do `sw.js` (`v1` para `v2`), senão os celulares continuam com a versão antiga guardada.

## Trocar o ícone pelo monograma oficial

Substitua os arquivos da pasta `icons/` por versões com o mesmo nome e tamanho:
`icon-192.png` (192×192), `icon-512.png` (512×512), `maskable-512.png` (512×512 com margem maior), `apple-touch-icon.png` (180×180), `favicon.png` (64×64).
Depois aumente a versão no `sw.js`.
