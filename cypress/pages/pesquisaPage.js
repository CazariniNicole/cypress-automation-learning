

class pesquisaPage {

    entrarSite() {
        cy.visit('https://blogdoagi.com.br/')
    }

    clicarNaLupa(){
        cy.get('#search-open').click()
    }

    preencherCampoBusca(texto){
        cy.get('div[class=desktop-search]  input[class=search-field]').type(texto)
    }

    clicarEmPesquisar(){
        cy.get('div[class=desktop-search] input[class=search-submit]').click()
    }

    validarMensagemPesquisaCorreta(mensagem){
        cy.get('h1[class=archive-title]').should('have.text',mensagem)
    }

    validarMensagemPesquisaIncorreta(mensagem){
        cy.get('h1[class=entry-title]').should('have.text',mensagem)
    }
}

export default new pesquisaPage;