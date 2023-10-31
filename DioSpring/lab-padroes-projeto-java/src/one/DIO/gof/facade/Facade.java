package one.DIO.gof.facade;

import subsistema1crm.CrmService;
import subsistema2cep.CepApi;

public class Facade {

    public void migrarCliente(String nome, String cep){
        String cidade = CepApi.getInstance().recuperarCidade(cep);
        String estado = CepApi.getInstance().recuperarEstado(cep);
        CrmService.gravarCliente(nome,cep, cidade, estado);
    }

}
