
describe("Teste de validação valor_do_jogo ", function() {

  it("Valores Sorteio do Placar ", function() {
	
	expect( sorteio(1,1) ).not.toBe(-1);
	
	expect( sorteio(3,2) ).not.toBe(5);
	
	expect( sorteio(3,3) ).not.toBe(6);
    
  });

});


describe("Teste de validação validar_pontos ", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(1,3) ).toBe("Vitória do Time 2");

	expect( validar_pontos(3,1) ).toBe("Vitória do Time 1");

	expect( validar_pontos(1,1) ).toBe("Empate");
	
    
  });


});
 


describe("Teste de validação validar_pontos INVALIDOS", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(3,1) ).not.toBe("Vitória do Time 2");	
	
	expect( validar_pontos(2,3) ).not.toBe("Vitória do Time 1");	
	
	expect( validar_pontos(3,1) ).not.toBe("Empate");
	
    
  });


});