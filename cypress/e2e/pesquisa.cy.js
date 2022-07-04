
import pesquisaPage from '../pages/pesquisaPage'
import pesquisaFactory from '../factories/pesquisaFactory'


describe('pesquisa', () => {

    it('pesquisar conteudo válido', function () {

        var dado = pesquisaFactory.pesquisaCorreta()

        pesquisaPage.entrarSite()
        pesquisaPage.clicarNaLupa()
        pesquisaPage.preencherCampoBusca(dado.dadoCorreto)
        pesquisaPage.clicarEmPesquisar()

        const mensagemQueDeveTer = 'Resultados da busca por: ' + dado.dadoCorreto
        pesquisaPage.validarMensagemPesquisaCorreta(mensagemQueDeveTer)
    })

    it('pesquisar conteudo inválido', function () {

        var dado = pesquisaFactory.pesquisaIncorreta()

        pesquisaPage.entrarSite()
        pesquisaPage.clicarNaLupa()
        pesquisaPage.preencherCampoBusca(dado.dadoIncorreto)
        pesquisaPage.clicarEmPesquisar()

        const mensagemQueDeveTer = 'Nenhum resultado'
        pesquisaPage.validarMensagemPesquisaIncorreta(mensagemQueDeveTer)
    })

    it('pesquisar conteudo com caractéres especiais', function () {

        var dado = pesquisaFactory.pesquisaCaracteresEspeciais()

        pesquisaPage.entrarSite()
        pesquisaPage.clicarNaLupa()
        pesquisaPage.preencherCampoBusca(dado.dadoEspecial)
        pesquisaPage.clicarEmPesquisar()

        const mensagemQueDeveTer = 'Nenhum resultado'
        pesquisaPage.validarMensagemPesquisaIncorreta(mensagemQueDeveTer)
    })


    
})